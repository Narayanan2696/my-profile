// src/App.jsx
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="font-sans bg-gradient-to-br from-gray-100 via-white to-gray-200 min-h-screen scroll-smooth">
      <header className="bg-white/90 backdrop-blur-md shadow-md p-4 sticky top-0 z-50 flex flex-col items-center rounded-b-2xl">
        <h1 className="text-4xl font-extrabold text-center text-gray-800">Narayanan Venkataraman</h1>
        <nav className="mt-2">
          <ul className="flex flex-wrap justify-center gap-6 text-md text-gray-700 font-semibold">
            <li><a href="#about" className="hover:text-blue-600 transition">About</a></li>
            <li><a href="#skills" className="hover:text-blue-600 transition">Skills</a></li>
            <li><a href="#experience" className="hover:text-blue-600 transition">Experience</a></li>
            <li><a href="#education" className="hover:text-blue-600 transition">Education</a></li>
            <li><a href="#certifications" className="hover:text-blue-600 transition">Certifications</a></li>
            <li><a href="#contact" className="hover:text-blue-600 transition">Contact</a></li>
          </ul>
        </nav>
        <motion.a 
          href="/Narayanan_resume_onatsline.pdf" 
          download 
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }} 
          className="mt-4 inline-block bg-blue-600 text-black px-8 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 text-lg font-semibold"
        >
          Download Resume
        </motion.a>
      </header>
      <main className="max-w-5xl mx-auto p-6 space-y-12">
        <motion.div id="about" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <About />
        </motion.div>
        <motion.div id="skills" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
          <Skills />
        </motion.div>
        <motion.div id="experience" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}>
          <Experience />
        </motion.div>
        <motion.div id="education" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.6 }}>
          <Education />
        </motion.div>
        <motion.div id="certifications" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.8 }}>
          <Certifications />
        </motion.div>
        <motion.div id="contact" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 1.0 }}>
          <Contact />
        </motion.div>
      </main>
    </div>
  );
}

export default App;
