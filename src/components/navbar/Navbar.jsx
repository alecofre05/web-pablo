import './navbar.css';
import logoconslogan from '../../assets/logoconslogan.png';
import logfinal from '../../assets/logfinal.png';
import { Link } from 'react-scroll';

export const Navbar = () => {
  const refreshPage = () => {
    window.location.reload(false);
  };

  return (
    <>
      <nav className="bg navbar navbar-expand-lg navbar-light bg-light" id="nav-bg">
        <div className="logo">
          <img src={logoconslogan} alt="logo" className="logo-img" onClick={refreshPage} />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
          id="burger-button"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link" to="app" duration={10} smooth={true} onClick={refreshPage}>HOME</Link>
            <Link className="nav-link" to="description" duration={10} smooth={true}>ESTUDIO</Link>
            <Link className="nav-link" to="areas" duration={10} smooth={true}>ÁREAS</Link>
            <Link className="nav-link" to="contacto" duration={10} smooth={true}>CONTACTO</Link>
          </div>
        </div>
      </nav>
    </>
  );
};
