#!/usr/bin/env bash
set -euo pipefail

WORKSPACE_DIR="/workspace/mcp-servers/fleet-ops"
VENV_DIR="$WORKSPACE_DIR/.venv"

echo "[$(date -u)] Verifying FastMCP environment..."

# 1. Idempotent virtualenv reconstruction
if [ ! -d "$VENV_DIR" ]; then
    echo "Creating virtual environment in /workspace..."
    python3 -m venv "$VENV_DIR"
    "$VENV_DIR/bin/pip" install --upgrade pip
    "$VENV_DIR/bin/pip" install -r "$WORKSPACE_DIR/requirements.txt"
fi

echo "[$(date -u)] FastMCP environment ready."
