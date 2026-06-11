import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { site } from './data/portfolio'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToHash from './components/ScrollToHash'
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'
import './App.css'

function App() {
  useEffect(() => {
    document.title = site.title
  }, [])

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '')}>
      <ScrollToHash />
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
