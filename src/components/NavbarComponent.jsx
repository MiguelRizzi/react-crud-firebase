import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { AuthContext } from "../context/AuthContext";

function NavBarComponent() {
  const context = useContext(AuthContext);

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Navbar.Brand as={Link} to="/">
          My App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Inicio
            </Nav.Link>

            {!context.login && (
              <>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>

                <Nav.Link as={Link} to="/register">
                  Registrarse
                </Nav.Link>
              </>
            )}

            {context.login && (
              <>
                <NavDropdown title={context.userInfo.name} id="basic-nav-dropdown">
                  <Nav.Link onClick={context.handleLogout} as={Link} to="/">
                    Logout
                  </Nav.Link>
                </NavDropdown>
                

                <NavDropdown title="Productos" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/productos">
                    Ver Productos
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/productos/create">
                    Crear Productos
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavBarComponent;
