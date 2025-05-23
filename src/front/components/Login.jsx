import { useState } from "react";
import { Card, Col, Row, Container, Button, Form,  } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    
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
                <h1 className="mb-4 text-center">Login</h1>
                <p className="lead text-center mb-5">
                    Inicia sesion
                </p>

                <Row className="justify-content-center">
                    <Col md={6}>
                        <Card bg="dark" text="white" className="p-4 shadow-lg">
                            <Form>

                                <Form.Group className="mb-3" controlId="formEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="juan.perez@example.com" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formPassword">
                                    <Form.Label>Cambiar Contraseña</Form.Label>
                                    <Form.Control type="password" placeholder="Nueva contraseña" />
                                </Form.Group>

                                <Button variant="primary" type="submit" className="w-100">
                                    Guardar Cambios
                                </Button>
                            </Form>
                            <Card.Footer className="text-center mt-3">
                                <p className="text-muted">¿No tienes cuenta? <Link to="/register" className="text-white">Regístrate aquí</Link></p>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}