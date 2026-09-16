import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'

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


        {/* Experience */}
        <section id="experience" className="section">

          <div className="section-heading">

            <span>04</span>

            <div>
              <p>MY BACKGROUND</p>
              <h2>Experience</h2>
            </div>

          </div>


          <div className="timeline">

            <div className="timeline-item">

              <div className="timeline-marker"></div>

              <div className="timeline-content">

                <div className="timeline-date">
                  2023 — 2025
                </div>

                <h3>
                  Computer Science Lab Assistant
                </h3>

                <h4>
                  Texas State University
                </h4>

                <p>
                  Provided technical support to students,
                  troubleshot equipment and printing issues,
                  monitored print jobs, and maintained lab
                  equipment and safety procedures.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* Contact */}
        <section id="contact" className="contact-section">

          <div className="contact-inner">

            <p className="contact-label">
              HAVE A QUESTION?
            </p>

            <h2>
              Let's build something
              <span>great.</span>
            </h2>

            <p className="contact-description">
              Whether you want to talk about a project,
              an opportunity, or just connect, I'd love to
              hear from you.
            </p>


            <div className="contact-options">

              <a
                href="mailto:Yasbeth16perez@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Yasbeth%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20wanted%20to%20reach%20out.%0A%0A"
                className="contact-card"
              >

                <span className="contact-icon">
                  ✉
                </span>

                <div>
                  <p>EMAIL</p>
                  <h3>Draft an Email</h3>
                </div>

                <span className="contact-arrow">
                  ↗
                </span>

              </a>


              <a
                href="https://github.com/yperez20"
                target="_blank"
                rel="noreferrer"
                className="contact-card"
              >

                <span className="contact-icon">
                  ◇
                </span>

                <div>
                  <p>CODE</p>
                  <h3>View GitHub</h3>
                </div>

                <span className="contact-arrow">
                  ↗
                </span>

              </a>


              <a
                href="https://www.linkedin.com/in/yasbeth-perez-a07619239/"
                target="_blank"
                rel="noreferrer"
                className="contact-card"
              >

                <span className="contact-icon">
                  in
                </span>

                <div>
                  <p>NETWORK</p>
                  <h3>Connect on LinkedIn</h3>
                </div>

                <span className="contact-arrow">
                  ↗
                </span>

              </a>

            </div>

          </div>

        </section>

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