import React from 'react';
import './services.css';
import imageService from '../../assets/image-service.png';

export const Services = () => {
  return (
    <div className="services-container">
      <div className="custom-title-container">
        <div className="custom-title-divider"></div>
        <h2 className="custom-service-title">Servicios</h2>
        <div className="custom-title-divider"></div>
      </div>
      <div className="service-content">
        <div className="service-details">
          <div className="service-category">
            <h4 className="category-title">Consultoría Empresarial</h4>
            <ul className="category-list">
              <li>Previsión de litigios</li>
              <li>Abogacía preventiva</li>
              <li>Gestión de cobranzas de facturas</li>
              <li>Contratos comerciales</li>
              <li>Ejecución de cheques y pagarés</li>
            </ul>
          </div>
          <div className="service-category">
            <h4 className="category-title">Gestión de alquileres</h4>
            <ul className="category-list">
              <li>Fijos y temporales</li>
              <li>Contratos de locación</li>
              <li>Cobranzas</li>
            </ul>
          </div>
        </div>
        <div className="service-image">
          <img src={imageService} alt="logo" className="service-logo" />
        </div>
      </div>
    </div>
  );
}

