import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

function HomePage() {
    return (
        <div>
            <h1>Mi Tienda Online Home</h1>
            <p>Bienvenidos a la página principal de Mi Tienda Online.</p>
            <h2>Quienes Somos?</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, adipisci! Recusandae, quaerat, harum asperiores soluta optio sapiente, voluptatum laudantium ipsa repudiandae eius vitae odio dignissimos dicta voluptas libero quibusdam quis.</p>
            <a href=""></a>
            <li>
                <Button variant="outline-primary" as={Link} to="/productos">Ir a ver nuestros productos</Button>
            </li>
        </div>
    )
}

export default HomePage


