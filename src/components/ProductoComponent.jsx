import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";


const styles = {
    card: {
      marginBottom: "10px",
      width: "18rem",
    },
  };

function ProductoComponent({id, title, thumbnail, price}) {
    return (
        <Col xs={12} sm={6} lg={4} xxl={3}>
            <Card style={styles.card}>
                <Card.Img variant="top" src={thumbnail} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>Precio: ${price}</Card.Text>
    
                    <Button variant="primary" as={Link} to={`/productos/detail/${id}`}>Detalle</Button>
                    <Button variant="success" as={Link} to={`/productos/update/${id}`}>Actualizar</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ProductoComponent;


