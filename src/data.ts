export const productsMenu = [
  {
    title: 'Cuentas de ahorro',
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
    items: [
      'Tarjeta AAdvantage® Mastercard',
      'Tarjeta de Crédito disfruta+',
      'Tarjeta de Crédito Cash Back',
      'Tarjeta de Crédito LifeMiles',
      'Tarjeta de Crédito Ficohsa+',
      'Tarjeta de Crédito La Colonia',
      'Todas las tarjetas de crédito',
    ],
  },
  {
    title: 'Préstamos',
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
    items: [
      'Gastos Médicos Menores',
      'Renta Diaria por Hospitalización',
      'Seguro de Vida Ficohsa',
      'Mujer Segura',
      'Conduce Seguro',
      'Todos los seguros',
    ],
  },
]

export const channelsMenu = [
  { title: 'App Ficohsa', desc: 'Opera desde tu celular con la app oficial.' },
  { title: 'SARA', desc: 'Consultas rápidas por WhatsApp.' },
  { title: 'Interbanca', desc: 'Banca en línea segura, 24/7.' },
  { title: 'Gestiones en línea', desc: 'Trámites de tus productos sin filas.' },
  { title: 'Centro de ayuda', desc: 'Respuestas a las dudas más comunes.' },
  { title: 'Sucursales', desc: 'Encuentra el punto físico más cercano.' },
]

export const quickActions = [
  { id: 'cuenta', label: 'Abrir una cuenta de ahorro', to: '/cuentas' },
  { id: 'tarjeta', label: 'Obtener una tarjeta de crédito', to: '/tarjetas' },
  { id: 'prestamo', label: 'Solicitar un préstamo', to: '/prestamos' },
  { id: 'seguro', label: 'Adquirir un seguro', to: '/seguros' },
  { id: 'remesa', label: 'Cobrar una remesa', to: '/remesas' },
  { id: 'exterior', label: 'Ir a Hondureños en el exterior', to: '/exterior' },
]

export const recommendations = [
  {
    tag: 'PRÉSTAMO PERSONAL',
    title: 'Concreta tu proyecto de remodelación',
    desc: 'Transforma tu hogar con un préstamo personal a tu medida, con plazos flexibles.',
    cta: 'Lo quiero',
    to: '/prestamos',
    tone: 'navy',
  },
  {
    tag: 'CUENTA DE AHORRO',
    title: 'Abre tu cuenta al instante y da el primer paso',
    desc: 'Solicitud digital, sin monto de apertura y con tarjeta de débito internacional.',
    cta: 'Quiero saber más',
    to: '/cuentas',
    tone: 'sky',
  },
  {
    tag: 'TARJETA DE CRÉDITO',
    title: 'Viaja más, preocúpate menos',
    desc: 'Descubre el mundo con tu tarjeta Ficohsa y acumula beneficios en cada compra.',
    cta: 'La quiero',
    to: '/tarjetas',
    tone: 'blue',
  },
]

export const news = [
  {
    title: 'Premio Mujeres Adelante Ficohsa',
    excerpt:
      'Se lanza una nueva edición del reconocimiento a mujeres que impulsan el desarrollo en Honduras.',
  },
  {
    title: 'Nueva agencia en Marcala, La Paz',
    excerpt:
      'La red de atención sigue creciendo para acercar servicios financieros a más comunidades.',
  },
  {
    title: 'Apertura en San Marcos, Ocotepeque',
    excerpt:
      'Más de 180 centros de servicio entre agencias, autobancos y ventanillas en todo el país.',
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
