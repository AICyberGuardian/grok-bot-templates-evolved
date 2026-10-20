#!/usr/bin/env bash
set -euo pipefail

WORKSPACE_DIR="/workspace/mcp-servers/seomatic-gsc"
VENV_DIR="$WORKSPACE_DIR/.venv"

if [ ! -d "$VENV_DIR" ]; then
    python3 -m venv "$VENV_DIR"
    "$VENV_DIR/bin/pip" install --upgrade pip
    "$VENV_DIR/bin/pip" install -r "$WORKSPACE_DIR/requirements.txt"
fi
