import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useAuthContext } from '../context/AuthContext';
import toast from 'react-hot-toast';

function NavBarComponent() {
  const context = useAuthContext();

  return (
    <Navbar expand="lg" variant="dark" bg="dark">
      <Container>
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
              <NavDropdown
                title={context.userInfo.name}
                id="basic-nav-dropdown"
                className="text-light"
              >
                <NavDropdown.Item
                  onClick={() => {
                    context.handleLogout();
                    toast.success('Se cerró la sesión correctamente');
                  }}
                  as={Link} to="/"
                >
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            )}

            <NavDropdown title="Productos" id="basic-nav-dropdown" className="text-light">
              <NavDropdown.Item as={Link} to="/productos">
                Ver Productos
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/productos/create">
                Crear Productos
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;
