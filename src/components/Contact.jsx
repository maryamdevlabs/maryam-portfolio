function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-inner">
        <div className="contact-heading">
          <p className="section-label">GET IN TOUCH</p>

          <h2>
            Have a project
            <span> in mind?</span>
          </h2>

          <p>
            Whether you need a new website, a redesign, or a polished digital
            experience for your business, I'd love to hear about it.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <span>EMAIL</span>
             <a href="mailto:maryam.devlabs@gmail.com">
                    maryam.devlabs@gmail.com
                  </a>
            </div>

            <div className="contact-item">
              <span>GITHUB</span>
              <a
                href="https://github.com/maryamdevlabs"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/maryamdevlabs ↗
              </a>
            </div>

            <div className="contact-item">
              <span>AVAILABLE FOR</span>
              <p>Freelance projects · Business websites · Collaborations</p>
            </div>
          </div>

          <div className="contact-cta">
            <p>
              Let's create something useful, thoughtful, and built to last.
            </p>

            <a
              href="mailto:maryam.devlabs@gmail.com"
              className="contact-button"
            >
              Start a conversation ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact