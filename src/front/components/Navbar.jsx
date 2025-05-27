import React from "react";
import { FaUser, FaHeart, FaShoppingBag } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/authContext";
import { Button } from "react-bootstrap";
const NavbarMenu = () => {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();
  const handleLogout = () => {
    logout();
    navigate("/");
  };
  const handleLogin = () => {
    navigate("/Login")
  }
  return (
    <>
      <style>{`
        .nav-item.dropdown:hover>.dropdown-menu {
          display: block;
          margin-top: 0;
        }

        .dropdown-menu {
          margin-top: 0;
          border-radius: 0.25rem;
        }
      `}</style>

      <nav className="navbar navbar-expand-lg bg-dark px-3">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img
              src="https://c0.klipartz.com/pngpicture/504/502/gratis-png-zapatillas.png"
              alt="Logo"
              width="90"
              className="rounded"
            />
          </Link>
          <button
            className="navbar-toggler bg-light"
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
                <Link to="/hombreProducts" className="nav-link text-white fw-bold">
                  Hombre
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/genero/woman" className="nav-link text-white fw-bold">
                  Mujer
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/genero/child" className="nav-link text-white fw-bold">
                  Niño
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-white fw-bold"
                  href="#"
                  role="button"
                  aria-expanded="false"
                >
                  Ofertas
                </a>
                <ul className="dropdown-menu bg-dark">
                  <li>
                    <Link className="dropdown-item text-white" to="/ofertas">
                      Todas las ofertas
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider bg-light" />
                  </li>
                  <li>
                    <Link className="dropdown-item text-white" to="/ofertas/hombre">
                      Hombre
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item text-white" to="/ofertas/mujer">
                      Mujer
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item text-white" to="/ofertas/nino">
                      Niño
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>

            <form className="d-flex me-3" role="search">
              <input
                className="form-control me-2 bg-secondary text-white border-0"
                type="search"
                placeholder="Buscar"
                aria-label="Search"
              />
              <button className="btn btn-outline-danger" type="submit">
                Buscar
              </button>
            </form>

            {
              isAuthenticated ? (
                <div className="d-flex align-items-center gap-3">
                  <Link to="/perfil" title="Cuenta" className="text-white">
                    <FaUser className="fs-5" />
                  </Link>
                  <Link to="/favoritos" title="Favoritos" className="text-white">
                    <FaHeart className="fs-5" />
                  </Link>
                  <Link to="/carrito" title="Carrito" className="text-white">
                    <FaShoppingBag className="fs-5" />
                  </Link>
                  <Button onClick={() => handleLogout()} className="btn btn-danger">
                    Logout
                  </Button>
                </div>)
                : <Button onClick={() => handleLogin()} >Login</Button>
            }

          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarMenu;
