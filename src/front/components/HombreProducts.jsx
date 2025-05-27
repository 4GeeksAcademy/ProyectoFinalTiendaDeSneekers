import React from 'react'
import a from "./imagenes/a.jpeg"

function HombreProducts() {
    return (
        <div className='container'>
            <div> <img src={a} alt="" />
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Precio: 45€</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default HombreProducts

