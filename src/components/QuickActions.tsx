import { Link } from 'react-router-dom'
import { dam } from '../assets'
import { quickActions } from '../data'

export function QuickActions() {
  return (
    <section className="actions">
      <div className="wrap">
        <span className="eyebrow">PARA TI</span>
        <h2>¿Qué quieres hacer hoy?</h2>
        <div className="actions__grid">
          {quickActions.map((item) => (
            <Link key={item.label} to={item.to} className="action-card">
              <span className="action-card__icon">
                <img src={item.icon} alt="" />
              </span>
              <span>{item.label}</span>
            </Link>
          ))}
        </div>

        <div className="client-banner">
          <div className="client-banner__left">
            <img src={dam('iconos/icono-gestiones-en-linea.svg')} alt="" />
            <div>
              <strong>¿Ya eres cliente?</strong>
              <p>Gestiona tus productos 24/7 de manera fácil, rápida y segura con un solo clic</p>
            </div>
          </div>
          <Link to="/gestiones" className="btn btn--white-outline">
            Ir a Gestiones en Línea
            <img src={dam('iconos/chevron_right.svg')} alt="" />
          </Link>
        </div>
      </div>
    </section>
  )
}
