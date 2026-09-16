function Projects() {
  return (
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
  )
}

export default Projects