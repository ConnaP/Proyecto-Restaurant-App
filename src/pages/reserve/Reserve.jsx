import React from "react";
import "./Reserve.css";
import { DatePicker, TimePicker, DateTimePicker } from "@material-ui/pickers";
import { useState } from "react";
import { useParams } from "react-router-dom";

export const Reserve = ({user}) => {
  const [dateSelected, changeDateSeleted] = useState(new Date());

  console.log('user', user);

  return (
    <>
      <div className="container-reserve">

      {user ? (
            <div className="navbar-collapse ml-auto">
              <div className="navbar-nav ml-auto">
                <div className="d-flex align-items-center">
                  <img
                    src={user.photo}
                    alt={user.name}
                    className="img-fluid rounded-circle avatar "
                  />
                  <span className="nav-item nav-link text-info">
                    {user.name}
                  </span>
                </div>
                <button
                  className="btn btn-outline-secondary btn-sm"
                  onClick={onLogout}
                >
                  Cerrar sesión
                </button>
              </div>
            </div>
          ) : (
            <div className="navbar-collapse ml-auto">
              {user}
            </div>
          )}
        {/* <div className="form card">
          <h1 className="title">Reserva</h1>
          <div className="mb-3 form-input">
            <label for="exampleFormControlInput1" className="form-label">
              Fecha y Hora:
            </label>
            <DateTimePicker value={dateSelected} onChange={changeDateSeleted} />
          </div>
          <div className="form-input">
          <select className="form-select" aria-label="Default select example">
            <option selected>Mesa</option>
            <option value="1">Para 2 personas</option>
            <option value="2">Para 4 personas</option>
            <option value="3">Para 6 personas</option>
          </select>
          </div>
          <div className="mb-3 form-input">
            <label for="exampleFormControlInput1" className="form-label">
              Nombre:
            </label>
            <input
              type="name"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Pedro Venegas"
            />
          </div>
          <div className="mb-3 form-input">
            <label for="exampleFormControlInput1" className="form-label">
              Correo electrónico:
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="nombre@ejemplo.com"
            />
          </div>
          <div className="mb-3 form-input">
            <label for="exampleFormControlInput1" className="form-label">
              Teléfono:
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="56912341234"
            />
          </div>
          <div className="mb-3 form-input">
            <button
              type="button"
              className="btn btn-outline-secondary btn-style"
            >
              Realizar reserva
            </button>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Reserve;
