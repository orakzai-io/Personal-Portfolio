import { useState, useEffect } from 'react';
import './Navbar.css';

const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

interface NavbarProps {
  theme: string;
  toggleTheme: () => void;
}

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="nav-left">
          <a href="#hero" className="status-badge" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>
            <span className="status-dot"></span>
            Available for Hire <span className="hide-mobile">• Any Timezone</span>
          </a>
        </div>
        
        <div className="nav-right">
          <ul className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }}>{link.label}</a>
              </li>
            ))}
          </ul>

          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>

          <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}></span>
          </button>
        </div>
      </div>
    </nav>
  );
}