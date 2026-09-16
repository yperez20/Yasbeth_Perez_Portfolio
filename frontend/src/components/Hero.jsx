import '../styles/Hero.css'

function Hero() {
  return (
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
  )
}

export default Hero