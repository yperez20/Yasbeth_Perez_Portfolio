import { useEffect, useState } from 'react'
import './App.css'

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

      {/* Navigation */}
      <nav className="navbar">

        <a href="#" className="logo">
          YP
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-button">
          Let's Talk
        </a>

      </nav>


      {/* Hero */}
      <main>

        <section className="hero-section">

          <div className="hero-background-grid"></div>

          <div className="hero-glow hero-glow-one"></div>
          <div className="hero-glow hero-glow-two"></div>


          <div className="hero-content">

            <div className="hero-label">
              <span className="status-dot"></span>
              AVAILABLE FOR OPPORTUNITIES
            </div>

            <h1>
              Yasbeth
              <span>Perez</span>
            </h1>

            <h2>
              Computer Science Graduate
            </h2>

            <p className="hero-description">
              I build practical software solutions, solve technical
              problems, and enjoy turning ideas into useful technology.
            </p>


            <div className="hero-buttons">

              <a
                href="#projects"
                className="primary-button"
              >
                View My Work
                <span>↗</span>
              </a>

              <a
                href="#contact"
                className="secondary-button"
              >
                Get In Touch
              </a>

            </div>


            <div className="hero-socials">

              <a
                href="https://github.com/yperez20"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/yasbeth-perez-a07619239/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>

            </div>

          </div>


          {/* Floating developer card */}
          <div className="hero-card-wrapper">

            <div className="hero-card">

              <div className="card-top">

                <div className="card-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <p>yasbeth.dev</p>

              </div>


              <div className="card-content">

                <p className="code-comment">
                  // hello, world
                </p>

                <p>
                  <span className="code-purple">const</span>{' '}
                  <span className="code-blue">developer</span>{' '}
                  = {'{'}
                </p>

                <p className="code-indent">
                  name:{' '}
                  <span className="code-green">
                    'Yasbeth Perez'
                  </span>,
                </p>

                <p className="code-indent">
                  degree:{' '}
                  <span className="code-green">
                    'Computer Science'
                  </span>,
                </p>

                <p className="code-indent">
                  university:{' '}
                  <span className="code-green">
                    'Texas State'
                  </span>,
                </p>

                <p className="code-indent">
                  interests: [
                </p>

                <p className="code-double-indent">
                  <span className="code-green">
                    'Software'
                  </span>,
                </p>

                <p className="code-double-indent">
                  <span className="code-green">
                    'Technology'
                  </span>,
                </p>

                <p className="code-double-indent">
                  <span className="code-green">
                    'Problem Solving'
                  </span>
                </p>

                <p className="code-indent">
                  ]
                </p>

                <p>
                  {'}'}
                </p>

              </div>


              <div className="card-footer">

                <span>
                  React
                </span>

                <span>
                  Python
                </span>

                <span>
                  Flask
                </span>

              </div>

            </div>

          </div>

        </section>


        {/* About */}
        <section id="about" className="section about-section">

          <div className="section-heading">

            <span>01</span>

            <div>
              <p>GET TO KNOW ME</p>
              <h2>About Me</h2>
            </div>

          </div>


          <div className="about-content">

            <p className="about-main">
              I'm a Computer Science graduate from Texas State
              University with a minor in Applied Mathematics.
            </p>

            <p>
              My experience includes software development, full-stack
              projects, technical support, and collaborative problem
              solving. I enjoy learning new technologies and finding
              practical ways to use them to solve problems.
            </p>

          </div>

        </section>


        {/* Skills */}
        <section id="skills" className="section">

          <div className="section-heading">

            <span>02</span>

            <div>
              <p>WHAT I WORK WITH</p>
              <h2>Technical Skills</h2>
            </div>

          </div>


          <div className="skills-grid">

            <div className="skill-card">
              <span className="skill-number">01</span>

              <h3>Languages</h3>

              <div className="skill-list">
                <span>Python</span>
                <span>Java</span>
                <span>C++</span>
                <span>JavaScript</span>
                <span>HTML</span>
                <span>CSS</span>
              </div>
            </div>


            <div className="skill-card">
              <span className="skill-number">02</span>

              <h3>Frameworks</h3>

              <div className="skill-list">
                <span>React</span>
                <span>Flask</span>
                <span>Angular</span>
                <span>Node.js</span>
                <span>Express.js</span>
              </div>
            </div>


            <div className="skill-card">
              <span className="skill-number">03</span>

              <h3>Tools & Technologies</h3>

              <div className="skill-list">
                <span>Git</span>
                <span>GitHub</span>
                <span>Docker</span>
                <span>AWS</span>
                <span>SQL</span>
                <span>APIs</span>
              </div>
            </div>

          </div>

        </section>


        {/* Projects */}
        <section id="projects" className="projects-section">

          <div className="section">

            <div className="section-heading">

              <span>03</span>

              <div>
                <p>SELECTED WORK</p>
                <h2>Projects</h2>
              </div>

            </div>


            <div className="project-card">

              <div className="project-preview">
                <div className="preview-glow"></div>

                <div className="preview-window">

                  <div className="preview-header">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <div className="preview-body">

                    <div className="preview-sidebar"></div>

                    <div className="preview-content">

                      <div className="preview-line large"></div>
                      <div className="preview-line"></div>

                      <div className="preview-boxes">
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>

                    </div>

                  </div>

                </div>
              </div>


              <div className="project-info">

                <span className="project-label">
                  FULL-STACK APPLICATION
                </span>

                <h3>
                  Grocery Management Website
                </h3>

                <p>
                  A full-stack grocery management application
                  built to help users organize inventory, manage
                  grocery lists, and discover recipes.
                </p>

                <div className="project-tech">
                  <span>React</span>
                  <span>Flask</span>
                  <span>Python</span>
                  <span>API</span>
                  <span>Database</span>
                </div>

                <a href="#" className="project-link">
                  View Project
                  <span>→</span>
                </a>

              </div>

            </div>

          </div>

        </section>


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