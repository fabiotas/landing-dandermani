#!/usr/bin/env python3
"""Copy the attached logo into public/ and src/assets/ as logo.png."""
from __future__ import annotations

import hashlib
import shutil
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SRC = Path(
    "/mnt/c/Users/55199/.cursor/projects/"
    "wsl-localhost-Ubuntu-home-fabiot-projetosAleatorios-leading-page-estetic/assets/"
    "c__Users_55199_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_"
    "Code_Generated_Image__1_-2855ce9d-bdbd-48d1-b892-1afb14975f01.png"
)
DESTS = [ROOT / "public" / "logo.png", ROOT / "src" / "assets" / "logo.png"]


def md5(path: Path) -> str:
    return hashlib.md5(path.read_bytes()).hexdigest()


def main() -> int:
    if not SRC.is_file():
        print(f"MISSING: {SRC}", file=sys.stderr)
        return 1

    data = SRC.read_bytes()
    print(f"SRC={SRC}")
    print(f"SIZE={len(data)} MD5={md5(SRC)}")
    print(f"MAGIC={data[:12]!r}")

    try:
        from PIL import Image

        with Image.open(SRC) as im:
            print(f"IMAGE={im.size} mode={im.mode} format={im.format}")
            # Sample a few pixels to detect solid black
            samples = [
                im.getpixel((0, 0)),
                im.getpixel((im.size[0] // 2, im.size[1] // 2)),
                im.getpixel((im.size[0] - 1, im.size[1] - 1)),
            ]
            print(f"SAMPLES={samples}")
            # Convert/save as real PNG so Vite/browsers are happy
            rgba = im.convert("RGBA")
            for dest in DESTS:
                dest.parent.mkdir(parents=True, exist_ok=True)
                rgba.save(dest, format="PNG")
                print(f"WROTE={dest} SIZE={dest.stat().st_size} MD5={md5(dest)}")
    except Exception as exc:
        print(f"PIL_FALLBACK={exc}")
        for dest in DESTS:
            dest.parent.mkdir(parents=True, exist_ok=True)
            shutil.copyfile(SRC, dest)
            print(f"COPIED={dest} SIZE={dest.stat().st_size} MD5={md5(dest)}")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
