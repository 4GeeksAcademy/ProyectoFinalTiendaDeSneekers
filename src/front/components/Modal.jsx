import { useState } from "react"
import { Button, Card, Col, Container, Form, Modal, Row } from "react-bootstrap"
import useGlobalReducer from "../hooks/useGlobalReducer"

export default function ModalProduct({ show, onHide }) {
    const [marca, setMarca] = useState("")
    const [modelo, setModelo] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [img, setImg] = useState("")
    const [precio, setPrecio] = useState(0)
    const [tallas, setTallas] = useState("")
    const [genero, setGenero] = useState("man")
    const [error, setError] = useState(null)
    const { store, dispatch } = useGlobalReducer();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}zapatillas`, {
            method: "POST",
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
                oferta: false,
                talla: tallas.split(",").map(talla => parseInt(talla.trim())),
            }),
        });
        if (res.status === 201) {
            alert("Producto creado correctamente");
            const zapa = await res.json();
            const newZapa = {
                marca: marca,
                zapatilla: zapa
            }
            console.log(newZapa)
            dispatch({ type: "addProduct", payload: newZapa });
            setDescripcion("");
            setImg("");
            setMarca("");
            setModelo("");
            setPrecio(0);
            setTallas("");
            setGenero("hombre");
            onHide();
        } else if (res.status === 400) {
            setError("Error al crear el producto. Verifica los datos ingresados.");
        } else {
            setError("Error inesperado. Inténtalo de nuevo más tarde.");
        }
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
                                            />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="modelo">
                                            <Form.Label>Modelo</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder=""
                                                onChange={(e) => setModelo(e.target.value)}
                                                value={modelo}
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
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="tallas">
                                            <Form.Label>Tallas</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="36,37,38,39,40,41,42,43,44,45"
                                                onChange={(e) => setTallas(e.target.value)}
                                                value={tallas}
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
                                        <Button variant="primary" type="submit" className="w-100">
                                            Guardar Cambios
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