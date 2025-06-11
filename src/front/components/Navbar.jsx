import React, { useState } from "react";
import { FaUser, FaHeart, FaShoppingBag } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/authContext";
import { Button, Image } from "react-bootstrap";

const NavbarMenu = () => {
  const navigate = useNavigate();
  const { isAuthenticated, logout, user } = useAuth();
  const [modelName, setModelName] = useState("");

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleLogin = () => {
    navigate("/Login");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search/${modelName}`);
    setModelName("");
  };

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
        .dropdown-toggle::after {
          margin-left: 0.255em;
        }
      `}</style>

      <nav className="navbar navbar-expand-lg bg-dark px-3">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand">
            <img
              src="https://c0.klipartz.com/pngpicture/504/502/gratis-png-zapatillas.png"
              alt="Logo"
              width="90"
              className="rounded"
            />
          </NavLink>
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
                <NavLink
                  to="/genero/man"
                  className={({ isActive }) =>
                    "nav-link text-white fw-bold" + (isActive ? " active" : "")
                  }
                >
                  Hombre
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/genero/woman"
                  className={({ isActive }) =>
                    "nav-link text-white fw-bold" + (isActive ? " active" : "")
                  }
                >
                  Mujer
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/genero/children"
                  className={({ isActive }) =>
                    "nav-link text-white fw-bold" + (isActive ? " active" : "")
                  }
                >
                  Niño
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle text-white fw-bold btn btn-link"
                  id="navbarDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ textDecoration: "none" }}
                >
                  Ofertas
                </button>
                <ul className="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
                  <li>
                    <NavLink
                      to="/ofertas"
                      className={({ isActive }) =>
                        "dropdown-item text-white" + (isActive ? " active" : "")
                      }
                    >
                      Todas las ofertas
                    </NavLink>
                  </li>
                  <li><hr className="dropdown-divider bg-light" /></li>
                  <li>
                    <NavLink
                      to="/ofertas/hombre"
                      className={({ isActive }) =>
                        "dropdown-item text-white" + (isActive ? " active" : "")
                      }
                    >
                      Hombre
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/ofertas/mujer"
                      className={({ isActive }) =>
                        "dropdown-item text-white" + (isActive ? " active" : "")
                      }
                    >
                      Mujer
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/ofertas/nino"
                      className={({ isActive }) =>
                        "dropdown-item text-white" + (isActive ? " active" : "")
                      }
                    >
                      Niño
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>

            <form
              className="d-flex me-3"
              role="search"
              onSubmit={(e) => handleSearch(e)}
            >
              <input
                className="form-control me-2 bg-secondary text-white border-0"
                type="search"
                placeholder="Buscar"
                aria-label="Search"
                value={modelName}
                onChange={(e) => setModelName(e.target.value)}
              />
              <button className="btn btn-outline-danger" type="submit">
                Buscar
              </button>
            </form>

            {isAuthenticated ? (
              <div className="d-flex align-items-center gap-3">
                {user.img ? (
                  <NavLink to="/perfil" title="Cuenta" className="text-white">
                    <Image
                      src={user.img}
                      alt="User Avatar"
                      roundedCircle
                      width="40"
                      height="40"
                      className="border border-2 border-white"
                    />
                  </NavLink>
                ) : (
                  <NavLink to="/perfil" title="Cuenta" className="text-white">
                    <FaUser className="fs-5" />
                  </NavLink>
                )}

              
                <NavLink to="/carrito" title="Carrito" className="text-white">
                  <FaShoppingBag className="fs-5" />
                </NavLink>
                <Button onClick={handleLogout} className="btn btn-danger">
                  Logout
                </Button>
              </div>
            ) : (
              <Button onClick={handleLogin}>Login</Button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarMenu;
