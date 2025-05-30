import { useState } from "react"
import { Button, Card, Col, Container, Form, Modal, Row } from "react-bootstrap"
import useGlobalReducer from "../hooks/useGlobalReducer"

export default function ModalProduct({ marcaProduct, product, show, onHide }) {
    const [marca, setMarca] = useState(marcaProduct || "")
    const [modelo, setModelo] = useState(product?.modelo?.nombre || "")
    const [descripcion, setDescripcion] = useState(product?.modelo?.descripcion || "")
    const [img, setImg] = useState(product?.modelo?.img || "")
    const [precio, setPrecio] = useState(product?.modelo?.precio || 0)
    const [tallas, setTallas] = useState(product?.tallas?.join(",") || "")
    const [genero, setGenero] = useState(product?.modelo?.genero || "man")
    const [oferta, setOferta] = useState(product?.modelo?.oferta || false)
    const [error, setError] = useState(null)
    const { store, dispatch } = useGlobalReducer();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = `${import.meta.env.VITE_BACKEND_URL}${marcaProduct ? `zapatillas/${product.id}` : "zapatillas"
            } `;
        const res = await fetch(url, {
            method: `${marcaProduct ? "PUT" : "POST"}`,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify({
                marca,
                nombre: modelo,
                descripcion,
                img,
                precio: parseInt(precio),
                genero,
                oferta,
                talla: tallas.split(",").map(talla => parseInt(talla.trim())),
            }),
        });
        const zapa = await res.json();

        if (res.status === 201) {
            alert("Producto creado correctamente");
            const newZapa = {
                marca: marca,
                zapatilla: zapa
            }
            dispatch({ type: "addProduct", payload: newZapa });

        } else if (res.status === 203) {
            dispatch({
                type: "updateProduct",
                payload: {
                    ...zapa,
                    marca: marcaProduct
                }
            });

        } else if (res.status === 400) {
            setError("Error al crear el producto. Verifica los datos ingresados.");
        } else if (res.status === 409) {
            alert("Ya existe un producto con el mismo nombre y marca.");
        }
        else {
            setError("Error inesperado. Inténtalo de nuevo más tarde.");
        }
        setDescripcion("");
        setImg("");
        setMarca("");
        setModelo("");
        setPrecio(0);
        setTallas("");
        setGenero("hombre");
        onHide();
    }
    return (
        <>
            <Modal show={show} onHide={onHide} size="lg">
                <Modal.Body className="p-0">
                    <Container fluid className="p-0 ">
                        <Row className="g-0">
                            <Col >

                                <Card bg="dark" text="white" className="p-4 shadow-lg">
                                    <Form className="w-100" onSubmit={(e) => handleSubmit(e)}>
                                        <Form.Group className="mb-3" controlId="marca">
                                            <Form.Label>Marca</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder=""
                                                onChange={(e) => setMarca(e.target.value)}
                                                value={marca}
                                                required
                                            />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="modelo">
                                            <Form.Label>Modelo</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder=""
                                                onChange={(e) => setModelo(e.target.value)}
                                                value={modelo}
                                                required
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="descripcion">
                                            <Form.Label>Descripcion</Form.Label>
                                            <Form.Control
                                                as="textarea"
                                                placeholder=""
                                                onChange={(e) => setDescripcion(e.target.value)}
                                                value={descripcion}
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="img">
                                            <Form.Label>Img</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="url"
                                                onChange={(e) => setImg(e.target.value)}
                                                value={img}
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="precio">
                                            <Form.Label>Precio</Form.Label>
                                            <Form.Control
                                                type="number"
                                                placeholder="0"
                                                onChange={(e) => setPrecio(e.target.value)}
                                                value={precio}
                                                required
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="tallas">
                                            <Form.Label>Tallas</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="36,37,38,39,40,41,42,43,44,45"
                                                onChange={(e) => {
                                                    const value = e.target.value;
                                                    if (/^[0-9,]*$/.test(value)) {
                                                        setTallas(value); // o setTallas(value), según tu lógica
                                                    }
                                                }}
                                                value={tallas}
                                                required
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="Genero">
                                            <Form.Label>Genero</Form.Label>
                                            <Form.Select
                                                value={genero}
                                                onChange={(e) => setGenero(e.target.value)}
                                            >
                                                <option value="man">Hombre</option>
                                                <option value="woman">Mujer</option>
                                                <option value="children">Niño</option>
                                            </Form.Select>

                                        </Form.Group>
                                        <Form.Group className="mb-3" conmtrolId="oferta">
                                            <Form.Check
                                                type="switch"
                                                label="Poner en Oferta"
                                                checked={oferta || false}
                                                onChange={(e) => setOferta(e.target.checked)}
                                            />
                                        </Form.Group>
                                        <Button variant="primary" type="submit" className="w-100">
                                            {marcaProduct ? "Editar Producto" : "Crear Producto"}
                                        </Button>
                                    </Form>
                                    <Card.Img
                                        variant="top"
                                        src={img}
                                        alt={modelo}
                                    />
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal>
        </>
    )

}