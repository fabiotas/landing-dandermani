#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SRC="${1:-}"
CANDIDATES=(
  "$SRC"
  "/mnt/c/Users/55199/.cursor/projects/wsl-localhost-Ubuntu-home-fabiot-projetosAleatorios-leading-page-estetic/assets/c__Users_55199_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_ChatGPT_Image_24_de_ago._de_2026__16_32_47-629b8a99-7324-427e-a1ad-f8be2e52c230.png"
)

mkdir -p "$ROOT/public" "$ROOT/src/assets"

FOUND=""
for path in "${CANDIDATES[@]}"; do
  if [[ -n "$path" && -f "$path" ]]; then
    FOUND="$path"
    break
  fi
done

if [[ -z "$FOUND" ]]; then
  echo "Logo PNG nao encontrada. Passe o caminho: ./scripts/copy-logo.sh /caminho/logo.png"
  exit 1
fi

cp -f "$FOUND" "$ROOT/public/logo.png"
cp -f "$FOUND" "$ROOT/src/assets/logo.png"
echo "OK: logo copiada para public/ e src/assets/"
ls -la "$ROOT/public/logo.png" "$ROOT/src/assets/logo.png"
