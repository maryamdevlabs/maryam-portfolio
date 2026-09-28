function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            MARYAM
          </a>

          <p>
            Frontend developer building polished digital experiences for
            businesses and brands.
          </p>
        </div>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Maryam. All rights reserved.</p>

          <a
            href="https://github.com/maryamdevlabs"
            target="_blank"
            rel="noopener noreferrer">
            GitHub ↗
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer