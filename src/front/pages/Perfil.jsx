import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

export default function Perfil() {
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
                            <Form>
                                <Form.Group className="mb-3" controlId="formName">
                                    <Form.Label>Nombre Completo</Form.Label>
                                    <Form.Control type="text" placeholder="Juan Pérez" />
                                </Form.Group>

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
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
