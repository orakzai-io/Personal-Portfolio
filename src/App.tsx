import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
// import Experience from './components/Experience';
import Projects from './components/Projects';
import EducationCerts from './components/EducationCerts';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  useEffect(() => {
    // Initial theme setup
    document.documentElement.setAttribute('data-theme', 'dark');

    // Scroll Reveal Logic
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="portfolio-app">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        {/* <Experience /> */}
        <Projects />
        <EducationCerts />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
