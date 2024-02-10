import React, { useState, useRef } from 'react';
import './contact.css';
import Map from '../../services/MyMap';
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
    message: '',
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_yd4l2mh", "template_i846y4k", form.current, "HNLVab9UD4fUxYbbZ").then(
      (result) => {
        console.log(result.text);
        setFormData({
          name: '',
          surname: '',
          email: '',
          phone: '',
          message: '',
        });
        toast.success('Mensaje enviado correctamente', { autoClose: 3000 });
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="contact-container" id="contacto">
      <div className="custom-title-container">
        <div className="custom-title-divider"></div>
        <h2 className="custom-contact-title">Contacto</h2>
        <div className="custom-title-divider"></div>
      </div>
      <div className="contact-content">
        <div className="contact-info">
          <div className="map-container">
            <Map />
          </div>
          <div className="contact-details">
            <p>
              <span>Dirección:</span> J. D. Perón N°683 5° A, Buenos Aires
            </p>
            <p>
              <span>Teléfono:</span> 11 3820-7357
            </p>
            <p>
              <span>Email:</span> pablogcofre@gmail.com
            </p>
            <p>
              <span>Instagram:</span> estudiocofre
            </p>
          </div>
        </div>
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <div className="form-group">
            <label>Nombre</label>
            <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label>Apellido</label>
            <input type="text" name="surname" value={formData.surname} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label>Teléfono</label>
            <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label>Mensaje</label>
            <textarea name="message" value={formData.message} onChange={handleInputChange} required />
          </div>
          <button className="contact-btn" value="Send" type="submit">Enviar</button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};
