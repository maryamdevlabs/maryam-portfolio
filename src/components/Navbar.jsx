function Navbar() {
  return (
    <header className="navbar">
      <a href="#home" className="logo">
        MARYAM.
      </a>

      <nav className="nav-links" aria-label="Main navigation">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>

      <a href="#contact" className="nav-button">
        Let's Talk
      </a>
    </header>
  )
}

export default Navbar