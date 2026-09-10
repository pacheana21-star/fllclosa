import { NavLink } from 'react-router-dom'
import { dam } from '../assets'

export function TopBar() {
  return (
    <div className="topbar">
      <div className="wrap topbar__inner">
        <nav className="topbar__left" aria-label="Segmento">
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'is-active' : '')}>
            Personas
          </NavLink>
          <NavLink to="/empresas" className="topbar__drop">
            Empresas
            <img src={dam('iconos/header/arrow-preheader.svg')} alt="" />
          </NavLink>
        </nav>
        <button className="topbar__country" type="button">
          <img src={dam('iconos/header/icon-flag-honduras.svg')} alt="" />
          Ficohsa Banco Honduras
          <img src={dam('iconos/header/arrow-preheader.svg')} alt="" />
        </button>
      </div>
    </div>
  )
}
