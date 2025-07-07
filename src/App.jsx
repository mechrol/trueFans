import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import HomePage from './pages/HomePage'
import ArtistDashboard from './pages/ArtistDashboard'
import VenuePortal from './pages/VenuePortal'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

function App() {
  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/artist-dashboard" element={<ArtistDashboard />} />
          <Route path="/venue-portal" element={<VenuePortal />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  )
}

export default App
