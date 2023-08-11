import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { useAuthContext } from "../context/AuthContext";

const styles = {
    card: {
      marginBottom: "15px",
      width: "18rem",
    },
    img:{
        height: "200px",
    }
  };

function ProductoComponent({id, title, thumbnail, price}) {
    const { login } = useAuthContext();
    return (
        <Col xs={12} sm={6} lg={4} xxl={3}>
            <Card style={styles.card}>
                <Card.Img variant="top" src={thumbnail} className="object-fit-cover" style={styles.img}/>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>Precio: ${price}</Card.Text>
                    <div className="d-flex gap-4 justify-content-center">
                    <Button variant="primary" as={Link} to={`/productos/detail/${id}`}>Detalle</Button>
                    {login && (
                    <Button variant="success" as={Link} to={`/productos/update/${id}`}>Actualizar</Button>
                    )}
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ProductoComponent;


