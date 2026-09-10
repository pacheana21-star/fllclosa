import { NavLink } from 'react-router-dom'
import { IconChevron } from './Icons'

export function TopBar() {
  return (
    <div className="topbar">
      <div className="wrap topbar__inner">
        <nav className="topbar__left" aria-label="Segmento">
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'is-active' : '')}>
            Personas
          </NavLink>
          <NavLink to="/empresas">
            Empresas <IconChevron size={14} />
          </NavLink>
        </nav>
        <button className="topbar__country" type="button">
          <span className="flag" aria-hidden />
          Ficohsa Banco Honduras
          <IconChevron size={14} />
        </button>
      </div>
    </div>
  )
}
