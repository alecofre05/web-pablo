import React from 'react';
import './footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">&copy; {new Date().getFullYear()}. www.estudiocofre.com.ar</p>
      </div>
    </footer>
  );
};

