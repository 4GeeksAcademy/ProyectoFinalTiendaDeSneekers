import React from "react";
import { FaUser, FaHeart, FaShoppingBag } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';

const NavbarMenu = () => {
  return (
    <>
      <style>{`
        .nav-item.dropdown:hover > .dropdown-menu {
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
          <a className="navbar-brand" href="#">
            <img
              src="https://c0.klipartz.com/pngpicture/504/502/gratis-png-zapatillas.png"
              alt="Logo"
              width="90"
              className="rounded"
            />
          </a>
          {/* No toggle button necesario si no usas JS, pero lo dejo por si quieres */}
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
                <a className="nav-link text-white fw-bold" href="#">Hombre</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white fw-bold" href="#">Mujer</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white fw-bold" href="#">Niño</a>
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
                  <li><a className="dropdown-item text-white" href="#">Todas las ofertas</a></li>
                  <li><hr className="dropdown-divider bg-light" /></li>
                  <li><a className="dropdown-item text-white" href="#">Hombre</a></li>
                  <li><a className="dropdown-item text-white" href="#">Mujer</a></li>
                  <li><a className="dropdown-item text-white" href="#">Niños</a></li>
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
              <button className="btn btn-outline-danger" type="submit">Buscar</button>
            </form>

            <div className="d-flex align-items-center gap-3">
              <FaUser className="text-white fs-5" title="Cuenta" />
              <FaHeart className="text-white fs-5" title="Favoritos" />
              <FaShoppingBag className="text-white fs-5" title="Carrito" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarMenu;
