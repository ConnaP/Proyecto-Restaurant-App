import React from "react";
import "./Header.css";
import logo from '../../assets/img/logo.jpeg';

export const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary header">
        <div className="container-fluid header-container">
          {/* <a className="navbar-brand" href="#">
            
          </a> */}
          <img className="logo-img" src={logo} alt="Logo" />
          <div className="title-logo">La casa Pizza </div>
          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                  Menú
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/reserve">
                  Haz tu reserva
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/nosotros">
                  Nosotros
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
