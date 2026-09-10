import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { channelsMenu, productsMenu } from '../data'
import {
  IconChevron,
  IconClose,
  IconLock,
  IconMenu,
  IconSearch,
  IconUser,
} from './Icons'
import { Logo } from './Logo'

type HeaderProps = {
  onSearch: () => void
}

export function Header({ onSearch }: HeaderProps) {
  const [open, setOpen] = useState<string | null>(null)
  const [mobile, setMobile] = useState(false)

  return (
    <header className="header">
      <div className="wrap header__inner">
        <Logo />

        <nav className="header__nav" aria-label="Principal">
          <div
            className="mega"
            onMouseEnter={() => setOpen('productos')}
            onMouseLeave={() => setOpen(null)}
          >
            <button className="mega__btn" type="button" aria-expanded={open === 'productos'}>
              Productos y servicios <IconChevron size={14} />
            </button>
            {open === 'productos' && (
              <div className="mega__panel">
                {productsMenu.map((col) => (
                  <div key={col.title}>
                    <h3>{col.title}</h3>
                    <ul>
                      {col.items.map((item) => (
                        <li key={item}>
                          <Link to={`/${col.title.toLowerCase().split(' ')[0]}`} onClick={() => setOpen(null)}>
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div
            className="mega"
            onMouseEnter={() => setOpen('canales')}
            onMouseLeave={() => setOpen(null)}
          >
            <button className="mega__btn" type="button" aria-expanded={open === 'canales'}>
              Canales de atención <IconChevron size={14} />
            </button>
            {open === 'canales' && (
              <div className="mega__panel mega__panel--channels">
                {channelsMenu.map((item) => (
                  <Link key={item.title} to="/canales" onClick={() => setOpen(null)}>
                    <strong>{item.title}</strong>
                    <span>{item.desc}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        <div className="header__actions">
          <NavLink to="/hazte-cliente" className="btn btn--ghost">
            <IconUser /> Hazte cliente
          </NavLink>
          <NavLink to="/interbanca" className="btn btn--dark">
            <IconLock /> Interbanca
          </NavLink>
          <button className="icon-btn" type="button" aria-label="Buscar" onClick={onSearch}>
            <IconSearch />
          </button>
          <button
            className="icon-btn header__burger"
            type="button"
            aria-label={mobile ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setMobile((v) => !v)}
          >
            {mobile ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>

      {mobile && (
        <div className="mobile-nav">
          <Link to="/cuentas" onClick={() => setMobile(false)}>Cuentas de ahorro</Link>
          <Link to="/tarjetas" onClick={() => setMobile(false)}>Tarjetas de crédito</Link>
          <Link to="/prestamos" onClick={() => setMobile(false)}>Préstamos</Link>
          <Link to="/seguros" onClick={() => setMobile(false)}>Seguros</Link>
          <Link to="/canales" onClick={() => setMobile(false)}>Canales de atención</Link>
          <Link to="/hazte-cliente" onClick={() => setMobile(false)}>Hazte cliente</Link>
          <Link to="/interbanca" onClick={() => setMobile(false)}>Interbanca</Link>
        </div>
      )}
    </header>
  )
}
