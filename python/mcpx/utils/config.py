import json
import os
import sys
from pathlib import Path

REGISTRY_PATH = Path(__file__).parent.parent.parent / "registry.json"
MCPX_DIR = Path.home() / ".mcpx"
STATE_FILE = MCPX_DIR / "state.json"

def load_registry() -> dict:
    with open(REGISTRY_PATH) as f:
        return json.load(f)

def load_state() -> dict:
    if not STATE_FILE.exists():
        return {"installed": {}}
    with open(STATE_FILE) as f:
        return json.load(f)

def save_state(state: dict):
    MCPX_DIR.mkdir(parents=True, exist_ok=True)
    with open(STATE_FILE, "w") as f:
        json.dump(state, f, indent=2)

def get_config_path(editor: str) -> Path:
    from mcpx.utils.editors import EDITORS
    platform = sys.platform
    editor_conf = EDITORS.get(editor)
    if not editor_conf:
        return None
    paths = editor_conf["config"]
    if platform == "win32":
        return Path(paths["win32"])
    elif platform == "darwin":
        return Path(paths["darwin"])
    else:
        return Path(paths["linux"])

def load_editor_config(config_path: Path) -> dict:
    if not config_path.exists():
        return {"mcpServers": {}}
    try:
        with open(config_path) as f:
            return json.load(f)
    except Exception:
        return {"mcpServers": {}}

def save_editor_config(config_path: Path, config: dict):
    config_path.parent.mkdir(parents=True, exist_ok=True)
    with open(config_path, "w") as f:
        json.dump(config, f, indent=2)
