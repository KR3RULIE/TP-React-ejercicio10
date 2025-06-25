import { Form, Button } from "react-bootstrap";
import Card from "./Card";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

const Formulario = () => {
  const peliculasLocalstorage =
    JSON.parse(localStorage.getItem("arrayPeliculas")) || [];
  const [peliculas, setPeliculas] = useState(peliculasLocalstorage);

  useEffect(() => {
    localStorage.setItem("arrayPeliculas", JSON.stringify(peliculas));
  }, [peliculas]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const agregarPeliculas = (data) => {
    console.log(data);
    setPeliculas([...peliculas, data]);
    reset();
  };

  const borrarPelicula = (indiceDeLaPeliculaABorrar) => {
    const peliculasFiltradas = peliculas.filter(
      (pelicula, index) => index !== indiceDeLaPeliculaABorrar
    );
    setPeliculas(peliculasFiltradas);
  };

  return (
    <>
      <section className="container bg-info my-4">
        <Form className="py-3" onSubmit={handleSubmit(agregarPeliculas)}>
          <Form.Text className="text-light text-muted">
            Los campos con un (<span className="text-danger">*</span>) son
            obligatorios
          </Form.Text>

          <Form.Group>
            <Form.Label className="mt-2">
              Nombre de la pelicula: <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Matrix"
              onChange={(e) => setNombre(e.target.value)}
              {...register("inputNombre", {
                required: "Este campo es requerido.",
                minLength: {
                  value: 2,
                  message: "Este campo debe tener como minimo 2 caracteres",
                },
                maxLength: {
                  value: 255,
                  message: "Este campo debe tener como maximo 255 caracteres",
                },
              })}
            />
          </Form.Group>
          <Form.Text className="text-danger fw-bold fst-italic">
            {errors.inputNombre?.message}
          </Form.Text>

          <Form.Group>
            <Form.Label className="mt-2">
              Descripcion de la pelicula: <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Neo tiene que luchar para salvar a los refugiados,etc."
              onChange={(e) => setDescripcion(e.target.value)}
              {...register("inputDescripcion", {
                required: "Este campo es requerido.",
                minLength: {
                  value: 2,
                  message: "Este campo debe tener como minimo 2 caracteres",
                },
                maxLength: {
                  value: 255,
                  message: "Este campo debe tener como maximo 255 caracteres",
                },
              })}
            />
          </Form.Group>
          <Form.Text className="text-danger fw-bold fst-italic">
            {errors.inputDescripcion?.message}
          </Form.Text>

          <Form.Group>
            <Form.Label className="mt-2">
              Genero de la pelicula: <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Ciencia ficción"
              onChange={(e) => setGenero(e.target.value)}
              {...register("inputGenero", {
                required: "Este campo es requerido.",
                minLength: {
                  value: 2,
                  message: "Este campo debe tener como minimo 2 caracteres",
                },
                maxLength: {
                  value: 255,
                  message: "Este campo debe tener como maximo 255 caracteres",
                },
              })}
            />
          </Form.Group>
          <Form.Text className="text-danger fw-bold fst-italic">
            {errors.inputGenero?.message}
          </Form.Text>

          <Button
            variant="dark"
            type="submit"
            className="mt-3 d-flex mx-auto sombra2"
          >
            Agregar nueva pelicula
          </Button>
        </Form>
      </section>
      <Card peliculas={peliculas} borrarPelicula={borrarPelicula}></Card>
    </>
  );
};

export default Formulario;
