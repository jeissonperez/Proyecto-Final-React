import React from 'react';
import '../styles/Inicio.css';

const Inicio = () => {
  return (
    <section id="inicio" className="inicio-section">
      <div className="inicio-content">
        <h1>Bienvenido a Nuestro Sitio</h1>
        <p>Somos un equipo de diseñadores creando sitios con React</p>
        <div className="play-button">▶</div>
      </div>
    </section>
  );
};

export default Inicio;
