import { dam } from './assets'

export const productsMenu = [
  {
    title: 'Cuentas de ahorro',
    to: '/cuentas',
    icon: dam('iconos/header/icono-cuentas-ahorro.svg'),
    items: [
      'Cuenta de Ahorro Clásica',
      'Cuenta de Ahorro disfruta+',
      'Cuenta de Remesas',
      'Cuenta de Ahorro Joven',
      'Cuenta de Ahorro Infinite',
      'Cuenta de Ahorro Alcancía',
      'Cuenta de Cheques',
      'Todas las cuentas de ahorro',
    ],
  },
  {
    title: 'Tarjetas de crédito',
    to: '/tarjetas',
    icon: dam('iconos/header/icono-tarjeta-credito.svg'),
    items: [
      'Tarjetas de Crédito Ficohsa / AAdvantage® Mastercard',
      'Tarjeta de Crédito disfruta+',
      'Tarjeta de Crédito Cash Back',
      'Tarjeta de Crédito LifeMiles',
      'Tarjeta de Crédito Ficohsa+',
      'Tarjeta de Crédito La Colonia',
      'Tarjeta de Crédito Larach',
      'Todas las tarjetas de crédito',
    ],
  },
  {
    title: 'Préstamos',
    to: '/prestamos',
    icon: dam('iconos/header/icono-prestamos.svg'),
    items: [
      'Préstamo Personal',
      'Préstamo de Vivienda',
      'Préstamo Ficoauto',
      'Préstamo Ficocash',
      'Todos los préstamos',
    ],
  },
  {
    title: 'Seguros',
    to: '/seguros',
    icon: dam('iconos/header/icono-seguros.svg'),
    items: [
      'Gastos Médicos Menores',
      'Renta Diaria por Hospitalización',
      'Seguro de Vida Ficohsa',
      'Mujer Segura',
      'Conduce Seguro',
      'Plan Alerta Ficohsa (PAF)',
      'Programa de Protección Total (PPT)',
      'Todos los seguros',
    ],
  },
]

export const channelsMenu = [
  {
    title: 'App Ficohsa',
    desc: 'Descarga el APP Ficohsa y realiza operaciones desde tu celular.',
    icon: dam('iconos/header/icono-interbanca.svg'),
  },
  {
    title: 'Interbanca',
    desc: 'Realiza tus transacciones de manera fácil y segura desde nuestra banca en línea',
    icon: dam('iconos/laptop.svg'),
  },
  {
    title: 'Gestiones en línea',
    desc: 'Encuentra todo lo que necesitas para gestionar tus productos.',
    icon: dam('iconos/header/icono-gestiones-linea.svg'),
  },
  {
    title: 'Centro de ayuda',
    desc: 'Encuentra las respuestas a tus dudas en un espacio creado para ti.',
    icon: dam('iconos/header/icono-centro-ayuda.svg'),
  },
]

export const slides = [
  {
    kicker: 'PROMOCIONES',
    title: 'Más beneficios para ti con Ficohsa',
    text: 'Disfruta promociones y descuetos exclusivos con tus productos Ficohsa',
    cta: 'Conocer más',
    to: '/promociones',
    image: dam('honduras/home/banner/hero-banners/20260610-herobanner-promos.jpg'),
    color: '#00429C',
    bg: '#00B0E9',
  },
  {
    kicker: 'TARJETAS DE CRÉDITO',
    title: '¡Ahorrar se siente súper!',
    text: 'Tus compras en Supermercados La Colonia te dan más beneficios.',
    cta: '¡La quiero!',
    ctaTwo: 'Conoce más',
    to: '/tarjetas',
    image: dam('honduras/home/banner/hero-banners/20251215-hbanner-lacolonia.png'),
    color: '#FFFFFF',
    bg: '#0058cb',
  },
]

export const quickActions = [
  {
    label: 'Abrir una cuenta de ahorro',
    to: '/cuentas',
    icon: dam('iconos/icono-alcancia.png'),
  },
  {
    label: 'Obtener una tarjeta de crédito',
    to: '/tarjetas',
    icon: dam('iconos/icono-tarjeta-de-credito.svg'),
  },
  {
    label: 'Solicitar un préstamo',
    to: '/prestamos',
    icon: dam('iconos/icono-money-bag.svg'),
  },
  {
    label: 'Adquirir un seguro',
    to: '/seguros',
    icon: dam('iconos/icono-escudo.svg'),
  },
  {
    label: 'Cobrar una remesa',
    to: '/remesas',
    icon: dam('iconos/icono-dialogo.svg'),
  },
  {
    label: 'Ir a Hondureños en el exterior',
    to: '/exterior',
    icon: dam('iconos/icono-check-circle.svg'),
  },
]

export const promoCards = [
  {
    title: 'Promociones',
    desc: 'Conoce las promociones que Ficohsa tiene para ti.',
    icon: dam('iconos/Credit-card.svg'),
    to: '/promociones',
  },
  {
    title: 'La promo perfecta',
    desc: 'Ahorra y participa para ganar bonos en efectivo',
    icon: dam('iconos/icono-alcancia.png'),
    to: '/promociones',
  },
]

export const recommendations = [
  {
    tag: 'PRÉSTAMO PERSONAL',
    title: 'Concreta tu proyecto de remodelación',
    desc: 'Transforma tu hogar en el espacio de tus sueños con un Préstamo Personal adaptado a tus necesidades.',
    cta: 'Lo quiero',
    ctaTwo: 'Quiero saber más',
    to: '/prestamos',
    image: dam('honduras/home/cards-productos-recomendados/prestamos.jpg'),
  },
  {
    tag: 'CUENTA DE AHORRO',
    title: 'Abre tu cuenta de ahorro al instante y da ese primer paso hacia tus metas',
    desc: '¡Ahorrar nunca fue tan fácil! Solicitud digital sin monto de apertura y tarjeta de débito internacional.',
    cta: 'La quiero',
    ctaTwo: 'Conocer más',
    to: '/cuentas',
    image: dam('honduras/home/cards-productos-recomendados/cuenta-ahorros.jpg'),
  },
  {
    tag: 'TARJETA DE CREDITO',
    title: '¡Viaja más, preocúpate menos!',
    desc: 'Descubre el mundo con tranquilidad de la mano de tu Tarjeta de Crédito Ficohsa y obtén beneficios.',
    cta: 'La necesito',
    to: '/tarjetas',
    image: dam('honduras/home/cards-productos-recomendados/iStock-2149188685.jpg'),
  },
]

export const news = [
  {
    title: 'Premio Mujeres Adelante Ficohsa',
    excerpt:
      'Conmemorando el Día Internacional de la Mujer, Ficohsa realiza el lanzamiento de la tercera edición de Premio Mujer...',
  },
  {
    title: 'Ficohsa inaugura su primera agencia en Marcala, La Paz',
    excerpt:
      'Grupo Ficohsa continúa reafirmando su compromiso con el desarrollo sostenible y la inclusión financiera en Honduras...',
  },
  {
    title: 'Ficohsa inaugura nueva agencia en San Marcos Ocotepeque Impulsando el desarrollo local',
    excerpt:
      'Con esta apertura la institución financiera cuenta con 180 centros de servicios entre agencias, autobancos y ventan...',
  },
]

export const digitalChannels = [
  {
    title: 'App Ficohsa',
    desc: 'Descarga la App Ficohsa y realiza operaciones desde tu celular.',
    icon: dam('iconos/phone_android.svg'),
  },
  {
    title: 'SARA',
    desc: 'Realiza rápidamente tus consultas a través de nuestro chat de WhatsApp.',
    icon: dam('iconos/whatsappsvg.svg'),
  },
  {
    title: 'Interbanca',
    desc: 'Realiza tus transacciones de manera fácil y segura desde nuestra banca en línea',
    icon: dam('iconos/laptop.svg'),
  },
  {
    title: 'Gestiones en línea',
    desc: 'Encuentra todo lo que necesitas para gestionar tus productos.',
    icon: dam('iconos/header/icono-gestiones-linea.svg'),
  },
]

export const faqs = [
  { q: '¿Qué es SARA?', to: '/ayuda' },
  { q: '¿Qué es el Estado de Cuenta?', to: '/ayuda' },
  { q: '¿Qué es Interbanca?', to: '/ayuda' },
]

export const footerCols = [
  {
    title: 'Acerca de Ficohsa',
    links: ['Nosotros', 'Prensa Ficohsa', 'Trabaja con nosotros', 'Ficohsa Casa de Bolsa'],
  },
  {
    title: 'Ficohsa Sostenibilidad',
    links: ['Fundación Ficohsa', 'Tu Conciencia Financiera', 'Mujeres Adelante', 'De Mi Tierra'],
  },
  {
    title: 'Transparencia',
    links: [
      'Política gestión cumplimiento',
      'Usuario Financiero',
      'Información Regulatoria',
      'Ética | Integridad',
    ],
  },
]
