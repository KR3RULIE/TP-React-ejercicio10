import "bootstrap/dist/css/bootstrap.min.css";
import Formulario from "./components/Formulario";

function App() {
  return (
    <>
      <main>
        <h1 className="text-center text-info sombra py-3">
          Gestor de peliculas
        </h1>
        <Formulario></Formulario>
      </main>
      <footer className="text-center text-light bg-black py-1 sombra">
        <p>
          By{" "}
          <a
            href="https://github.com/KR3RULIE"
            target="blank"
            className="text-decoration-none text-danger"
          >
            KR3RULIE
          </a>
        </p>
        <p>&copy; Todos los derechos reservados</p>
      </footer>
    </>
  );
}

export default App;
