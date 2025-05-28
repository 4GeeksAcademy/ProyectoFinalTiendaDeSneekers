import React from 'react';

function MujerProducts() {
  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">Zapatillas de Mujer</h1>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        <div className="col">
          <div className="card h-100 shadow-sm">
            <img
              src="https://www.runningxpert.com/media/catalog/product/cache/e1bfa30f5f000aa573b2ee969a7a0fde/f/q/fq5027-100.jpg"
              className="card-img-top"
              alt="Nike Air Zoom"
            />
            <div className="card-body">
              <h5 className="card-title">Nike Air Zoom</h5>
              <p className="card-text">Zapatillas deportivas ligeras para running. Comodidad y rendimiento garantizado.</p>
              <button className="btn btn-primary w-100">Ver más</button>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100 shadow-sm">
            <img
              src="https://premiumsneakershop.com/30339-large_default/adidas-samba-og-j-blanco.jpg"
              className="card-img-top"
              alt="Adidas Samba OG"
            />
            <div className="card-body">
              <h5 className="card-title">Adidas Samba OG</h5>
              <p className="card-text">Estilo clásico para tu día a día. Icónicas y siempre a la moda.</p>
              <button className="btn btn-primary w-100">Ver más</button>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100 shadow-sm">
            <img
              src="https://www.todo-deporte.com/33339-large_default/asics-contend-8-print-gs.jpg"
              className="card-img-top"
              alt="Asics Contend 8"
            />
            <div className="card-body">
              <h5 className="card-title">Asics Contend 8</h5>
              <p className="card-text">Rendimiento y confort para tus entrenamientos diarios. Tecnología avanzada de amortiguación.</p>
              <button className="btn btn-primary w-100">Ver más</button>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100 shadow-sm">
            <img
              src="https://www.ryses.es/fstrz/r/s/assets.laboutiqueofficielle.com/w_450,q_auto,f_auto/media/products/2023/12/14/new-balance_399274_WS327PJ_20231218T152825_01.jpg"
              className="card-img-top"
              alt="New Balance 327"
            />
            <div className="card-body">
              <h5 className="card-title">New Balance 327</h5>
              <p className="card-text">Estilo retro con tecnología moderna. Comodidad y diseño únicos.</p>
              <button className="btn btn-primary w-100">Ver más</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MujerProducts;
