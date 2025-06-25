import { Button, Card, Col } from "react-bootstrap";

const ItemCard = ({ pelicula, borrarPelicula, indice }) => {
  return (
    <Col sm={12} md={4} lg={3} className="d-flex">
      <Card className="text-center my-3">
        <Card.Header>
          <span className="fw-bold fs-5">{pelicula.inputNombre}</span>
        </Card.Header>
        <Card.Body>
          <Card.Title>
            <span className="text-success fw-bold fs-4">
              Género<br></br>
            </span>
            {pelicula.inputGenero}
          </Card.Title>
          <Card.Text>
            <span className="text-success fw-bold fs-4">
              Descripción<br></br>
            </span>
            {pelicula.inputDescripcion}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="danger" onClick={() => borrarPelicula(indice)}>
            🗑
          </Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default ItemCard;
