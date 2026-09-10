import { Link, useLocation } from 'react-router-dom'

const copy: Record<string, { title: string; text: string }> = {
  '/empresas': {
    title: 'Banca Empresas',
    text: 'Soluciones para el crecimiento de tu negocio: cuentas, financiamiento y tesorería.',
  },
  '/cuentas': {
    title: 'Cuentas de ahorro',
    text: 'Abre tu cuenta en minutos, sin monto de apertura, y lleva tu dinero siempre contigo.',
  },
  '/tarjetas': {
    title: 'Tarjetas de crédito',
    text: 'Elige la tarjeta que se adapta a tu estilo de vida y empieza a disfrutar beneficios.',
  },
  '/prestamos': {
    title: 'Préstamos',
    text: 'Plazos flexibles para tus metas: vivienda, auto o proyectos personales.',
  },
  '/seguros': {
    title: 'Seguros',
    text: 'Protege lo que más importa con coberturas de salud, vida y movilidad.',
  },
  '/remesas': {
    title: 'Remesas',
    text: 'Cobra tus remesas de forma rápida y segura en agencias y puntos aliados.',
  },
  '/exterior': {
    title: 'Hondureños en el exterior',
    text: 'Productos y servicios pensados para quienes apoyan a su familia desde fuera.',
  },
  '/hazte-cliente': {
    title: 'Hazte cliente',
    text: 'Abre tu cuenta o solicita un producto 100% en línea, desde donde estés.',
  },
  '/interbanca': {
    title: 'Interbanca',
    text: 'Esta es una demostración. El acceso real a banca en línea está en el sitio oficial de Ficohsa.',
  },
  '/gestiones': {
    title: 'Gestiones en línea',
    text: 'Consulta, actualiza y tramita tus productos sin filas ni horarios.',
  },
  '/promociones': {
    title: 'Promociones',
    text: 'Descuentos, cashback y alianzas exclusivas para clientes Ficohsa.',
  },
  '/canales': {
    title: 'Canales de atención',
    text: 'App, SARA, Interbanca, gestiones en línea y sucursales cerca de ti.',
  },
  '/ayuda': {
    title: 'Centro de ayuda',
    text: 'Encuentra respuestas sobre SARA, estados de cuenta, Interbanca y más.',
  },
  '/noticias': {
    title: 'Noticias Ficohsa',
    text: 'Entérate de aperturas, reconocimientos y el impacto de Ficohsa en el país.',
  },
  '/tipo-de-cambio': {
    title: 'Tipo de cambio',
    text: 'Consulta el precio del día y el histórico del dólar y el euro.',
  },
  '/nosotros': {
    title: 'Acerca de Ficohsa',
    text: 'Un grupo financiero con presencia regional y compromiso con Honduras.',
  },
  '/privacidad': {
    title: 'Política de privacidad',
    text: 'Esta réplica de interfaz no recopila datos personales ni credenciales.',
  },
}

export function SimplePage() {
  const { pathname } = useLocation()
  const page = copy[pathname] ?? {
    title: 'Página en construcción',
    text: 'Esta sección formará parte de la siguiente iteración del proyecto.',
  }

  return (
    <main className="simple">
      <div className="wrap simple__box">
        <p className="eyebrow">FICOHSA</p>
        <h1>{page.title}</h1>
        <p>{page.text}</p>
        <Link to="/" className="btn btn--dark">
          Volver al inicio
        </Link>
      </div>
    </main>
  )
}
