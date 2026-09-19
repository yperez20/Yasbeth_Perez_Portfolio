import '../styles/Experience.css'

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section-heading">
        <div>
          <h2>Work Experience</h2>
        </div>
      </div>

      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-marker"></div>

          <div className="timeline-content">
            <div className="timeline-date">
              Sep 2025 — Dec 2025
            </div>

            <h3>
              Computer Science Lab Assistant
            </h3>

            <h4>
              Texas State University
            </h4>

            <p>
              Provided technical support to students using lab hardware.
              Troubleshot printing malfunctions,
              monitored print jobs to prevent failures, and maintained lab
              equipment and safety procedures.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience