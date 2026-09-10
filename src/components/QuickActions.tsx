import { Link } from 'react-router-dom'
import { actionIcons } from './Icons'
import { quickActions } from '../data'
import { IconArrow } from './Icons'

export function QuickActions() {
  return (
    <section className="actions">
      <div className="wrap">
        <span className="eyebrow">PARA TI</span>
        <h2>¿Qué quieres hacer hoy?</h2>
        <div className="actions__grid">
          {quickActions.map((item) => {
            const Icon = actionIcons[item.id as keyof typeof actionIcons]
            return (
              <Link key={item.id} to={item.to} className="action-card">
                <span className="action-card__icon">
                  <Icon />
                </span>
                <span>{item.label}</span>
              </Link>
            )
          })}
        </div>

        <div className="client-banner">
          <div>
            <strong>¿Ya eres cliente?</strong>
            <p>Gestiona tus productos 24/7 de manera fácil, rápida y segura con un solo clic</p>
          </div>
          <Link to="/gestiones" className="btn btn--white-outline">
            Ir a Gestiones en Línea <IconArrow size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
