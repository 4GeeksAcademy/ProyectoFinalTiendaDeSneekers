import React, { useState } from "react";
import { use } from "react";
import { Container, Row, Col, Card, Form, Button, Image } from "react-bootstrap";
import { useAuth } from "../hooks/authContext";

export default function Perfil() {
    const { user, setUserData } = useAuth();
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/user`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify({
                name,
                email,
                password,
            }),
        });
         const data = await res.json();
        if (res.status === 200) {
            console.log(data);
            setUserData(data);
            alert("Cambios guardados");

        } else if (res.status === 401) {
            alert("No autorizado");
            return;
        } else if (res.status === 404) {
            alert("Usuario no encontrado");
            return;
        } else {
            alert("Error al guardar los cambios" + data.msg);
            return;
        }
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
                <h1 className="mb-4 text-center">Perfil de Usuario</h1>
                <p className="lead text-center mb-5">
                    Revisa y actualiza tu información personal.
                </p>

                <Row className="justify-content-center">
                    <Col md={6}>
                        <Card bg="dark" text="white" className="p-4 shadow-lg">
                            <Form onSubmit={(e) => handleSubmit(e)}>
                                <Form.Group className="mb-3" controlId="formName">
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder={user.name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder={user.email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formPassword">
                                    <Form.Label>Cambiar Contraseña</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Nueva contraseña"
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </Form.Group>

                                <Button variant="primary" type="submit" className="w-100">
                                    Guardar Cambios
                                </Button>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
