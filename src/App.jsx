// src/App.jsx
import About from './components/About';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import { motion } from 'framer-motion';
import { AppBar, Toolbar, Button, Container, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1e3a8a', // Deep blue
    },
    background: {
      default: '#f5f5f5', // Light gray background
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="font-sans bg-[f5f5f5] min-h-screen scroll-smooth">
        <AppBar position="sticky" sx={{ bgcolor: '#f0f0f0', color: '#1e3a8a' }} elevation={2}>
          <Container maxWidth="lg">
            <Toolbar disableGutters className="flex justify-between flex-wrap py-2">
              <Box className="flex flex-wrap gap-2 px-4">
                <Button href="#about" sx={{ color: '#1e3a8a' }}>About</Button>
                <Button href="#skills" sx={{ color: '#1e3a8a' }}>Skills</Button>
                <Button href="#experience" sx={{ color: '#1e3a8a' }}>Experience</Button>
                <Button href="#education" sx={{ color: '#1e3a8a' }}>Education</Button>
                <Button href="#certifications" sx={{ color: '#1e3a8a' }}>Certifications</Button>
                <Button href="#contact" sx={{ color: '#1e3a8a' }}>Contact</Button>
                <Button
                  variant="contained"
                  href="/Narayanan_resume_onatsline.pdf"
                  download
                  sx={{ ml: 1, bgcolor: '#1e3a8a', color: 'white', '&:hover': { bgcolor: '#172554' } }}
                >
                  Download Resume
                </Button>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
        <Hero />

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
    </ThemeProvider>
  );
}

export default App;