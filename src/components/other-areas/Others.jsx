import React from 'react';
import './others.css';

export const Others = () => {
  return (
    <div className="desc-cont-other">
      <div className="title-container">
        <div className="title-divider"></div>
        <h2 className="service-title">Otras Áreas</h2>
        <div className="title-divider"></div>
      </div>
      <div className="other-container">
        <div className="flex-child-other">
          <h4>Derecho de Familia</h4>
          <ul>
            <li>Reclamo de alimentos</li>
            <li>Régimen de comunicación</li>
            <li>Cuidado personal del menor</li>
            <li>Guarda judicial del menor</li>
            <li>Tutela del menor</li>
            <li>Divorcio unilateral o en conjunto</li>
            <li>Compensaciones económicas</li>
            <li>Determinación de la capacidad</li>
            <li>Internaciones</li>
            <li>Denuncias por violencia familiar</li>
          </ul>
        </div>

        <div className="flex-child-other">
          <h4>Sucesiones</h4>
          <ul>
            <li>Declaratoria de herederos</li>
            <li>Adjudicación de los bienes</li>
            <li>Inscripción de los bienes</li>
            <li>Venta por tracto abreviado</li>
            <li>Colación a otros herederos</li>
            <li>Desplazamiento de herederos</li>
            <li>Sucesión por testamento</li>
          </ul>
        </div>

        <div className="flex-child-other">
          <h4>Civil y Comercial</h4>
          <ul>
            <li>Incumplimientos contractuales</li>
            <li>Ejecución de honorarios</li>
            <li>Redacción de contratos</li>
            <li>Administración de alquileres</li>
            <li>Ejecución de alquileres</li>
            <li>Desalojos</li>
            <li>Defensa al consumidor</li>
            <li>Prescripción adquisitiva (usucapión)</li>
            <li>Juicio de escrituración</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
