import { Link } from 'react-router-dom'

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className={`logo ${light ? 'logo--light' : ''}`} aria-label="Ir a la página principal">
      <span className="logo__mark" aria-hidden>
        F
      </span>
      <span className="logo__word">Ficohsa</span>
    </Link>
  )
}
