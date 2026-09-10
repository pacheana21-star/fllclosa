import { useState } from 'react'
import { Link } from 'react-router-dom'
import { dam } from '../assets'
import { slides } from '../data'

export function Hero() {
  const [index, setIndex] = useState(0)
  const slide = slides[index]

  return (
    <section className="hero" style={{ background: slide.bg, color: slide.color }}>
      <div className="hero__media" style={{ backgroundImage: `url(${slide.image})` }} />

      <button
        className="hero__arrow hero__arrow--prev"
        type="button"
        aria-label="Anterior"
        onClick={() => setIndex((i) => (i === 0 ? slides.length - 1 : i - 1))}
      >
        <img src={dam('iconos/_Icon_ left.svg')} alt="" />
      </button>
      <button
        className="hero__arrow hero__arrow--next"
        type="button"
        aria-label="Siguiente"
        onClick={() => setIndex((i) => (i === slides.length - 1 ? 0 : i + 1))}
      >
        <img src={dam('iconos/_Icon_ right.svg')} alt="" />
      </button>

      <div className="wrap hero__copy">
        <span className="pill">{slide.kicker}</span>
        <h1>{slide.title}</h1>
        <p style={{ color: slide.color }}>{slide.text}</p>
        <div className="hero__ctas">
          <Link to={slide.to} className="btn btn--white">
            {slide.cta}
          </Link>
          {'ctaTwo' in slide && slide.ctaTwo ? (
            <Link to={slide.to} className="btn btn--ghost-light">
              {slide.ctaTwo}
            </Link>
          ) : null}
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
