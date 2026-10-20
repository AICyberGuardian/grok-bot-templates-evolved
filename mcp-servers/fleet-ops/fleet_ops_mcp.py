#!/usr/bin/env python3
"""
fleet_ops_mcp.py - Production FastMCP Server for Grok Bot Fleet Operations
Location: /workspace/mcp-servers/fleet-ops/fleet_ops_mcp.py
"""

import os
import shutil
import sqlite3
import json
from typing import Dict, Any, List, Optional
import httpx
from pydantic import BaseModel, Field
from mcp.server.fastmcp import FastMCP

# Initialize FastMCP Server
mcp = FastMCP(
    "FleetOpsDaemon",
    dependencies=["pydantic>=2.0", "httpx>=0.25"]
)

# -----------------------------------------------------------------------------
# Input Validation Schemas
# -----------------------------------------------------------------------------
class DiskAuditInput(BaseModel):
    mount_point: str = Field(
        default="/workspace",
        description="Target filesystem path to audit for available disk capacity."
    )

class QueryDatabaseInput(BaseModel):
    db_path: str = Field(
        description="Absolute path to the SQLite database file in /workspace."
    )
    query: str = Field(
        description="Read-only SQL query (SELECT statements only)."
    )
    max_rows: int = Field(
        default=50,
        ge=1,
        le=500,
        description="Maximum rows to return in the result set."
    )

class WebhookDispatchInput(BaseModel):
    target_url: str = Field(
        description="Destination HTTP POST endpoint."
    )
    payload: Dict[str, Any] = Field(
        description="JSON dictionary to transmit in request body."
    )
    auth_bearer: Optional[str] = Field(
        default=None,
        description="Optional bearer token for Authorization header."
    )

# -----------------------------------------------------------------------------
# Tool Implementations
# -----------------------------------------------------------------------------
@mcp.tool(name="audit_disk_health", description="Audits container disk space to prevent out-of-disk failures.")
def audit_disk_health(params: DiskAuditInput) -> Dict[str, Any]:
    """Inspects storage capacity and flags low disk conditions."""
    if not os.path.exists(params.mount_point):
        return {"error": f"Path not found: {params.mount_point}"}

    total, used, free = shutil.disk_usage(params.mount_point)
    pct_used = round((used / total) * 100, 2)
    
    status = "HEALTHY"
    if pct_used > 85.0:
        status = "CRITICAL_PRESSURE"
    elif pct_used > 70.0:
        status = "WARNING_PRESSURE"

    return {
        "mount_point": params.mount_point,
        "total_gb": round(total / (1024**3), 2),
        "used_gb": round(used / (1024**3), 2),
        "free_gb": round(free / (1024**3), 2),
        "percent_used": pct_used,
        "status": status,
        "action_required": status != "HEALTHY"
    }

@mcp.tool(name="query_local_database", description="Executes safe read-only SQL queries against local SQLite stores.")
def query_local_database(params: QueryDatabaseInput) -> Dict[str, Any]:
    """Executes sanitized SELECT statements against local SQLite databases."""
    if not os.path.exists(params.db_path):
        return {"error": f"Database file does not exist: {params.db_path}"}
    
    # Enforce read-only constraint
    clean_query = params.query.strip().upper()
    if not clean_query.startswith("SELECT") or any(kw in clean_query for kw in ["DROP", "DELETE", "UPDATE", "INSERT", "ALTER"]):
        return {"error": "Security Invariant Violated: Only SELECT queries are permitted."}

    try:
        conn = sqlite3.connect(f"file:{params.db_path}?mode=ro", uri=True)
        cursor = conn.cursor()
        cursor.execute(params.query)
        columns = [col[0] for col in cursor.description] if cursor.description else []
        rows = cursor.fetchmany(params.max_rows)
        conn.close()

        return {
            "columns": columns,
            "row_count": len(rows),
            "rows": rows
        }
    except Exception as e:
        return {"error": f"Query execution failed: {str(e)}"}

@mcp.tool(name="dispatch_external_webhook", description="Dispatches signed HTTP notifications to team webhook listeners.")
def dispatch_external_webhook(params: WebhookDispatchInput) -> Dict[str, Any]:
    """Dispatches JSON payloads with HTTP error boundary enforcement."""
    headers = {"Content-Type": "application/json"}
    if params.auth_bearer:
        headers["Authorization"] = f"Bearer {params.auth_bearer}"

    try:
        with httpx.Client(timeout=10.0) as client:
            response = client.post(params.target_url, json=params.payload, headers=headers)
            return {
                "status_code": response.status_code,
                "success": response.is_success,
                "response_body": response.text[:500]
            }
    except Exception as e:
        return {"error": f"Webhook dispatch error: {str(e)}"}

if __name__ == "__main__":
    # Runs in STDIO mode by default
    mcp.run(transport="stdio")
