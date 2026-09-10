import { useState } from 'react'
import { Link } from 'react-router-dom'

const slides = [
  {
    kicker: 'PROMOCIONES',
    title: 'Más beneficios para ti con Ficohsa',
    text: 'Disfruta promociones y descuentos exclusivos con tus productos Ficohsa',
    cta: 'Conocer más',
    to: '/promociones',
    image:
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=900&q=80',
    alt: 'Cliente sonriendo con bolsas de compras',
  },
  {
    kicker: 'AHORRO',
    title: '¡Ahorrar se siente súper!',
    text: 'Tus compras en supermercados te dan más beneficios con tu cuenta Ficohsa.',
    cta: '¡La quiero!',
    to: '/cuentas',
    image:
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80',
    alt: 'Persona celebrando sus metas de ahorro',
  },
]

export function Hero() {
  const [index, setIndex] = useState(0)
  const slide = slides[index]

  return (
    <section className="hero">
      <button
        className="hero__arrow hero__arrow--prev"
        type="button"
        aria-label="Anterior"
        onClick={() => setIndex((i) => (i === 0 ? slides.length - 1 : i - 1))}
      >
        ‹
      </button>
      <button
        className="hero__arrow hero__arrow--next"
        type="button"
        aria-label="Siguiente"
        onClick={() => setIndex((i) => (i === slides.length - 1 ? 0 : i + 1))}
      >
        ›
      </button>

      <div className="wrap hero__grid">
        <div className="hero__copy">
          <span className="pill">{slide.kicker}</span>
          <h1>{slide.title}</h1>
          <p>{slide.text}</p>
          <Link to={slide.to} className="btn btn--white">
            {slide.cta}
          </Link>
        </div>

        <div className="hero__art">
          <div className="hero__doodles" aria-hidden>
            <svg className="doodle-svg" viewBox="0 0 360 360" fill="none">
              <path d="M268 86c0-14 10-26 24-26s24 12 24 26v10h-48z" stroke="white" strokeWidth="2" />
              <rect x="262" y="96" width="60" height="78" rx="8" stroke="white" strokeWidth="2" />
              <path d="M70 48c0-12 9-22 21-22s21 10 21 22v8H70z" stroke="white" strokeWidth="2" />
              <rect x="64" y="56" width="54" height="70" rx="8" stroke="white" strokeWidth="2" />
              <path d="M48 128l8 20 8-20z" stroke="white" strokeWidth="2" />
              <path d="M310 48c3-6 12-6 15 0l1 2h-17z" stroke="white" strokeWidth="2" />
            </svg>
          </div>
          <img src={slide.image} alt={slide.alt} />
        </div>
      </div>

      <div className="hero__dots">
        {slides.map((item, i) => (
          <button
            key={item.title}
            type="button"
            className={i === index ? 'is-active' : ''}
            aria-label={`Ir al slide ${i + 1}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  )
}
