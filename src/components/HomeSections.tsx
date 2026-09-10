import { useState } from 'react'
import { Link } from 'react-router-dom'
import { dam } from '../assets'
import { digitalChannels, faqs, footerCols, news, promoCards, recommendations } from '../data'

export function Promos() {
  return (
    <section className="promos">
      <div className="wrap">
        <h2>Descubre tus promos Ficohsa</h2>
        <div className="promo-list">
          {promoCards.map((card) => (
            <Link key={card.title} to={card.to} className="promo-row">
              <img src={card.icon} alt="" />
              <div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
              <img className="promo-row__arrow" src={dam('iconos/Tail-object.svg')} alt="" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Recommendations() {
  return (
    <section className="reco-section">
      <div className="wrap">
        <h2>Nuestras mejores recomendaciones para ti</h2>
        <div className="reco-grid">
          {recommendations.map((card) => (
            <article key={card.title} className="reco">
              <div className="reco__img">
                <img src={card.image} alt="" />
                <span>{card.tag}</span>
              </div>
              <div className="reco__body">
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
                <div className="reco__btns">
                  <Link to={card.to} className="btn btn--navy">
                    {card.cta}
                  </Link>
                  {card.ctaTwo ? (
                    <Link to={card.to} className="btn btn--outline">
                      {card.ctaTwo}
                    </Link>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ExchangeRates() {
  const [tab, setTab] = useState<'usd' | 'eur'>('usd')

  return (
    <section className="rates">
      <div className="wrap rates__box">
        <div className="rates__title">
          <img src={dam('iconos/icono-indicadores.svg')} alt="" />
          <p>
            Cambio del día
            <span>MIÉRCOLES, 9 DE SEPTIEMBRE 2026</span>
          </p>
        </div>
        <div className="rates__tabs">
          <button type="button" className={tab === 'usd' ? 'is-active' : ''} onClick={() => setTab('usd')}>
            <img src={dam('iconos/icono-dolar.svg')} alt="" /> Dolar
          </button>
          <button type="button" className={tab === 'eur' ? 'is-active' : ''} onClick={() => setTab('eur')}>
            <img src={dam('iconos/icono-euro.svg')} alt="" /> Euro
          </button>
        </div>
        {tab === 'usd' ? (
          <div className="rates__values">
            <p>Compra <strong>L 26.8693</strong></p>
            <p>Venta <strong>L 27.0036</strong></p>
          </div>
        ) : (
          <div className="rates__values rates__values--eur">
            <p>Compra <strong>$ 1.0776</strong></p>
            <p>Venta <strong>$ 1.255</strong></p>
            <p>Compra <strong>L 28.9544</strong></p>
            <p>Venta <strong>L 33.8896</strong></p>
          </div>
        )}
        <p className="rates__note">
          Tasa sujeta al banco Central de Honduras
          <Link to="/tipo-de-cambio">
            Conocer precio histórico del dólar
            <img src={dam('iconos/icono-enlace-externo.svg')} alt="" />
          </Link>
        </p>
      </div>
    </section>
  )
}

export function Benefits() {
  return (
    <section
      className="benefits"
      style={{ backgroundImage: `url(${dam('honduras/home/banner/puntos-disfruta-mas-en2x.jpg')})` }}
    >
      <div className="wrap">
        <span className="eyebrow eyebrow--light">GANA MÁS CON FICOHSA</span>
        <h2>Programa de beneficios disfruta+</h2>
        <p>¿Sabías que pagando con tu tarjeta de crédito y débito disfruta+ puedes acumular puntos en cualquier comercio?</p>
        <Link to="/promociones" className="btn btn--navy">
          Quiero saber más
        </Link>
      </div>
    </section>
  )
}

export function News() {
  return (
    <section className="news">
      <div className="wrap">
        <span className="eyebrow">PRENSA FICOHSA</span>
        <div className="promos__head">
          <h2>Conoce lo que está pasando en Ficohsa</h2>
          <Link to="/noticias" className="btn btn--outline">
            Más noticias
          </Link>
        </div>
        <div className="news-grid">
          {news.map((item) => (
            <article key={item.title} className="news-card">
              <div className="news-card__media">
                <span>5 min</span>
              </div>
              <span className="eyebrow">SEGURIDAD</span>
              <h3>{item.title}</h3>
              <p>
                {item.excerpt} <Link to="/noticias">Leer más</Link>
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Help() {
  return (
    <section className="help">
      <div className="wrap help__grid">
        <div>
          <h2>¿Necesitas ayuda?</h2>
          <p>Creamos un espacio para ti donde resolveremos todas tus dudas</p>
          <Link to="/ayuda" className="btn btn--navy">
            Ir al Centro de Ayuda
          </Link>
        </div>
        <div>
          <h3>Preguntas frecuentes</h3>
          <ul>
            {faqs.map((item) => (
              <li key={item.q}>
                <Link to={item.to}>
                  {item.q}
                  <img src={dam('iconos/header/arrow-content-two.svg')} alt="" />
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
    <section className="channels">
      <div className="wrap">
        <h2>Estamos aquí para acompañarte</h2>
        <div className="channels__grid">
          <div className="channels__digital">
            <div
              className="channels__banner"
              style={{
                backgroundImage: `url(${dam('files/canales-digitales-ilustración/canales-digitales-desktop.svg')})`,
              }}
            >
              <span className="eyebrow eyebrow--light">CANALES DIGITALES</span>
              <h3>Todo lo que necesitas hacer fácil, rápido y en línea</h3>
            </div>
            <div className="channel-list">
              {digitalChannels.map((item) => (
                <Link key={item.title} to="/canales" className="channel-row">
                  <div>
                    <p>
                      <img src={item.icon} alt="" />
                      {item.title}
                    </p>
                    <span>{item.desc}</span>
                  </div>
                  <img src={dam('iconos/icono-boton-flecha-canales-digitales.svg')} alt="" />
                </Link>
              ))}
            </div>
          </div>
          <div className="channels__side">
            <div className="phones">
              <span className="eyebrow">CALL CENTER</span>
              <h3>¿Necesitas más asesoría?</h3>
              <p>Llámanos de lunes a sábado de 8:00 a.m. a 5:00 p.m. a nuestros números</p>
              <div className="phones__nums">
                <div>
                  <strong>80022801000</strong>
                  <span>Línea gratuita</span>
                </div>
                <div>
                  <strong>22801000</strong>
                  <span>Tegucigalpa</span>
                </div>
                <div>
                  <strong>25801000</strong>
                  <span>San Pedro de Sula</span>
                </div>
              </div>
            </div>
            <div className="locate">
              <span className="eyebrow">UBÍCANOS</span>
              <h3>Encuentra tu sucursal y centro de servicio más cercano</h3>
              <Link to="/canales" className="btn btn--navy">
                <img src={dam('iconos/icon-location.svg')} alt="" />
                Ver aquí
              </Link>
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
            <a href="https://www.facebook.com/ficohsa" aria-label="Facebook">f</a>
            <a href="https://www.instagram.com/ficohsa" aria-label="Instagram">ig</a>
            <a href="https://www.linkedin.com/company/ficohsa" aria-label="LinkedIn">in</a>
            <a href="https://www.youtube.com/ficohsa" aria-label="YouTube">yt</a>
          </div>
        </div>
      </div>
      <div className="wrap footer__bottom">
        <p>© 2026 Ficohsa | Todos los derechos reservados. Banco Financiera Comercial Hondureña, S.A</p>
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
        <img src={dam('iconos/header/search.svg')} alt="" />
        <input autoFocus placeholder="¿Qué estás buscando?" />
        <button type="button" onClick={onClose}>
          Cerrar
        </button>
      </div>
    </div>
  )
}
