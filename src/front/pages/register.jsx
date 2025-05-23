import { useState } from "react";
import { Card, Col, Row, Container, Button, Form, } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/authContext";

export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login, setUserData } = useAuth()
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`${import.meta.env.VITE_BACKEND_URL}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                email,
                password,
            }),
        })
            .then((response) => {
                if (response.status === 400) {
                    alert("Error en el servidor")
                    return
                }
                return response.json();
            })
            .then((data) => {
                console.log(data);
                alert("Usuario creado correctamente")
                navigate("/")
            })
        setEmail("")
        setPassword("")
    }
    return (
        <div
            style={{
                minHeight: "90vh",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                paddingTop: "3rem",
                paddingBottom: "3rem",
                color: "white",
            }}
        >
            <Container>
                <h1 className="mb-4 text-center">Registro</h1>
                <p className="lead text-center mb-5">
                    introduce tus datos
                </p>

                <Row className="justify-content-center">
                    <Col md={6}>
                        <Card bg="dark" text="white" className="p-4 shadow-lg">
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="formName">
                                    <Form.Label>Nombre Completo</Form.Label> 
                                    <Form.Control
                                        type="text"
                                        placeholder="Juan Pérez"
                                        onChange={(e) => setName(e.target.value)}
                                        value={name}
                                        required
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="juan.perez@example.com"
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formPassword">
                                    <Form.Label>Contraseña</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Nueva contraseña"
                                        onChange={(e) => setPassword(e.target.value)}
                                        value={password}
                                        required
                                    />
                                </Form.Group>

                                <Button variant="primary" type="submit" className="w-100">
                                    Enviar
                                </Button>
                            </Form>
                           
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}