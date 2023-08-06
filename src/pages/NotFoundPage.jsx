import { Container } from "react-bootstrap";

function NotFoundPage() {
    return (
        <Container className="text-center p-4">
            <h1 className="display-5 mb-3">Error 404</h1>
            <p className="lead">Página no encontrada.</p>
        </Container>
    );
}

export default NotFoundPage