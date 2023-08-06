import { useEffect, useState } from "react";
import ProductoComponent from "../components/ProductoComponent";
import { getAll } from "../services/productosServices";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";


function ProductosPage() {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const request = async () => {
        try {
            const data = await getAll();
            setProductos(data.docs);
            setLoading(false);
        } catch (e) {
            console.log(e);
        }
        };
        request();
    }, []);
    if (loading) {
        return <div>Cargando...</div>;
    } else {
        return (
            <Container className="text-center p-4">
                <h1 className="display-5 mb-3">Productos</h1>
                <Row className="text-center">
                    {productos.map((producto) => (
                    <ProductoComponent
                        key={producto.id} {...producto.data()} id={producto.id}/>
                    ))}
                </Row>
            </Container>
        );
    }
}

export default ProductosPage;
