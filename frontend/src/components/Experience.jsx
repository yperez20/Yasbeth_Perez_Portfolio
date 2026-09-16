import '../styles/Experience.css'

function Experience() {
  return (
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
  )
}

export default Experience