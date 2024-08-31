import Image from "../logoEBAnegro.png";
export default function Header() {
  return (
    <header className="mb-3">
  {/* Image and text */}
  <nav className="navbar navbar-expand-lg navbar-light bg-white">
    <img
      src={Image}
      width="350px"
      className="d-inline-block"
      alt=""
    />
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-item nav-link pr-4 pl-5" href="/pruebaEbaDeploy/">
          Inicio
        </a>
        <div className="dropdown show">
          <a
            className="btn btn-white dropdown-toggle nav-item nav-link"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Nuestros servicios
          </a>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <a className="dropdown-item" href="/pruebaEbaDeploy/servicios/agrimensura">
              Agrimensura
            </a>

            
            <a className="dropdown-item" >
            Hidrologia e hidraulica
            </a>
            <a className="dropdown-item" href="#">
              Topografia
            </a>
            <a className="dropdown-item" href="#">
              Infraestructura
            </a>
            <a className="dropdown-item" href="#">
              Ingenieria ambiental
            </a>
            <a className="dropdown-item" href="#">
              Ejecucion y direccion de obras
            </a>
          </div>
        </div>
        <a className="nav-item nav-link pr-4 " href="#">
          Proyectos
        </a>
        <a className="nav-item nav-link pr-4  " href="/equipo">
          Contacto
        </a>
      </div>
    </div>
  </nav>
</header>
      );
}
