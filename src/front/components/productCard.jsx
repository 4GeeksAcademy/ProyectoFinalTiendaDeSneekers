import { useState } from "react";
import { Button, Card, Dropdown, DropdownButton, FormControl, InputGroup } from "react-bootstrap";

export default function ProductCard({ product, onAddToCart }) {
    const [talla, setTalla] = useState(0);
    const [cantidad, setCantidad] = useState(1);
    return (
        <Card className="h-100 shadow-sm">
            <Card.Img
                variant="top"
                src={product.modelo.img !== ""? product.modelo.img:null}
                alt={product.modelo.name}
                style={{ height: '200px', objectFit: 'cover' }}
            />
            <Card.Body className="d-flex flex-column">
                <Card.Title>{product.modelo.nombre}</Card.Title>
                <Card.Text className="text-muted">
                    {product.modelo.oferta}
                </Card.Text>
                <Card.Text className="flex-grow-1">
                    {product.modelo.descripcion ? product.modelo.descripcion.substring(0, 60) : <h1></h1>}...
                </Card.Text>
                <Card.Text>
                    <span className="fs-5 ms-2 fw-bold text-primary">
                        ${product.modelo.precio}
                    </span>
                </Card.Text>
                
            </Card.Body>


            <Card.Footer className="text-end">


                <InputGroup style={{ maxWidth: '120px' }}>
                    <Button variant="outline-secondary" onClick={() => setCantidad(cantidad - 1)} disabled={cantidad <= 0} >-</Button>
                    <FormControl
                        value={cantidad}
                        onChange={(e) => setCantidad(Math.max(0, parseInt(e.target.value) || 0))}
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        aria-label="Cantidad"
                    />
                    <Button variant="outline-secondary" onClick={(() => setCantidad(1 + cantidad))} >+</Button>
                </InputGroup>

                <DropdownButton
                    id="dropdown-basic-button"
                    title={talla ? `Talla: ${talla}` : "Selecciona una talla"}
                    onSelect={(selectTalla) => setTalla(parseInt(selectTalla))}
                    variant="secondary"
                >
                    {product.tallas.map((talla) => (
                        <Dropdown.Item key={talla} eventKey={talla}>
                            {talla}
                        </Dropdown.Item>
                    ))}
                </DropdownButton>
                <Button variant="primary" className="w-100" onClick={() => onAddToCart(product.id, talla, cantidad)}>
                    Añadir al carrito
                </Button>
            </Card.Footer>
        </Card>
    );
}