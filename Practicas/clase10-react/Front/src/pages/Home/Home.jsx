import { Container, Button, Card, Col, Row } from "react-bootstrap";


const productos = [
    {
        id: 1,
        nombre: "Snack 1",
        descripcion: "Descripción del Snack 1",
        precio: 10.99,
        imagen: "url_imagen_1"
    },
    {
        id: 2,
        nombre: "Snack 2",
        descripcion: "Descripción del Snack 2",
        precio: 12.99,
        imagen: "url_imagen_2"
    }

];

export default function Home() {
    return (
        <Container className="bg-light mt-5 rounded">
            <div className="mb-5">
                <h1 className="text-dark display-4 fw-bold">Welcome to the Home Page</h1>
                <p className="lead text-muted">
                    Encuentra el snack perfecto para tu compañero de cuatro patas!
                </p>
                <Button variant="primary" size="lg">
                    Ver ofertas
                </Button>
            </div>

            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                This is a simple card with some text content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                This is a simple card with some text content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}


