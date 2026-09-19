import '../styles/contact.css'

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-inner">
        <p className="contact-label">
          Have Any Questions?
        </p>

        <h2>
          Feel free to reach out!
        </h2>

        <p className="contact-description">
          I’m more than happy to hear from you, 
          whether you want to discuss a project, 
          an opportunity, or simply connect.
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
              <h3>Send me an Email</h3>
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
              <p>PROJECTS</p>
              <h3>View my GitHub</h3>
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
              <p>LINKEDIN</p>
              <h3>Let's Connect</h3>
            </div>

            <span className="contact-arrow">
              ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact