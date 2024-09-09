import { NavLink } from "react-router-dom";
import Image from "../logoEBAnegro.png";
export default function Header() {
  return (
    <header className="mb-3">
      {/* Image and text */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="d-flex">
          <NavLink to="/pruebaEbaDeploy/">
            <img src={Image} className="d-inline-block" alt="" />
          </NavLink>
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
          <NavLink to="/pruebaEbaDeploy/">
            <a
              className="nav-item nav-link pr-4"
              style={{ textDecoration: "none" }}
              href="/pruebaEbaDeploy/"
            >
              Inicio
            </a>
            </NavLink>
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
                <NavLink to="/pruebaEbaDeploy/servicios/agrimensura">
                  <a
                    className="dropdown-item"
                    style={{ textDecoration: "none" }}
                    href="/pruebaEbaDeploy/servicios/agrimensura"
                  >
                    Agrimensura
                  </a>
                </NavLink>
                <a className="dropdown-item disabled" href="/pruebaEbaDeploy/">
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
            <a
              className="nav-item nav-link pr-4 disabled"
              href="/pruebaEbaDeploy/"
            >
              Proyectos
            </a>
            <NavLink to="/pruebaEbaDeploy/contacto">
              <a
                className="nav-item nav-link pr-4"
                style={{ textDecoration: "none" }}
                href="/pruebaEbaDeploy/contacto"
              >
                Contacto
              </a>
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}
