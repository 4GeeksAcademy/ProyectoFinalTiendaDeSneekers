import { useState } from "react";
import { Card, Col, Row, Container, Button, Form,  } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/authContext";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login, setUserData } = useAuth()
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    const handleSubmit = async  (e) => {
        e.preventDefault()
        const res= await fetch(`${import.meta.env.VITE_BACKEND_URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password,
            }),
        })
        if (res.status === 200) {
            const data = await res.json();
            localStorage.setItem("token", data.token);
            login()
            setUserData(data.user)
            navigate("/")
        } else if (res.status === 401) {
            alert("Credenciales incorrectas")
            return
        } else if (res.status === 404) { 
            alert("Usuario no encontrado")
            return
        }
        
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
                <h1 className="mb-4 text-center">Login</h1>
                <p className="lead text-center mb-5">
                    Inicia sesion
                </p>

                <Row className="justify-content-center">
                    <Col md={6}>
                        <Card bg="dark" text="white" className="p-4 shadow-lg">
                            <Form onSubmit={ handleSubmit}>

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
                                        placeholder="Contraseña"
                                        onChange={(e) => setPassword(e.target.value)}
                                        value={password}
                                        required
                                    />
                                </Form.Group>

                                <Button variant="primary" type="submit" className="w-100">
                                    Enviar
                                </Button>
                            </Form>
                            <Card.Footer className=" mt-3">
                                <p className="text-white">¿No tienes cuenta? <Link to="/register" className="text-white">Regístrate aquí</Link></p>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}