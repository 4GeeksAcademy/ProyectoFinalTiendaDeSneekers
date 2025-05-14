import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";
import { FaUser, FaHeart, FaShoppingBag } from "react-icons/fa";

const NavbarMenu = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img
            src="https://w7.pngwing.com/pngs/672/449/png-transparent-sneakers-shoe-graphy-others-white-logo-monochrome.png"
            alt="Logo"
            width="120"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="mr-auto">
            <Nav.Link href="#hombre">Hombre</Nav.Link>
            <Nav.Link href="#mujer">Mujer</Nav.Link>
            <Nav.Link href="#ninos">Niños</Nav.Link>
            <Nav.Link href="#novedades">Novedades</Nav.Link>
            <Nav.Link href="#ofertas">Ofertas</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="text"
              placeholder="Buscar productos, marcas..."
              className="mr-sm-2"
            />
            <Button variant="outline-danger">Buscar</Button>
          </Form>
          <Nav>
            <Nav.Link href="#account">
              <FaUser size={20} />
            </Nav.Link>
            <Nav.Link href="#favorites">
              <FaHeart size={20} />
            </Nav.Link>
            <Nav.Link href="#cart">
              <FaShoppingBag size={20} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarMenu;
