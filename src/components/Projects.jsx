function Projects() {
  const projects = [
    {
      number: '01',
      title: 'Nova Business Website',
      category: 'Business Website · React',
      description:
        'A modern responsive business website focused on clear presentation, reusable components, and a strong professional user experience.',
      tech: 'React · JavaScript · CSS · Vite',
     live: 'https://nova-business-website.vercel.app/',
     github: 'https://github.com/maryamdevlabs/nova-business-website', 
    },
    {
  number: '02',
  title: 'Artisan Bakery',
  category: 'Luxury Bakery Website · React',
  description:
    'An editorial-style bakery website with a refined visual identity, responsive layouts, product presentation, and interactive sections.',
  tech: 'React · JavaScript · CSS · Vite',
  live: 'https://artisan-bakery-ten.vercel.app/',
  github: 'https://github.com/maryamdevlabs/artisan-bakery',
},
{
  number: '03',
  title: 'Weather Finder',
  category: 'API Application · JavaScript',
  description:
    'A responsive weather application that uses location search and live weather APIs to display current conditions for searched cities.',
  tech: 'HTML · CSS · JavaScript · REST APIs',
  live: 'https://maryamdevlabs.github.io/Weather-finder/',
  github: 'https://github.com/maryamdevlabs/Weather-finder',
},
  ]

  return (
    <section className="projects" id="projects">
      <div className="projects-heading">
        <div>
          <p className="section-label">SELECTED WORK</p>

          <h2>
            Projects built with
            <span> purpose.</span>
          </h2>
        </div>

        <p>
          A selection of projects demonstrating responsive development,
          modern interfaces, API integration, and practical business-focused
          web experiences.
        </p>
      </div>

      <div className="projects-list">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className="project-number">
              {project.number}
            </div>

            <div className="project-main">
              <p className="project-category">
                {project.category}
              </p>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <p className="project-tech">
                {project.tech}
              </p>

              <div className="project-links">
  <a
    href={project.live}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`View ${project.title} live website`}
  >
    Live Site ↗
  </a>

  <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`View ${project.title} GitHub repository`}
  >
    GitHub ↗
  </a>
</div>
            </div>

            <div className="project-arrow">
              ↗
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects