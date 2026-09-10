import { Link } from 'react-router-dom'
import { faqs, footerCols, news, recommendations } from '../data'
import { IconArrow } from './Icons'

export function Promos() {
  return (
    <section className="section promos">
      <div className="wrap">
        <div className="promos__head">
          <div>
            <h2>Descubre tus promos Ficohsa</h2>
            <p>Beneficios pensados para tu día a día, con tus productos actuales.</p>
          </div>
          <Link to="/promociones" className="link-more">
            Promociones <IconArrow size={16} />
          </Link>
        </div>
        <article className="promo-hero">
          <div>
            <span className="pill pill--dark">LA PROMO PERFECTA</span>
            <h3>Más cashback en tus compras favoritas</h3>
            <p>Activa tus categorías del mes y aprovecha descuentos exclusivos en comercios aliados.</p>
            <Link to="/promociones" className="btn btn--white">
              Conocer más
            </Link>
          </div>
        </article>
      </div>
    </section>
  )
}

export function Recommendations() {
  return (
    <section className="section">
      <div className="wrap">
        <h2 className="section__title">Nuestras mejores recomendaciones para ti</h2>
        <div className="reco-grid">
          {recommendations.map((card) => (
            <article key={card.title} className={`reco reco--${card.tone}`}>
              <span>{card.tag}</span>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
              <Link to={card.to} className="btn btn--white">
                {card.cta}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ExchangeRates() {
  return (
    <section className="section rates">
      <div className="wrap rates__box">
        <div>
          <p className="rates__date">Cambio del día · miércoles, 9 de septiembre 2026</p>
          <h2>Tipo de cambio</h2>
        </div>
        <div className="rates__grid">
          <div>
            <strong>Dólar</strong>
            <span>Compra L 26.8693</span>
            <span>Venta L 27.0036</span>
          </div>
          <div>
            <strong>Euro</strong>
            <span>Compra $ 1.0776</span>
            <span>Venta $ 1.2550</span>
          </div>
          <div>
            <strong>Euro / Lempiras</strong>
            <span>Compra L 28.9544</span>
            <span>Venta L 33.8896</span>
          </div>
        </div>
        <Link to="/tipo-de-cambio" className="link-more">
          Conocer precio histórico del dólar <IconArrow size={16} />
        </Link>
      </div>
    </section>
  )
}

export function Benefits() {
  return (
    <section className="section benefits">
      <div className="wrap benefits__box">
        <div>
          <span className="eyebrow">DISFRUTA+</span>
          <h2>Programa de beneficios disfruta+</h2>
          <p>
            Acumula puntos, canjea recompensas y accede a experiencias exclusivas con tus tarjetas y cuentas.
          </p>
          <Link to="/promociones" className="btn btn--dark">
            Quiero saber más
          </Link>
        </div>
        <ul>
          <li>Puntos por tus compras diarias</li>
          <li>Promociones en comercios aliados</li>
          <li>Canje digital sin complicaciones</li>
        </ul>
      </div>
    </section>
  )
}

export function News() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="promos__head">
          <h2>Conoce lo que está pasando en Ficohsa</h2>
          <Link to="/noticias" className="link-more">
            Más noticias <IconArrow size={16} />
          </Link>
        </div>
        <div className="news-grid">
          {news.map((item) => (
            <article key={item.title} className="news-card">
              <div className="news-card__media" />
              <h3>{item.title}</h3>
              <p>{item.excerpt}</p>
              <Link to="/noticias">Leer más</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Help() {
  return (
    <section className="section help">
      <div className="wrap help__grid">
        <div>
          <h2>¿Necesitas ayuda?</h2>
          <p>Creamos un espacio para ti donde resolvemos tus dudas más frecuentes.</p>
          <Link to="/ayuda" className="btn btn--dark">
            Ir al Centro de Ayuda
          </Link>
        </div>
        <div>
          <h3>Preguntas frecuentes</h3>
          <ul>
            {faqs.map((item) => (
              <li key={item.q}>
                <Link to={item.to}>
                  {item.q} <IconArrow size={16} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export function Channels() {
  return (
    <section className="section channels">
      <div className="wrap">
        <span className="eyebrow">CANALES DIGITALES</span>
        <h2>Estamos aquí para acompañarte</h2>
        <p className="lede">Todo lo que necesitas hacer fácil, rápido y en línea.</p>
        <div className="channel-grid">
          {[
            ['App Ficohsa', 'Descarga la app y opera desde tu celular.'],
            ['SARA', 'Consultas rápidas por nuestro chat de WhatsApp.'],
            ['Interbanca', 'Transacciones fáciles y seguras en línea.'],
            ['Gestiones en línea', 'Tramita tus productos sin salir de casa.'],
          ].map(([title, desc]) => (
            <Link key={title} to="/canales" className="channel-card">
              <h3>{title}</h3>
              <p>{desc}</p>
            </Link>
          ))}
        </div>
        <div className="phones">
          <div>
            <span className="eyebrow">CALL CENTER</span>
            <h3>¿Necesitas más asesoría?</h3>
            <p>Llámanos de lunes a sábado de 8:00 a.m. a 5:00 p.m.</p>
          </div>
          <div className="phones__nums">
            <div>
              <strong>800 2280 1000</strong>
              <span>Línea gratuita</span>
            </div>
            <div>
              <strong>2280 1000</strong>
              <span>Tegucigalpa</span>
            </div>
            <div>
              <strong>2580 1000</strong>
              <span>San Pedro Sula</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__grid">
        {footerCols.map((col) => (
          <div key={col.title}>
            <h3>{col.title}</h3>
            <ul>
              {col.links.map((link) => (
                <li key={link}>
                  <Link to="/nosotros">{link}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <h3>Síguenos</h3>
          <div className="socials">
            <a href="https://www.ficohsa.hn/" aria-label="Facebook">f</a>
            <a href="https://www.ficohsa.hn/" aria-label="Instagram">ig</a>
            <a href="https://www.ficohsa.hn/" aria-label="LinkedIn">in</a>
            <a href="https://www.ficohsa.hn/" aria-label="YouTube">yt</a>
          </div>
        </div>
      </div>
      <div className="wrap footer__bottom">
        <p>Sitio de demostración inspirado en la experiencia digital de Ficohsa. No es el portal oficial.</p>
        <Link to="/privacidad">Política de privacidad</Link>
      </div>
    </footer>
  )
}

export function ChatButton() {
  return (
    <Link to="/ayuda" className="chat-btn" aria-label="Abrir asistencia">
      F
    </Link>
  )
}

export function SearchModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null

  return (
    <div className="search" role="dialog" aria-modal="true" aria-label="Buscar">
      <div className="search__panel">
        <input autoFocus placeholder="¿Qué estás buscando?" />
        <button type="button" onClick={onClose}>
          Cerrar
        </button>
      </div>
    </div>
  )
}
