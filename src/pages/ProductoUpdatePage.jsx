import { Container } from "react-bootstrap";
import ProductoFormComponent from "../components/ProductoFormComponent.jsx";
function ProductoUpdatePage() {
  return (
    <Container className="text-center p-4">
      <h1 className="display-5 mb-3">Actualizar producto</h1>
      <ProductoFormComponent />
    </Container>)
}

export default ProductoUpdatePage;
