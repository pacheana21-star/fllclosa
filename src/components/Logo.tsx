import { Link } from 'react-router-dom'
import { dam } from '../assets'

export function Logo() {
  return (
    <Link to="/" className="logo" aria-label="Ir a la página principal">
      <img src={dam('iconos/header/logo-ficohsa.svg')} alt="Ficohsa" />
    </Link>
  )
}
