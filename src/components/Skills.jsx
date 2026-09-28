function Skills() {
  const skills = [
    {
      number: '01',
      title: 'Frontend',
      items: 'HTML5 · CSS3 · JavaScript · React',
    },
    {
      number: '02',
      title: 'UI & Styling',
      items: 'Responsive Design · Flexbox · Grid · Tailwind CSS',
    },
    {
      number: '03',
      title: 'Development',
      items: 'APIs · Git · GitHub · Vite · Component Architecture',
    },
    {
      number: '04',
      title: 'Currently Exploring',
      items: 'Node.js · Express · Databases · Full-Stack Development',
    },
  ]

  return (
    <section className="skills" id="skills">
      <div className="skills-heading">
        <p className="section-label">MY TOOLKIT</p>

        <h2>
          Built with the right
          <span> tools.</span>
        </h2>

        <p>
          Technologies and development skills I use to create modern,
          responsive web experiences.
        </p>
      </div>

      <div className="skills-grid">
        {skills.map((skill) => (
          <article className="skill-card" key={skill.number}>
            <span className="skill-number">{skill.number}</span>

            <h3>{skill.title}</h3>

            <p>{skill.items}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Skills