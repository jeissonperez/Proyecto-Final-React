import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import '../styles/Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scroll' : ''}`}>
      <span className="navbar-logo"><h2>DevSolutions</h2></span>
      <Link to="inicio" smooth={true} duration={500} className="nav-link">Inicio</Link>
      <Link to="servicios" smooth={true} duration={500} className="nav-link">Servicios</Link>
      <Link to="footer" smooth={true} duration={500} className="nav-link">footer</Link>
    </nav>
  );
};

export default Navbar;
