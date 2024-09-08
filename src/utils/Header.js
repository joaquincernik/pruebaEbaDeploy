import { Link } from "react-router-dom";
import Image from "../logoEBAnegro.png";
export default function Header() {
  return (
    <header className="mb-3">
      {/* Image and text */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="d-flex">
          <Link to="/pruebaEbaDeploy/">
            <img src={Image} className="d-inline-block" alt="" />
          </Link>
          <button
            class="navbar-toggler border border-white my-5"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav mr-auto">
            <a className="nav-item nav-link pr-4" href="/pruebaEbaDeploy/">
              Inicio
            </a>
            <div className="nav-item dropdown show">
              <a
                className="btn btn-white dropdown-toggle text-muted nav-item nav-link pr-4"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Nuestros servicios
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <Link to="/pruebaEbaDeploy/servicios/agrimensura">
                  <a
                    className="dropdown-item"
                    style={{ textDecoration: "none" }}
                    href="/pruebaEbaDeploy/servicios/agrimensura"
                  >
                    Agrimensura
                  </a>
                  </Link>
                <a className="dropdown-item disabled" href="/pruebaEbaDeploy/" >
                  Hidrologia e hidraulica
                </a>
                <a className="dropdown-item disabled" href="/pruebaEbaDeploy/">
                  Topografia
                </a>
                <a className="dropdown-item disabled" href="/pruebaEbaDeploy/">
                  Infraestructura
                </a>
                <a className="dropdown-item disabled" href="/pruebaEbaDeploy/">
                  Ingenieria ambiental
                </a>
                <a className="dropdown-item disabled" href="/pruebaEbaDeploy/">
                  Ejecucion y direccion de obras
                </a>
              </div>
            </div>
            <a className="nav-item nav-link pr-4 disabled" href="/pruebaEbaDeploy/">
              Proyectos
            </a>
              <a
                className="nav-item nav-link pr-4"
                style={{ textDecoration: "none" }}
                href="/pruebaEbaDeploy/contacto"
              >
                Contacto
              </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
