import { Form, Button } from "react-bootstrap";
import Card from "./Card";

const Formulario = () => {
  return (
    <>
      <section className="container bg-info my-4">
        <Form className="py-3">
          <Form.Text className="text-light text-muted">
            Los campos con un (<span className="text-danger">*</span>) son
            obligatorios
          </Form.Text>

          <Form.Group>
            <Form.Label className="mt-2">
              Nombre de la pelicula: <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control type="text" placeholder="Matrix" />
          </Form.Group>

          <Form.Group>
            <Form.Label className="mt-2">
              Descripcion de la pelicula: <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Neo tiene que luchar para salvar a los refugiados,etc."
            />
          </Form.Group>

          <Form.Group>
            <Form.Label className="mt-2">
              Genero de la pelicula: <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control type="text" placeholder="Ciencia ficción" />
          </Form.Group>

          <Button
            variant="dark"
            type="submit"
            className="mt-3 d-flex mx-auto sombra2"
          >
            Agregar nueva pelicula
          </Button>
        </Form>
      </section>
      <Card></Card>
    </>
  );
};

export default Formulario;
