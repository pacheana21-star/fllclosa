import { Hero } from '../components/Hero'
import {
  Benefits,
  Channels,
  ExchangeRates,
  Help,
  News,
  Promos,
  Recommendations,
} from '../components/HomeSections'
import { QuickActions } from '../components/QuickActions'

export function HomePage() {
  return (
    <main>
      <Hero />
      <QuickActions />
      <Promos />
      <Recommendations />
      <ExchangeRates />
      <Benefits />
      <News />
      <Help />
      <Channels />
    </main>
  )
}
