import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <section id="footer" className="footer-section">
      <div className="footer">
        <h2>DevSolutions</h2>
        <p>
          <em>
            Somos un equipo especializado en diseño web, desarrollo de aplicaciones y soluciones digitales adaptadas a las necesidades de cada cliente.
          </em>
        </p>

        <div className="social-icons">
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-whatsapp"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
        </div>

        <hr />

        <p className="copyright">
          &copy; {new Date().getFullYear()} <strong>DevSolutions</strong> – Todos los derechos reservados
        </p>
        <p className="designed">
          Sitio desarrollado con React por nuestro equipo de desarrollo
        </p>
      </div>
    </section>
  );
};

export default Footer;
