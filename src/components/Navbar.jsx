import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import '../styles/Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
      
      // Detectar la sección visible
      const sections = ['inicio', 'servicios', 'footer'];
      const scrollPosition = window.scrollY + 100; // Ajuste para cuando detecta la sección
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scroll' : ''}`}>
      <span className="navbar-logo"><h2>DevSolutions</h2></span>
      <Link 
        to="inicio" 
        smooth={true} 
        duration={500} 
        className={`nav-link ${activeSection === 'inicio' ? 'active' : ''}`}
      >
        Inicio
      </Link>
      <Link 
        to="servicios" 
        smooth={true} 
        duration={500} 
        className={`nav-link ${activeSection === 'servicios' ? 'active' : ''}`}
      >
        Servicios
      </Link>
      <Link 
        to="footer" 
        smooth={true} 
        duration={500} 
        className={`nav-link ${activeSection === 'footer' ? 'active' : ''}`}
      >
        Footer
      </Link>
    </nav>
  );
};

export default Navbar;