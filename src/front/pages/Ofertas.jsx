import React, { useState } from "react";
import { useParams } from "react-router-dom";

const productosOfertas = [
  {
    id: 1,
    nombre: "Nike Air Max 270",
    categoria: "hombre",
    precio: 120,
    descuento: 20,
    img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/0d795b9d-9a88-4bfe-8850-98662e7e3ac3/air-max-270-mens-shoes-KkLcGR.png",
  },
  {
    id: 2,
    nombre: "Adidas Ultraboost 22",
    categoria: "mujer",
    precio: 150,
    descuento: 25,
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cad8b42c8d5a466c9337ab0e01126d2a_9366/Ultraboost_22_Shoes_Black_FY0377_01_standard.jpg",
  },
  {
    id: 3,
    nombre: "Puma RS-X³",
    categoria: "hombre",
    precio: 110,
    descuento: 15,
    img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/371570/02/sv01/fnd/EEA/fmt/png",
  },
  {
    id: 4,
    nombre: "New Balance 574",
    categoria: "mujer",
    precio: 80,
    descuento: 30,
    img: "https://nb.scene7.com/is/image/NB/m5740ck_nb_02_i?$pdpflexf2$&wid=440&hei=440",
  },
  {
    id: 5,
    nombre: "Reebok Club C 85",
    categoria: "hombre",
    precio: 90,
    descuento: 18,
    img: "https://assets.reebok.com/images/w_600,f_auto,q_auto/04dcaec25c24413f8b6caba901f0a0cd_9366/Club_C_85_Shoes_White_FV2802_01_standard.jpg",
  },
  {
    id: 6,
    nombre: "Converse Chuck Taylor",
    categoria: "mujer",
    precio: 70,
    descuento: 22,
    img: "https://www.converse.com/on/demandware.static/-/Sites-masterCatalog/default/dw8d3f7f54/images/a_107/165694C_A_107X1.jpg",
  },
  {
    id: 7,
    nombre: "Vans Old Skool",
    categoria: "hombre",
    precio: 65,
    descuento: 12,
    img: "https://images.vans.com/is/image/VansEU/VN000D3HY28-HERO?$583x583$",
  },
  {
    id: 8,
    nombre: "Asics Gel-Kayano 27",
    categoria: "mujer",
    precio: 140,
    descuento: 27,
    img: "https://images.asics.com/is/image/asics/1012A649_100_SR_RT_GLB?$sfcc-product$",
  },
  {
    id: 9,
    nombre: "Under Armour HOVR Phantom",
    categoria: "hombre",
    precio: 130,
    descuento: 19,
    img: "https://underarmour.scene7.com/is/image/Underarmour/3022587-002_DEFAULT?rp=standard-0pad&fmt=png-alpha",
  },
  {
    id: 10,
    nombre: "Nike Air Force 1",
    categoria: "mujer",
    precio: 100,
    descuento: 23,
    img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/fd15896d-3f0c-4a4e-8c4a-77f49532a03a/air-force-1-07-shoe-KyTW5q.png",
  },
  {
    id: 11,
    nombre: "Adidas Superstar",
    categoria: "hombre",
    precio: 95,
    descuento: 20,
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c8b1aa6db00d43a6a9a7ab4800b171f0_9366/Superstar_Shoes_White_FV3284_01_standard.jpg",
  },
  {
    id: 12,
    nombre: "Puma Cali",
    categoria: "mujer",
    precio: 85,
    descuento: 17,
    img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/369155/01/sv01/fnd/EEA/fmt/png",
  },
  {
    id: 13,
    nombre: "New Balance Fresh Foam 1080v11",
    categoria: "hombre",
    precio: 150,
    descuento: 15,
    img: "https://nb.scene7.com/is/image/NB/m1080v11_nb_02_i?$pdpflexf2$&wid=440&hei=440",
  },
  {
    id: 14,
    nombre: "Reebok Nano X1",
    categoria: "mujer",
    precio: 130,
    descuento: 20,
    img: "https://assets.reebok.com/images/w_600,f_auto,q_auto/0a4a6e45f4c1460dbfc3aba70126937b_9366/Nano_X1_Shoes_Black_FY6242_01_standard.jpg",
  },
  {
    id: 15,
    nombre: "Converse One Star",
    categoria: "hombre",
    precio: 75,
    descuento: 10,
    img: "https://www.converse.com/on/demandware.static/-/Sites-masterCatalog/default/dw4f4e8ff12/images/a_107/162064C_A_107X1.jpg",
  },
  {
    id: 16,
    nombre: "Vans Sk8-Hi",
    categoria: "mujer",
    precio: 80,
    descuento: 14,
    img: "https://images.vans.com/is/image/VansEU/VN000D5IBKA-HERO?$583x583$",
  },
  {
    id: 17,
    nombre: "Asics Gel-Nimbus 23",
    categoria: "hombre",
    precio: 150,
    descuento: 18,
    img: "https://images.asics.com/is/image/asics/1011A551_001_SR_RT_GLB?$sfcc-product$",
  },
  {
    id: 18,
    nombre: "Under Armour Charged Assert 8",
    categoria: "mujer",
    precio: 85,
    descuento: 21,
    img: "https://underarmour.scene7.com/is/image/Underarmour/3022583-001_DEFAULT?rp=standard-0pad&fmt=png-alpha",
  },
  {
    id: 19,
    nombre: "Nike React Infinity Run",
    categoria: "hombre",
    precio: 160,
    descuento: 22,
    img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b34b9b42-f0d7-4bc5-94b6-7b8f80d19d09/react-infinity-run-flyknit-2-mens-running-shoes-4MsV9D.png",
  },
  {
    id: 20,
    nombre: "Adidas NMD_R1",
    categoria: "mujer",
    precio: 140,
    descuento: 19,
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/904bade0d6224d278ae5ab4000d0cfe4_9366/NMD_R1_Shoes_Black_FZ3208_01_standard.jpg",
  },
];

const tallasDisponibles = [36, 37, 38, 39, 40, 41, 42, 43, 44, 45];

function getRandomTallas(num) {
  const shuffled = [...tallasDisponibles].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
}

const Ofertas = () => {
  const { categoria } = useParams();
  const [tallasSeleccionadas, setTallasSeleccionadas] = useState({});

  const productosFiltrados = categoria
    ? productosOfertas.filter(
        (p) => p.categoria === categoria.toLowerCase()
      )
    : productosOfertas;

  const handleTallaChange = (id, talla) => {
    setTallasSeleccionadas((prev) => ({ ...prev, [id]: talla }));
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
          productosFiltrados.map((producto) => {
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
                      Precio original: <del>${producto.precio.toFixed(2)}</del>
                      <br />
                      Precio con descuento:{" "}
                      <strong>
                        $
                        {(producto.precio * (1 - producto.descuento / 100)).toFixed(
                          2
                        )}
                      </strong>
                      <br />
                      Descuento: {producto.descuento}%
                    </p>
                    <div className="mb-3">
                      <label
                        htmlFor={`talla-select-${producto.id}`}
                        className="form-label"
                      >
                        Selecciona talla:
                      </label>
                      <select
                        id={`talla-select-${producto.id}`}
                        className="form-select"
                        value={tallasSeleccionadas[producto.id] || ""}
                        onChange={(e) =>
                          handleTallaChange(producto.id, e.target.value)
                        }
                      >
                        <option value="" disabled>
                          -- Elige una talla --
                        </option>
                        {tallasProducto.map((talla) => (
                          <option key={talla} value={talla}>
                            {talla}
                          </option>
                        ))}
                      </select>
                    </div>
                    <button
                      className="btn btn-primary mt-auto"
                      disabled={!tallasSeleccionadas[producto.id]}
                      onClick={() =>
                        alert(
                          `Añadido al carrito:\n${producto.nombre}\nTalla: ${tallasSeleccionadas[producto.id]}`
                        )
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
