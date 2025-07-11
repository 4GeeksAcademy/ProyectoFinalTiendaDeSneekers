import { useState } from "react";
import { Button, Card, Dropdown, DropdownButton, FormControl, InputGroup } from "react-bootstrap";
import { useAuth } from "../hooks/authContext";
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { fetchProducts } from "../../services/fetchs";
import ModalProduct from "./Modal";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ marca, product, gender }) {
    const [talla, setTalla] = useState(0);
    const [cantidad, setCantidad] = useState(1);
    const { user, cart, addToCart } = useAuth()
    const { store, dispatch } = useGlobalReducer();
    const [showModal, setShowModal] = useState(false);

    const stockDisponible = product.tallas.find(t => t.talla === talla)?.stock || 0;

    const navigate = useNavigate();
    const handleModal = () => {
        setShowModal(true);
    }
    console.log(product)
    const onAddToCart = async (zapatilla_id, talla, cantidad) => {
        if (!talla) {
            alert("Por favor, selecciona una talla antes de añadir al carrito.");
            return;
        }
        console.log("Añadiendo al carrito", zapatilla_id, talla, cantidad);
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/add_to_cart`, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ zapatilla_id, cantidad, talla }),
        });
        if (response.ok) {
            const data = await response.json();
            console.log("Producto añadido al carrito:", data.zapatilla);
            addToCart(data.zapatilla);


        } else {
            console.error("Error al añadir al carrito", response.statusText);
        }
    }
    const handleDelete = async () => {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/zapatillas/${product.id}`, {
            method: 'DELETE',
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('token')}`,
                "Content-Type": "application/json"
            },
        });
        if (response.ok) {
            dispatch({ type: "delete", payload: { marca: marca.marca, id: product.id } });
            await fetchProducts(gender, dispatch);
            alert("Producto eliminado correctamente");

        } 
    }
    return (
        <Card className="h-100 shadow-sm">
            {user?.role === "SuperAdmin" ?
                <Card.Header className="d-flex justify-content-between align-items-center">
                    <Button variant="secondary" onClick={() => handleModal()}><CiEdit /></Button>
                    <Button variant="danger" onClick={() => handleDelete()}><MdDeleteOutline /></Button>
                    <ModalProduct marcaProduct={marca?.marca} product={product} show={showModal} onHide={() => setShowModal(false)} />
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
                    {product.modelo.marca}
                </Card.Text>
                <Card.Text>
                    <span className="fs-5 fw-bold text-danger me-2">
                        ${product.modelo.precio}
                    </span>
                </Card.Text>
                <Card.Text className="flex-grow-1">
                    {product.modelo.descripcion ? product.modelo.descripcion.substring(0, 60) : null}
                </Card.Text>


            </Card.Body>

            {
                user ?
                    <Card.Footer className="d-flex flex-column align-items-center">




                        <DropdownButton
                            id="dropdown-basic-button"
                            title={talla ? `Talla: ${talla}` : "Selecciona una talla"}
                            onSelect={(selectTalla) => setTalla(parseInt(selectTalla))}
                            variant="secondary"
                        >
                            {product.tallas.map((talla) => (
                                <Dropdown.Item key={talla.talla} eventKey={talla.talla}>
                                    {talla.talla}
                                </Dropdown.Item>
                            ))}
                        </DropdownButton>

                        {talla ?
                            <InputGroup style={{ maxWidth: '120px' }}>
                                <Button variant="outline-secondary" onClick={() => setCantidad(cantidad - 1)} disabled={cantidad <= 0} >-</Button>
                                <FormControl
                                    value={cantidad}
                                    onChange={(e) => setCantidad(Math.min(stockDisponible, Math.max(1, parseInt(e.target.value)) || 1))}
                                    type="text"
                                    inputMode="numeric"
                                    pattern="[0-9]*"
                                    aria-label="Cantidad"
                                />
                                <Button
                                    variant="outline-secondary"
                                    onClick={(() => setCantidad(1 + cantidad))}
                                    disabled={cantidad >= stockDisponible}
                                >+</Button>
                            </InputGroup>
                            : null
                        }


                        {cart.some(item => item.zapatilla.modelo.nombre === product.modelo.nombre && item.talla === talla) ? (
                            <Button variant="success" className="w-100 mt-2" disabled>
                                Añadido al carrito
                            </Button>
                        ) : (
                            <Button variant="primary" className="w-100 mt-2" onClick={() => onAddToCart(product.id, talla, cantidad)}>
                                Añadir al carrito
                            </Button>
                        )}

                    </Card.Footer>
                    :
                    <Card.Footer className="text-center">
                        <Button variant="primary" onClick={() => navigate('/login')}>Login</Button>
                    </Card.Footer>
            }

        </Card>
    );
}