import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: 'Tech Corp',
      role: 'Backend Developer',
      duration: '2020 - Present',
      description: 'Developed and maintained UI components in React.',
    },
    // Add more experience entries here
  ];

  return (
    <section className="profile-section" id="experience">
      <h2>Experience</h2>
      {experiences.map((experience, index) => (
        <div className="experience-item" key={index}>
          <h3>{experience.role} - {experience.company}</h3>
          <p>{experience.duration}</p>
          <p>{experience.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Experience;
