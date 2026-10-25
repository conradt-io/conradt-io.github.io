#!/usr/bin/env bash
set -euo pipefail

# Create a source-only zip in this repository's parent directory.
# Includes tracked files and non-ignored untracked files, but excludes
# dependency/build output and local artifacts that should not be moved.

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PARENT_DIR="$(dirname "$ROOT_DIR")"
REPO_NAME="$(basename "$ROOT_DIR")"
STAMP="$(date +%Y%m%d-%H%M)"
ZIP_PATH="$PARENT_DIR/${REPO_NAME}-source-${STAMP}.zip"

cd "$ROOT_DIR"

python3 - "$ZIP_PATH" <<'PY'
from pathlib import Path
import subprocess
import sys
import zipfile

root = Path.cwd()
zip_path = Path(sys.argv[1])

files = subprocess.check_output(
    ["git", "ls-files", "-co", "--exclude-standard"],
    text=True,
).splitlines()

exclude_exact = {"report.sarif"}
exclude_prefixes = (
    "dist/",
    "node_modules/",
    "bak/",
    "public/bak/",
)

selected = []
for rel in files:
    path = root / rel
    if rel in exclude_exact:
        continue
    if rel.startswith(exclude_prefixes):
        continue
    if Path(rel).name == ".DS_Store":
        continue
    if not path.is_file():
        continue
    selected.append(rel)

with zipfile.ZipFile(zip_path, "w", compression=zipfile.ZIP_DEFLATED, compresslevel=9) as archive:
    for rel in sorted(set(selected)):
        archive.write(root / rel, rel)

print(f"Created {zip_path}")
print(f"Included {len(set(selected))} files")
PY

ls -lh "$ZIP_PATH"
