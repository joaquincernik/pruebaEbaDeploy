import React from 'react';
export default function Home(){
    return (
    <div>
        <div className="bg-image d-flex flex-column align-items-center justify-content-center">
    <h1 className="p-4 text-center text-white">ESTUDIO DE INGENIERIA CIVIL</h1>
    <h2 className="p-4 text-center text-white">
      Somos un equipo de profesionales apasionados por la creación de soluciones
      innovadoras y sostenibles para los desafíos de ingeniería que enfrentan
      nuestras comunidades.
    </h2>
  </div>
  <div className="container-md dedicamos">
    <h1 className="text-center pb-5" style={{ fontWeight: 300 }}>
      ¿A que nos dedicamos?
    </h1>
    <div className="row">
      <div className="col-md-4 card ">
        <div className="card-body d-flex flex-column justify-content-center align-items-center">
          <i
            className="card-title fas fa-solid fa-ruler text-info"
            style={{ fontSize: 30 }}
          />
          <a
            className="text-dark"
            href="/servicios/agrimensura"
            style={{ textDecoration: "none" }}
          >
            <h2 className="card-title text-center">Agrimensura</h2>
          </a>
          <p className="text-muted pt-2">
            garantiza que la información sobre la tierra sea precisa y confiable
          </p>
        </div>
      </div>
      <div className="col-md-4 card">
        <div className="card-body d-flex flex-column justify-content-center align-items-center">
          <i
            className="card-title fas fa-solid fa-water text-info"
            style={{ fontSize: 30 }}
          />
          <h2 className="card-title text-center">Hidrologia e hidraulica</h2>
          <p className="text-muted pt-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <div className="col-md-4 card">
        <div className="card-body d-flex flex-column justify-content-center align-items-center">
          <i
            className="card-title fas fa-solid fa-globe text-info"
            style={{ fontSize: 30 }}
          />
          <h2 className="card-title text-center">Topografia</h2>
          <p className="text-muted pt-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <div className="col-md-4 card">
        <div className="card-body d-flex flex-column justify-content-center align-items-center">
          <i
            className="card-title fas fa-solid fa-map text-info"
            style={{ fontSize: 30 }}
          />
          <h2 className="card-title text-center">Infraestructura</h2>
          <p className="text-muted pt-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <div className="col-md-4 card">
        <div className="card-body d-flex flex-column justify-content-center align-items-center">
          <i
            className="card-title fas fa-solid fa-gavel text-info"
            style={{ fontSize: 30 }}
          />
          <h2 className="card-title text-center">Ingeniería Ambiental</h2>
          <p className="text-muted pt-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <div className="col-md-4 card">
        <div className="card-body d-flex flex-column justify-content-center align-items-center">
          <i
            className="card-title fas fa-solid fa-tractor text-info"
            style={{ fontSize: 30 }}
          />
          <h2 className="card-title text-center">
            Ejecucion y direccion de obras
          </h2>
          <p className="text-muted pt-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div className="bg-image3 d-flex flex-column align-items-center justify-content-center">
    <h1 className="p-4 text-center text-white">POR QUE ELEGIRNOS?</h1>
    <h2 className="p-4 text-center text-white">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
      quisquam ducimus quo minus similique error voluptates alias facere
      molestiae, cupiditate, dolor ut modi eaque voluptatibus harum iure
      veritatis natus repellat.
    </h2>
  </div>
  <div className="card">
    <div className="card-body">
      <h1 className="card-title text-center pb-5">
        VISITA NUESTRAS SUCURSALES
      </h1>
      <div className="row">
        <div className="col-md-6 card ">
          <div className="card-body d-flex flex-column justify-content-center align-items-center">
            <i
              className="card-title fas fa-solid fa-house-user text-info"
              style={{ fontSize: 30 }}
            />
            <h2 className="card-title text-center">
              San Luis 1516 - Of. 211, Villa María (Cba.)
            </h2>
          </div>
        </div>
        <div className="col-md-6 card ">
          <div className="card-body d-flex flex-column justify-content-center align-items-center">
            <i
              className="card-title fas fa-solid fa-house-user text-danger"
              style={{ fontSize: 30 }}
            />
            <h2 className="card-title text-center">
              Belgrano 505, Justiniano Posse (Cba.)
            </h2>
          </div>
        </div>
        <div className="col-md-4 card">
          <div className="card-body d-flex flex-column justify-content-center align-items-center">
            <i
              style={{ fontSize: 30 }}
              className="fa fa-regular fa-envelope text-info p-3"
            />
            <h2 className="text-center">Envianos un mail</h2>
          </div>
        </div>
        <div className="col-md-4 card ">
          <div className="card-body d-flex flex-column justify-content-center align-items-center">
            <i
              style={{ fontSize: 30 }}
              className="fa fa-brands fa-instagram text-info p-3"
            />
            <h2 className="text-center">Seguinos en instagram</h2>
          </div>
        </div>
        <div className="col-md-4 card ">
          <div className="card-body d-flex flex-column justify-content-center align-items-center">
            <i
              style={{ fontSize: 30 }}
              className="fa fa-brands fa-whatsapp text-info p-3"
            />
            <h2 className="text-center">Envianos un whatsapp</h2>
          </div>
        </div>
      </div>
    </div>
  </div>

    </div>
);

}