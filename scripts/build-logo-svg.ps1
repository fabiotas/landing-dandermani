$ErrorActionPreference = 'Stop'

$projUnc = '\\wsl$\Ubuntu\home\fabiot\projetosAleatorios\leading-page-estetic'
$assets = 'C:\Users\55199\.cursor\projects\wsl-localhost-Ubuntu-home-fabiot-projetosAleatorios-leading-page-estetic\assets'

# Short-circuit MAX_PATH via subst
subst Z: $assets
try {
  $fallback = Get-ChildItem Z:\ -Filter '*629b8a99*' | Select-Object -First 1
  $source = Get-ChildItem Z:\ -Filter '*Logo-Danti*' | Select-Object -First 1
  if (-not $fallback) { throw 'fallback logo not found' }
  if (-not $source) { throw 'source logo not found' }

  New-Item -ItemType Directory -Force -Path "$projUnc\tmp" | Out-Null
  [System.IO.File]::WriteAllBytes("$projUnc\tmp\fallback.png", [System.IO.File]::ReadAllBytes($fallback.FullName))
  [System.IO.File]::WriteAllBytes("$projUnc\tmp\source.png", [System.IO.File]::ReadAllBytes($source.FullName))
  Write-Output "FALLBACK=$($fallback.Length) SOURCE=$($source.Length)"
}
finally {
  subst Z: /d | Out-Null
}

docker run --rm -v "${projUnc}:/app" python:3.12-slim bash -c "pip install -q pillow && apt-get update -qq && apt-get install -y -qq potrace >/dev/null && python /app/tmp/trace_logo.py"
if ($LASTEXITCODE -ne 0) { throw "docker failed: $LASTEXITCODE" }

Get-Item "$projUnc\src\assets\logo.svg","$projUnc\public\logo.svg","$projUnc\tmp\logo_preview.jpg" |
  ForEach-Object { Write-Output "$($_.FullName) $($_.Length)" }
