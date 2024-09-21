import React from 'react';

const Projects = () => {
  const projects = [
    {
      name: 'E-commerce Platform',
      description: 'Developed a React-based e-commerce platform.',
      link: 'https://example.com',
    },
    // Add more projects here
  ];

  return (
    <section className="profile-section" id="projects">
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div key={index}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>
      ))}
    </section>
  );
};

export default Projects;
