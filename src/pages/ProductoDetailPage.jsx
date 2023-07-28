import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getById } from "../services/productosServices";
import { Link } from "react-router-dom";

//Component tipo funcion
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
      
      <div className="">
        <h1>{producto.title}</h1>
        <img src={producto.thumbnail} alt={producto.title} />
        <p>Precio: ${producto.price}</p>
        <p>{producto.description}</p>
        <li>
          <Link to="/Productos">Volver a productos</Link>
        </li>
      </div>
    );
  }
}

export default ProductoDetailPage;
