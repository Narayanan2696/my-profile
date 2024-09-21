import React from 'react';

const Skills = () => {
  const skills = ['Java Spring Boot', 'Ruby On Rails', 'Node.JS Express', 'PostgreSQL', 'Temporal', 'Redis'];

  return (
    <section className="profile-section" id="skills">
      <h2>Skills</h2>
      <ul className="list-inline">
        {skills.map((skill, index) => (
          <li className="list-inline-item" key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
