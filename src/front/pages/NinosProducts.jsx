import React from 'react';

function NinosProducts() {
  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">Zapatillas para Niños</h1>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        <div className="col">
          <div className="card h-100 shadow-sm">
            <img
              src="https://calzadoinfantilmayka.es/3427-large_default/zapatillas-nike-ninos.jpg"
              className="card-img-top"
              alt="Nike Niños"
            />
            <div className="card-body">
              <h5 className="card-title">Nike Kids</h5>
              <p className="card-text">Diseñadas para el día a día de los pequeños. Comodidad y estilo asegurados.</p>
              <button className="btn btn-primary w-100">Ver más</button>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100 shadow-sm">
            <img
              src="https://deporteshalcon.net/media/catalog/product/cache/271498e157a9c63e918dfed5e4e9cd57/a/d/adidas-hoops-3884-1.jpg"
              className="card-img-top"
              alt="Adidas Hoops Kids"
            />
            <div className="card-body">
              <h5 className="card-title">Adidas Hoops</h5>
              <p className="card-text">Estilo urbano para niños activos. Durabilidad y diseño moderno.</p>
              <button className="btn btn-primary w-100">Ver más</button>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100 shadow-sm">
            <img
              src="https://deportesmoya.es/179981-large_default/zapatillas-new-balance-yt570tr3-rojo-ninos.jpg"
              className="card-img-top"
              alt="New Balance Kids"
            />
            <div className="card-body">
              <h5 className="card-title">New Balance YT570</h5>
              <p className="card-text">Perfectas para aventuras al aire libre. Estabilidad y ligereza.</p>
              <button className="btn btn-primary w-100">Ver más</button>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100 shadow-sm">
            <img
              src="https://www.todo-deporte.com/24182-large_default/asics-gel-contend-6-ps-404.jpg"
              className="card-img-top"
              alt="Asics Contend Kids"
            />
            <div className="card-body">
              <h5 className="card-title">Asics Contend 6 PS</h5>
              <p className="card-text">Con tecnología de amortiguación para cada paso. Resistentes y seguras.</p>
              <button className="btn btn-primary w-100">Ver más</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NinosProducts;
