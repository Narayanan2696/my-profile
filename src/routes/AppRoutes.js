import React from 'react';
import './ProfilePage.css';

const ProfilePage = () => {
  return (
    <div className="profile-container">
      {/* Header */}
      <header className="profile-header text-center p-4">
        <h1>John Doe</h1>
        <p>Frontend Developer</p>
      </header>

      {/* Main Content */}
      <div className="profile-content">
        <section className="profile-section" id="summary">
          <h2>Profile Summary</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </section>

        <section className="profile-section" id="skills">
          <h2>Skills</h2>
          <ul className="list-inline">
            <li className="list-inline-item badge badge-primary">React</li>
            <li className="list-inline-item badge badge-secondary">JavaScript</li>
            <li className="list-inline-item badge badge-success">CSS</li>
            <li className="list-inline-item badge badge-danger">Bootstrap</li>
          </ul>
        </section>

        <section className="profile-section" id="experience">
          <h2>Experience</h2>
          <div className="experience-item">
            <h5>Frontend Developer at XYZ Corp</h5>
            <p>Jan 2020 - Present</p>
            <p>Developed dynamic user interfaces for various web applications.</p>
          </div>
          <div className="experience-item">
            <h5>Web Developer at ABC Inc.</h5>
            <p>June 2017 - Dec 2019</p>
            <p>Worked on enhancing and maintaining the corporate website.</p>
          </div>
        </section>

        <section className="profile-section" id="education">
          <h2>Education</h2>
          <p>Bachelor of Science in Computer Science - XYZ University (2013 - 2017)</p>
        </section>

        <section className="profile-section" id="contact">
          <h2>Contact</h2>
          <p>Email: johndoe@example.com</p>
          <p>LinkedIn: linkedin.com/in/johndoe</p>
        </section>
      </div>
    </div>
  );
};

export default ProfilePage;
