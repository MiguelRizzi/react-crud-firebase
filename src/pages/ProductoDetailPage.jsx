import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getById } from "../services/productosServices";
import { Container, Card } from "react-bootstrap";

function ProductoDetailPage() {
  const { id } = useParams();
  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const request = async () => {
      try {
        const response = await getById(id);
        setProducto(response.data());
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    request();
  }, [id]);

  if (loading) {
    return <div>Cargando ...</div>;
  } else {
    return (
      <Container className="text-center p-4">
        <Card className="shadow-lg" style={{ padding: "1rem" }}>
          <Card.Body>
            <Card.Title className="display-5 mb-3">{producto.title}</Card.Title>
            <hr className="my-4" />
            <Card.Img src={producto.thumbnail} alt={producto.title} style={{ maxWidth: "600px" }} />
            <hr className="my-4" />
            <Card.Text>
              <strong>Precio:</strong> ${producto.price}
            </Card.Text>
            <Card.Text>
              <strong>SKU:</strong> {producto.sku}
            </Card.Text>
            <Card.Text>{producto.description}</Card.Text>
          </Card.Body>
        </Card>
        <Link to="/Productos" className="mt-4">
          Volver a productos
        </Link>
      </Container>
    );
  }
}

export default ProductoDetailPage;
