#!/usr/bin/env python3
"""Raster logo -> SVG via potrace (PIL prepares the bitmap)."""
from __future__ import annotations

import shutil
import subprocess
import sys
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
ASSETS = Path(
    "/mnt/c/Users/55199/.cursor/projects/"
    "wsl-localhost-Ubuntu-home-fabiot-projetosAleatorios-leading-page-estetic/assets"
)

CANDIDATES = [
    ASSETS
    / "c__Users_55199_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_"
    "Logo-Danti-Bezerra-Estetica-Avancada-2effed7c-3676-4a18-9496-2e94a8849dc8.png",
    ASSETS
    / "c__Users_55199_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_"
    "ChatGPT_Image_24_de_ago._de_2026__16_32_47-629b8a99-7324-427e-a1ad-f8be2e52c230.png",
]


def pick_source() -> Path:
    for path in CANDIDATES:
        if path.is_file():
            return path
    raise SystemExit("No logo source found")


def analyze(im: Image.Image) -> tuple[int, tuple[float, float, float]]:
    px = list(im.getdata())
    nont = [c for c in px if c[3] > 20]
    if not nont:
        return 0, (0.0, 0.0, 0.0)
    n = len(nont)
    avg = (
        sum(c[0] for c in nont) / n,
        sum(c[1] for c in nont) / n,
        sum(c[2] for c in nont) / n,
    )
    return n, avg


def to_ink_bitmap(im: Image.Image) -> Image.Image:
    """Return 1-bit image: black ink on white."""
    rgba = im.convert("RGBA")
    _, avg = analyze(rgba)
    light_logo = sum(avg) / 3 > 160

    w, h = rgba.size
    out = Image.new("1", (w, h), 1)  # white
    px = out.load()
    src = rgba.load()
    for y in range(h):
        for x in range(w):
            r, g, b, a = src[x, y]
            if a < 40:
                continue
            lum = (r + g + b) / 3
            is_ink = lum > 140 if light_logo else lum < 140
            if is_ink:
                px[x, y] = 0  # black
    return out


def write_pbm(img1: Image.Image, path: Path) -> None:
    w, h = img1.size
    # P4 binary PBM
    rows = []
    px = img1.load()
    for y in range(h):
        bits = []
        byte = 0
        bitcount = 0
        for x in range(w):
            # 1 = white in PBM? Actually in PBM 1=black, 0=white for P1;
            # for P4: 1=black, 0=white
            bit = 0 if px[x, y] else 1
            byte = (byte << 1) | bit
            bitcount += 1
            if bitcount == 8:
                bits.append(byte)
                byte = 0
                bitcount = 0
        if bitcount:
            byte <<= 8 - bitcount
            bits.append(byte)
        rows.append(bytes(bits))
    path.write_bytes(f"P4\n{w} {h}\n".encode("ascii") + b"".join(rows))


def ensure_potrace() -> str:
    which = shutil.which("potrace")
    if which:
        return which
    subprocess.check_call(
        ["sudo", "apt-get", "update", "-qq"],
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
    )
    subprocess.check_call(
        ["sudo", "apt-get", "install", "-y", "-qq", "potrace"],
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
    )
    which = shutil.which("potrace")
    if not which:
        raise SystemExit("potrace install failed")
    return which


def recolor_svg(svg: str, fill: str = "#2a2420") -> str:
    # potrace uses fill="#000000"
    return (
        svg.replace('fill="#000000"', f'fill="{fill}"')
        .replace("fill='#000000'", f'fill="{fill}"')
        .replace('fill="black"', f'fill="{fill}"')
    )


def main() -> int:
    src = pick_source()
    print(f"SOURCE={src}")
    im = Image.open(src)
    print(f"RAW={im.size} mode={im.mode}")
    rgba = im.convert("RGBA")
    n, avg = analyze(rgba)
    print(f"NONT={n} AVG_RGB={avg}")

    tmp = ROOT / "tmp"
    tmp.mkdir(exist_ok=True)
    pbm = tmp / "logo.pbm"
    bitmap = to_ink_bitmap(rgba)
    write_pbm(bitmap, pbm)
    print(f"PBM={pbm} size={pbm.stat().st_size}")

    # Preview raster
    preview = Image.new("RGB", rgba.size, (244, 239, 230))
    ink_rgb = bitmap.convert("RGBA")
    # map black->ink color
    pixels = []
    for p in ink_rgb.getdata():
        if p[0] < 128:
            pixels.append((42, 36, 32, 255))
        else:
            pixels.append((0, 0, 0, 0))
    layer = Image.new("RGBA", rgba.size)
    layer.putdata(pixels)
    Image.alpha_composite(preview.convert("RGBA"), layer).convert("RGB").save(
        tmp / "logo_preview.jpg", quality=92
    )

    potrace = ensure_potrace()
    raw_svg = tmp / "logo-raw.svg"
    subprocess.check_call(
        [potrace, str(pbm), "-s", "-o", str(raw_svg), "--flat", "--group"]
    )
    text = raw_svg.read_text(encoding="utf-8")
    text = recolor_svg(text, "#2a2420")
    # add role/aria
    if "<svg" in text and "role=" not in text:
        text = text.replace(
            "<svg",
            '<svg role="img" aria-label="Danti Bezerra Estetica Avancada"',
            1,
        )

    dests = [
        ROOT / "src" / "assets" / "logo.svg",
        ROOT / "public" / "logo.svg",
    ]
    for dest in dests:
        dest.parent.mkdir(parents=True, exist_ok=True)
        dest.write_text(text, encoding="utf-8")
        print(f"WROTE={dest} bytes={dest.stat().st_size}")

    # Keep PNG copy of preferred source too
    for dest in [
        ROOT / "src" / "assets" / "logo.png",
        ROOT / "public" / "logo.png",
    ]:
        dest.write_bytes(src.read_bytes())
        print(f"PNG={dest} bytes={dest.stat().st_size}")

    print("SVG_HEAD=")
    print("\n".join(text.splitlines()[:25]))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
