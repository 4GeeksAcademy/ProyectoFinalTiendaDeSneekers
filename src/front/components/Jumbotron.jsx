import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Logo from "../components/imagenes/Logo.png";
import { Link } from "react-router-dom";

const Jumbotron = () => {
    const settings = {
        dots: false,          // Oculta puntos de navegación
        arrows: false,        // Oculta flechas
        infinite: true,       // Loop infinito
        autoplay: true,       // Auto-reproducción
        autoplaySpeed: 2000,  // Cambio cada 2 segundos
        speed: 1000,          // Transición suave
        slidesToShow: 1,      // Muestra 1 slide a la vez
        slidesToScroll: 1,
    };

    return (
        <div className='bg-danger text-dark p-3 text-center'>
            <Slider {...settings}>
                <div>
                    <div className="d-flex align-items-center justify-content-center gap-3">
                        <img
                            src={Logo}
                            alt="Logo Nike"
                            style={{ width: "60px", height: "auto" }}
                        />
                        <Link to="/descuentos" style={{ textDecoration: "none", color: "black" }}>
                            <h6 className="m-0">25% de descuento en productos de Nike</h6>
                        </Link>
                    </div>
                </div>

                <div>
                    <div className="d-flex align-items-center justify-content-center gap-3">
                        <img
                            src={Logo}
                            alt="Logo Nike"
                            style={{ width: "60px", height: "auto" }}
                        />
                        <Link to="/descuentos" style={{ textDecoration: "none", color: "black" }}>
                            <h6 className="m-0">¡Envío gratis en compras mayores a $50!</h6>
                        </Link>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default Jumbotron;



