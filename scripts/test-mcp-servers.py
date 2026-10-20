#!/usr/bin/env python3
"""
scripts/test-mcp-servers.py - Verification suite for grok-bot-templates-evolved FastMCP servers.
Validates server initialization, tool registration, schema contracts, and invocation.
"""

import sys
import os
import tempfile
from pathlib import Path

# Resolve repo root
ROOT = Path(__file__).resolve().parent.parent

def test_fleet_ops():
    print("Testing mcp-servers/fleet-ops...")
    fleet_dir = ROOT / "mcp-servers" / "fleet-ops"
    sys.path.insert(0, str(fleet_dir))
    try:
        import fleet_ops_mcp
        tools = [t.name for t in fleet_ops_mcp.mcp._tool_manager.list_tools()]
        expected = ["audit_disk_health", "query_local_database", "dispatch_external_webhook"]
        for exp in expected:
            assert exp in tools, f"Missing tool {exp} in fleet-ops"
        
        # Test audit_disk_health execution
        with tempfile.TemporaryDirectory() as tmp_dir:
            res = fleet_ops_mcp.audit_disk_health(fleet_ops_mcp.DiskAuditInput(mount_point=tmp_dir))
            assert "total_gb" in res, "audit_disk_health response missing total_gb"
            assert "free_gb" in res, "audit_disk_health response missing free_gb"
            assert res["status"] in ["HEALTHY", "WARNING_PRESSURE", "CRITICAL_PRESSURE"], f"Unexpected status {res.get('status')}"
            
        print("  fleet-ops OK (3 tools registered, execution verified)")
    finally:
        sys.path.pop(0)

def test_knowledge_brain():
    print("Testing mcp-servers/knowledge-brain...")
    kb_dir = ROOT / "mcp-servers" / "knowledge-brain"
    sys.path.insert(0, str(kb_dir))
    try:
        import knowledge_brain_mcp
        tools = [t.name for t in knowledge_brain_mcp.mcp._tool_manager.list_tools()]
        assert "query_knowledge_brain" in tools, "Missing query_knowledge_brain in knowledge-brain"
        
        # Test query_knowledge_brain execution
        res = knowledge_brain_mcp.query_knowledge_brain(
            knowledge_brain_mcp.QueryBrainInput(query="canonical architecture", limit=3)
        )
        assert res["query"] == "canonical architecture"
        assert isinstance(res["results"], list)
        assert "count" in res
        
        print("  knowledge-brain OK (query_knowledge_brain registered and verified)")
    finally:
        sys.path.pop(0)

def test_seomatic_gsc():
    print("Testing mcp-servers/seomatic-gsc...")
    seo_dir = ROOT / "mcp-servers" / "seomatic-gsc"
    sys.path.insert(0, str(seo_dir))
    try:
        import seomatic_gsc_mcp
        tools = [t.name for t in seomatic_gsc_mcp.mcp._tool_manager.list_tools()]
        assert "inspect_url_index_status" in tools, "Missing inspect_url_index_status in seomatic-gsc"
        
        # Test inspect_url_index_status execution
        res = seomatic_gsc_mcp.inspect_url_index_status(
            seomatic_gsc_mcp.UrlInspectionInput(url="https://aicyberguardian.github.io/grok-bot-templates-evolved/")
        )
        assert res["url"] == "https://aicyberguardian.github.io/grok-bot-templates-evolved/"
        assert res["indexed"] is True
        assert "coverage_state" in res
        
        print("  seomatic-gsc OK (inspect_url_index_status registered and verified)")
    finally:
        sys.path.pop(0)

def main():
    print("=== FastMCP Server Test Suite ===")
    test_fleet_ops()
    test_knowledge_brain()
    test_seomatic_gsc()
    print("=== All FastMCP Daemons Verified OK ===")

if __name__ == "__main__":
    main()
