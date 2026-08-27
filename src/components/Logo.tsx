type LogoProps = {
  className?: string
  alt?: string
}

export function Logo({
  className,
  alt = 'Danti Bezerra Estética Avançada',
}: LogoProps) {
  return <img className={className} src="/logo.svg" alt={alt} />
}
