import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'


function App() {
  const [showTopButton, setShowTopButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="portfolio">

      <Navbar />


      <main>

        <Hero />

         <About />

        <Skills />

        <Projects />

        <Experience />

        <Contact />

      </main>


      {/* Footer */}
      <footer>

        <p>
          © 2026 Yasbeth Perez
        </p>

        <p>
          Designed & Built with React
        </p>

      </footer>


      {/* Back to top */}
      {showTopButton && (
        <a href="#" className="back-to-top">
          ↑
        </a>
      )}

    </div>
  )
}

export default App