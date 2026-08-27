$ErrorActionPreference = 'Stop'
$srcDir = 'C:\Users\55199\.cursor\projects\wsl-localhost-Ubuntu-home-fabiot-projetosAleatorios-leading-page-estetic\assets'
$src = Get-ChildItem -LiteralPath $srcDir -Filter '*20dc3fee*' | Select-Object -First 1
if (-not $src) { throw 'Source logo not found' }
$dest1 = '\\wsl.localhost\Ubuntu\home\fabiot\projetosAleatorios\leading-page-estetic\public\logo.png'
$dest2 = '\\wsl.localhost\Ubuntu\home\fabiot\projetosAleatorios\leading-page-estetic\src\assets\logo.png'
New-Item -ItemType Directory -Force -Path (Split-Path $dest1) | Out-Null
New-Item -ItemType Directory -Force -Path (Split-Path $dest2) | Out-Null
# Read+Write avoids long-path Copy-Item issues
$bytes = [System.IO.File]::ReadAllBytes($src.FullName)
[System.IO.File]::WriteAllBytes($dest1, $bytes)
[System.IO.File]::WriteAllBytes($dest2, $bytes)
Write-Output "SRC=$($src.FullName) SIZE=$($bytes.Length)"
Write-Output "DEST1=$((Get-Item -LiteralPath $dest1).Length)"
Write-Output "DEST2=$((Get-Item -LiteralPath $dest2).Length)"
