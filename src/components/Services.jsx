function Services() {
  const services = [
    {
      number: '01',
      title: 'Business Websites',
      description:
        'Professional, responsive websites designed to give businesses a strong and credible online presence.',
    },
    {
      number: '02',
      title: 'Landing Pages',
      description:
        'Focused landing pages built around clear messaging, strong calls-to-action, and a smooth user experience.',
    },
    {
      number: '03',
      title: 'Website Redesign',
      description:
        'Modernizing outdated websites with cleaner layouts, responsive design, better structure, and improved usability.',
    },
    {
      number: '04',
      title: 'Responsive Development',
      description:
        'Web experiences that adapt smoothly across desktop, tablet, and mobile screens.',
    },
  ]

  return (
    <section className="services" id="services">
      <div className="services-heading">
        <p className="section-label">WHAT I DO</p>

        <h2>
          Websites built for
          <span> real businesses.</span>
        </h2>

        <p>
          From a new website to a complete redesign, I focus on creating
          polished digital experiences that are responsive, clear, and
          purposeful.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <article className="service-card" key={service.number}>
            <div className="service-top">
              <span>{service.number}</span>
              <span className="service-arrow">↗</span>
            </div>

            <h3>{service.title}</h3>

            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Services