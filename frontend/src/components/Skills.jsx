import '../styles/skills.css'

function Skills() {
  return (
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
  )
}

export default Skills