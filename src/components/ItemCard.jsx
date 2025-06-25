import { Button, Card } from "react-bootstrap";

const ItemCard = ({ pelicula }) => {
  return (
    <Card className="text-center">
      <Card.Header>{pelicula.nombre}</Card.Header>
      <Card.Body>
        <Card.Title>{pelicula.genero}</Card.Title>
        <Card.Text>{pelicula.descripcion}</Card.Text>
        <Button variant="danger">🗑</Button>
      </Card.Body>
    </Card>
  );
};

export default ItemCard;
