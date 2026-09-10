import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ChatButton, Footer, SearchModal } from './components/HomeSections'
import { Header } from './components/Header'
import { TopBar } from './components/TopBar'
import { HomePage } from './pages/HomePage'
import { SimplePage } from './pages/SimplePage'

export default function App() {
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <div className="app">
      <TopBar />
      <Header onSearch={() => setSearchOpen(true)} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<SimplePage />} />
      </Routes>
      <Footer />
      <ChatButton />
      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  )
}
