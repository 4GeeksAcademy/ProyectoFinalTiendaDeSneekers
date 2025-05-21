import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from "../components/imagenes/Logo.png";
import { Link } from "react-router-dom";

const Jumbotron = () => {
    return (
        <div className='bg-danger text-dark p-3 text-center'>
            <div
                className="d-flex align-items-center justify-content-center gap-3"
                style={{ flexWrap: "wrap" }}
            >
                <img
                    src={Logo}
                    alt="Logo"
                    style={{ width: "60px", height: "auto" }}
                />
                <Link to="/descuentos" style={{ textDecoration: "none", color: "black" }}>
                    <h6 className="m-0">25% de descuento en productos de Nike</h6>
                </Link>
            </div>
        </div>
    );
};

export default Jumbotron;



