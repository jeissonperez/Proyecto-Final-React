import React from 'react';
import ServicioItem from './ServicioItem';
import '../styles/Servicios.css';

const Servicios = () => {
  return (
    <section id="servicios" className="servicios-section">
      <div className="servicios-contenido">
        <div className="servicios-lista">
          <ServicioItem
            imgSrc="https://cdn-icons-png.flaticon.com/128/104/104678.png"
            alt="Caja"
            titulo="Diseño Web Responsivo"
            descripcion="Creamos sitios web que se adaptan perfectamente a móviles, tabletas y escritorios, garantizando una experiencia de usuario óptima."
          />
          <ServicioItem
            imgSrc="https://cdn-icons-png.flaticon.com/128/1170/1170678.png"
            alt="Carrito"
            titulo="Desarrollo de Aplicaciones"
            descripcion="Desarrollamos aplicaciones móviles y web escalables, con la última tecnología para que tu negocio crezca sin límites."
          />
          <ServicioItem
            imgSrc="https://cdn-icons-png.flaticon.com/128/483/483947.png"
            alt="Señal"
            titulo="Optimización SEO"
            descripcion="Mejoramos tu posicionamiento en Google mediante estrategias de SEO on‑page y off‑page, aumentando tu visibilidad y tráfico."
          />
          <ServicioItem
            imgSrc="https://cdn-icons-png.flaticon.com/128/1040/1040235.png"
            alt="Vídeo"
            titulo="Mantenimiento y Soporte"
            descripcion="Brindamos soporte continuo y actualizaciones periódicas para que tu sitio y aplicaciones estén siempre al día y seguras."
          />
        </div>

        <div className="servicios-imagen">
          <img src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/Q743HABRBVA5VHY5CVGLTXAXSI.jpg" alt="Trabajo" />
        </div>
      </div>
    </section>
  );
};

export default Servicios;