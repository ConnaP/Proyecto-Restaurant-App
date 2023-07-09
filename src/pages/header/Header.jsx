import "./Header.css";
import logo from "../../assets/img/logo.jpeg";
import { Link } from "react-router-dom";

export const Header = ({ user, onLogin, onLogout }) => {
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
                <Link className="nav-link" to="/">
                  Menú
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/reserve">
                  Haz tu reserva
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/we">
                  Nosotros
                </Link>
              </li>
            </ul>
          </div>

          {user ? (
            <div className="navbar-collapse ml-auto">
              <div className="navbar-nav ml-auto">
                <div className="d-flex align-items-center">
                  <img
                    src={user.photo}
                    alt={user.name}
                    className="img-fluid rounded-circle avatar "
                  />
                  <span className="nav-item nav-link text-info">
                    {user.name}
                  </span>
                </div>
                <button
                  className="btn btn-outline-secondary btn-sm"
                  onClick={onLogout}
                >
                  Cerrar sesión
                </button>
              </div>
            </div>
          ) : (
            <div className="navbar-collapse ml-auto">
              <div className="navbar-nav ml-auto">
                <button
                  className="nav-item btn btn-outline-secondary btn-sm"
                  onClick={onLogin}
                >
                  Iniciar sesión
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
