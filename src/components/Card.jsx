import { Container, Row } from "react-bootstrap";
import ItemCard from "./ItemCard";

const Card = ({ peliculas, borrarPelicula }) => {
  return (
    <section className="container bg-warning my-4">
      <h2 className="text-center">Peliculas guardadas</h2>
      {peliculas.length === 0 && (
        <p className="text-center text-danger fw-bold fst-italic">
          No hay peliculas guardadas.
        </p>
      )}
      {peliculas.length !== 0 && (
        <Container>
          <Row>
            {peliculas.map((pelicula, indice) => (
              <ItemCard
                key={indice}
                pelicula={pelicula}
                borrarPelicula={borrarPelicula}
                indice={indice}
              ></ItemCard>
            ))}
          </Row>
        </Container>
      )}
    </section>
  );
};

export default Card;
