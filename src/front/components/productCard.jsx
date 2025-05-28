import { useState } from "react";
import { Button, Card, Dropdown, DropdownButton, FormControl, InputGroup } from "react-bootstrap";
import { useAuth } from "../hooks/authContext";
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { fetchProducts } from "../../services/fetchs";

export default function ProductCard({ product, onAddToCart, gender }) {
    const [talla, setTalla] = useState(0);
    const [cantidad, setCantidad] = useState(1);
    const { user } = useAuth()
    const { store, dispatch } = useGlobalReducer();


    const handleDelete = async () => {
        console.log(product.id);
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}zapatillas/${product.id}`, {
            method: 'DELETE',
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('token')}`,
                "Content-Type": "application/json"
            },
        });
        if (response.ok) {
            dispatch({ type: "delete", payload: { marca: product.marca, id: product.id } });
            await fetchProducts(gender, dispatch);
            alert("Producto eliminado correctamente");
            
        }
    }
    
    const handleEdit = async () => {
        // Aquí puedes implementar la lógica para editar el producto
        console.log("Editar producto", product.id);
    }
    return (
        <Card className="h-100 shadow-sm">
            {user?.role === "SuperAdmin" ? 
            <Card.Header className="d-flex justify-content-between align-items-center">
                <Button variant="secondary" onClick={() => handleEdit()}><CiEdit /></Button>
                <Button variant="danger" onClick={() => handleDelete()}><MdDeleteOutline /></Button>
                </Card.Header>
                : null
        }
            
            <Card.Img
                variant="top"
                src={product.modelo.img !== "" ? product.modelo.img : null}
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