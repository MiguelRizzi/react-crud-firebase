import { useEffect, useState } from "react";
import ProductoComponent from "../components/ProductoComponent";
import { getAll } from "../services/productosServices";
import Row from "react-bootstrap/Row";


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
            <Row>
                <h1>Productos</h1>
                {productos.map((producto) => (
                <ProductoComponent
                    key={producto.id} {...producto.data()} id={producto.id}/>
                ))}
            </Row>
        );
    }
}

export default ProductosPage;
