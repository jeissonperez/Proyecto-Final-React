import React from 'react';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />

      {/* Secciones con IDs que coinciden con los "to" del Navbar */}
      <section id="inicio" className="inicio-section">
        <div className="inicio-content">
          <h1>Bienvenido a Nuestro Sitio</h1>
          <p>Somos un equipo de diseñadores creando sitios con React</p>
          <div className="play-button">
            ▶
          </div>
        </div>
      </section>

      <section id="servicios" className="servicios-section">
        <div className="servicios-contenido">
          <div className="servicios-lista">
            <div className="servicio-item">
              <img src="https://cdn-icons-png.flaticon.com/128/104/104678.png" alt="Caja" />
              <div className="servicio-texto">
                <h3>Diseño Web Responsivo</h3>
                <p>
                  Creamos sitios web que se adaptan perfectamente a móviles, tabletas
                  y escritorios, garantizando una experiencia de usuario óptima.
                </p>
              </div>
            </div>
            <div className="servicio-item">
              <img src="https://cdn-icons-png.flaticon.com/128/1170/1170678.png" alt="Carrito" />
              <div className="servicio-texto">
                <h3>Desarrollo de Aplicaciones</h3>
                <p>
                  Desarrollamos aplicaciones móviles y web escalables, con la última
                  tecnología para que tu negocio crezca sin límites.
                </p>
              </div>
            </div>
            <div className="servicio-item">
              <img src="https://cdn-icons-png.flaticon.com/128/483/483947.png" alt="Señal" />
              <div className="servicio-texto">
                <h3>Optimización SEO</h3>
                <p>
                  Mejoramos tu posicionamiento en Google mediante estrategias de
                  SEO on‑page y off‑page, aumentando tu visibilidad y tráfico.
                </p>
              </div>
            </div>
            <div className="servicio-item">
              <img src="https://cdn-icons-png.flaticon.com/128/1040/1040235.png" alt="Vídeo" />
              <div className="servicio-texto">
                <h3>Mantenimiento y Soporte</h3>
                <p>
                  Brindamos soporte continuo y actualizaciones periódicas para que tu
                  sitio y aplicaciones estén siempre al día y seguras.
                </p>
              </div>
            </div>
          </div>

          {/* Imagen a la derecha */}
          <div className="servicios-imagen">
            <img src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/Q743HABRBVA5VHY5CVGLTXAXSI.jpg" alt="Trabajo" />
          </div>
        </div>
      </section>

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

    </div>
  );
}

export default App;