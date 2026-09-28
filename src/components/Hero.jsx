function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-eyebrow">FRONTEND DEVELOPER · WEB DEVELOPER</p>

        <h1>
          I build
          <span> polished web experiences.</span>
        </h1>

        <p className="hero-description">
          I create modern, responsive websites for businesses and brands,
          combining clean development with thoughtful design.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="primary-button">
            View My Work
          </a>

          <a href="#contact" className="secondary-button">
            Let's Work Together
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-card">
          <span>01</span>
          <p>Design</p>
        </div>

        <div className="hero-card hero-card-two">
          <span>02</span>
          <p>Develop</p>
        </div>

        <div className="hero-card hero-card-three">
          <span>03</span>
          <p>Deliver</p>
        </div>
      </div>
    </section>
  )
}

export default Hero