import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const styles = {
  bgImagen: {
    backgroundImage: "url('https://mdbcdn.b-cdn.net/img/new/slides/041.webp')",
    height: '400px',
  },
  fondo: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    width: '100%',
    height: '100%',
  },
};

const HomePage = () => {
  return (
    <div>
      <Container fluid className="p-0 text-center" style={styles.bgImagen}>
        <div className="mask" style={styles.fondo}>
          <Container className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="display-3 mb-3">Mi Tienda Online Home</h1>
              <p className="lead">
                Bienvenidos a la página principal de Mi Tienda Online.
              </p>
              <Button variant="primary" as={Link} to="/productos">
                Ir a ver nuestros productos
              </Button>
            </div>
          </Container>
        </div>
      </Container>

      <Container className="text-center m-5 p-4">
        <h2 className="display-5 mb-3">¿Quienes Somos?</h2>
        <p className="lead">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
          adipisci! Recusandae, quaerat, harum asperiores soluta optio sapiente,
          voluptatum laudantium ipsa repudiandae eius vitae odio dignissimos dicta
          voluptas libero quibusdam quis.
        </p>
      </Container>
    </div>
  );
};

export default HomePage;
