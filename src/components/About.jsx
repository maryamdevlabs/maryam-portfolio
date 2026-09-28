function About() {
  return (
    <section className="about" id="about">
      <div className="about-heading">
        <p className="section-label">ABOUT ME</p>

        <h2>
          I turn ideas into
          <span> digital experiences.</span>
        </h2>
      </div>

      <div className="about-content">
        <div className="about-text">
          <p>
            I'm Maryam, a frontend developer focused on building polished,
            responsive websites that look great and feel intuitive to use.
          </p>

          <p>
            I combine modern frontend development with thoughtful UI design
            to create websites that help businesses present themselves
            professionally online.
          </p>

          <a href="#contact" className="about-link">
            Let's build something → 
          </a>
        </div>

        <div className="about-details">
          <div className="detail-card">
            <span>01</span>
            <div>
              <h3>Frontend Development</h3>
              <p>
                React, JavaScript, responsive layouts, reusable components,
                and modern web interfaces.
              </p>
            </div>
          </div>

          <div className="detail-card">
            <span>02</span>
            <div>
              <h3>UI & Visual Design</h3>
              <p>
                Clean layouts, thoughtful spacing, visual hierarchy,
                interactions, and polished user experiences.
              </p>
            </div>
          </div>

          <div className="detail-card">
            <span>03</span>
            <div>
              <h3>Business Websites</h3>
              <p>
                Professional websites designed to help businesses build
                credibility and connect with their customers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About