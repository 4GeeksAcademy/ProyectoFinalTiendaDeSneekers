import React, { useState } from "react";
import { useParams } from "react-router-dom";

const productosOfertas = [
    // Hombre
    { id: 1, nombre: "Nike Air Max 270", categoria: "hombre", precio: 120, descuento: 20, img: "https://img.eobuwie.cloud/eob_product_660w_880h(2/f/5/e/2f5e12d47fb803453586b3ee63016336b78b20a2_0000206858092_02_sw_1.jpg,jpg)/zapatos-nike-air-max-270-ah6789-001-black-anthracite-white.jpg" },
    { id: 2, nombre: "Puma RS-X³", categoria: "hombre", precio: 110, descuento: 15, img: "https://i1.t4s.cz//products/37337801/puma-rs-x-3-rf-309876-37337804-960.webp" },
    { id: 3, nombre: "Reebok Club C 85", categoria: "hombre", precio: 90, descuento: 18, img: "https://photos6.spartoo.es/photos/248/24817291/24817291_1200_A.jpg" },
    { id: 4, nombre: "Vans Old Skool", categoria: "hombre", precio: 65, descuento: 12, img: "https://photos6.spartoo.es/photos/154/15487620/Deportivas-bajas-Vans-OLD-SKOOL-15487620_1200_A.jpg" },
    { id: 5, nombre: "New Balance Fresh Foam 1080v11", categoria: "hombre", precio: 150, descuento: 15, img: "https://static.runnea.com/images/202311/new-balance-fresh-foam-1080-v11-zapatillas-running-400x400x90xX.jpg?1" },
    { id: 6, nombre: "Nike React Infinity Run", categoria: "hombre", precio: 160, descuento: 22, img: "https://images.stockx.com/images/Nike-React-Infinity-Run-Flyknit-3-Premium-Floral-Watercolor-Womens-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1738193358" },
    { id: 7, nombre: "Asics Gel-Nimbus 23", categoria: "hombre", precio: 150, descuento: 18, img: "https://www.runningxpert.com/media/catalog/product/cache/e1bfa30f5f000aa573b2ee969a7a0fde/a/s/asics-nimbus-dame-23-7.jpg" },
    { id: 8, nombre: "Converse One Star", categoria: "hombre", precio: 75, descuento: 10, img: "https://cdn.skatedeluxe.com/thumb/kQQBthFRTGBIRMFSBquP6PbLQps=/fit-in/600x700/filters:fill(white):brightness(-4)/product/166632-0-Converse-CONSOneStarPro.jpg" },
    // Mujer
    { id: 9, nombre: "Adidas Ultraboost 22", categoria: "mujer", precio: 150, descuento: 25, img: "https://www.runningxpert.com/media/catalog/product/cache/e1bfa30f5f000aa573b2ee969a7a0fde/1/5/1500x1500_-_2022-03-04t095223.111.jpg" },
    { id: 10, nombre: "Converse Chuck Taylor", categoria: "mujer", precio: 70, descuento: 22, img: "https://www.basketballemotion.com/imagesarticulos/239191/grandes/zapatilla-converse-chuck-taylor-all-star-black-1.webp" },
    { id: 11, nombre: "Adidas NMD_R1", categoria: "mujer", precio: 140, descuento: 19, img: "https://static.ftshp.digital/img/p/8/1/6/7/8/4/816784-full_product.jpg" },
    { id: 12, nombre: "Reebok Nano X1", categoria: "mujer", precio: 130, descuento: 20, img: "https://www.brikum.com/cdn/shop/files/reebok-safety-IB3481S1PS_1.jpg?v=1738853648" },
    // Niño
    { id: 13, nombre: "Nike Revolution 6 Niño", categoria: "niño", precio: 60, descuento: 15, img: "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/2e7c8d2a-5f56-4a66-89cb-e08a57a9f761/revolution-6-zapatillas-ni%C3%B1o-peque%C3%B1o-kV1h1x.png" },
    { id: 14, nombre: "Adidas Duramo SL Niño", categoria: "niño", precio: 55, descuento: 18, img: "https://assets.adidas.com/images/w_600,f_auto,q_auto/312f6e014a204de9bb33ae8500edbd4c_9366/Zapatilla_Duramo_SL_2.0_azul_HP2400_01_standard.jpg" },
    { id: 15, nombre: "Puma Courtflex Niño", categoria: "niño", precio: 50, descuento: 20, img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/371544/11/sv01/fnd/PNA/fmt/png" },
    { id: 16, nombre: "New Balance 515 Niño", categoria: "niño", precio: 65, descuento: 17, img: "https://nb.scene7.com/is/image/NB/IV515PPB_nb_02_i?$pdpflexf2$&wid=440&hei=440" },
];

const tallasDisponibles = [28, 30, 32, 34, 36, 37, 38, 39, 40, 41, 42, 43];

function getRandomTallas(num) {
    const shuffled = [...tallasDisponibles].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}

const Ofertas = () => {
    const { categoria } = useParams();
    const [tallasSeleccionadas, setTallasSeleccionadas] = useState({});

    const productosFiltrados = categoria
        ? productosOfertas.filter(p => p.categoria === categoria.toLowerCase())
        : productosOfertas;

    const handleTallaChange = (id, talla) => {
        setTallasSeleccionadas(prev => ({ ...prev, [id]: talla }));
    };

    return (
        <div className="container my-5">
            <h1 className="mb-4 text-center">
                {categoria
                    ? `Ofertas para ${categoria.charAt(0).toUpperCase() + categoria.slice(1)}`
                    : "Todas las ofertas"}
            </h1>

            <div className="row">
                {productosFiltrados.length > 0 ? (
                    productosFiltrados.map(producto => {
                        const tallasProducto = getRandomTallas(3);
                        return (
                            <div key={producto.id} className="col-md-4 mb-4">
                                <div className="card h-100 shadow-sm">
                                    <img
                                        src={producto.img}
                                        className="card-img-top"
                                        alt={producto.nombre}
                                        style={{ height: "220px", objectFit: "contain" }}
                                    />
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title">{producto.nombre}</h5>
                                        <p className="card-text">
                                            Precio original: <del>${producto.precio.toFixed(2)}</del><br />
                                            Precio con descuento:{" "}
                                            <strong>
                                                ${(
                                                    producto.precio *
                                                    (1 - producto.descuento / 100)
                                                ).toFixed(2)}
                                            </strong><br />
                                            Descuento: {producto.descuento}%
                                        </p>
                                        <div className="mb-3">
                                            <label htmlFor={`talla-select-${producto.id}`} className="form-label">
                                                Selecciona talla:
                                            </label>
                                            <select
                                                id={`talla-select-${producto.id}`}
                                                className="form-select"
                                                value={tallasSeleccionadas[producto.id] || ""}
                                                onChange={(e) => handleTallaChange(producto.id, e.target.value)}
                                            >
                                                <option value="" disabled>-- Elige una talla --</option>
                                                {tallasProducto.map((talla) => (
                                                    <option key={talla} value={talla}>{talla}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <button
                                            className="btn btn-primary mt-auto"
                                            disabled={!tallasSeleccionadas[producto.id]}
                                            onClick={() =>
                                                alert(`Añadido al carrito:\n${producto.nombre}\nTalla: ${tallasSeleccionadas[producto.id]}`)
                                            }
                                        >
                                            Añadir al carrito
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <p>No hay productos en esta categoría.</p>
                )}
            </div>
        </div>
    );
};

export default Ofertas;
