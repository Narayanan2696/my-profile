import React from 'react';
import './styles/style.css';
import './styles/ProfilePage.css';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="profile-container">
        <Hero />
        <div className="profile-content">
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </div>
     </div>
    </Router>
  );
}

export default App;
