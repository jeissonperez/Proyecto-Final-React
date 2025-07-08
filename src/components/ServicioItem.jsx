import React, { useEffect, useRef } from 'react';

const ServicioItem = ({ imgSrc, alt, titulo, descripcion }) => {
  const itemRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  return (
    <div ref={itemRef} className="servicio-item">
      <img src={imgSrc} alt={alt} />
      <div className="servicio-texto">
        <h3>{titulo}</h3>
        <p>{descripcion}</p>
      </div>
    </div>
  );
};

export default ServicioItem;