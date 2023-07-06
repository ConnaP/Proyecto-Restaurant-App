import React from "react";
import "./Reserve.css";
import { DatePicker, TimePicker, DateTimePicker } from "@material-ui/pickers";
import { useState } from "react";

export const Reserve = () => {
  const [dateSelected, changeDateSeleted] = useState(new Date());

  console.log(dateSelected);

  return (
    <>
      <div className="container-reserve">
        <div className="form">
          <h1 className="title">Reserva</h1>
          <div className="mb-3 form-input">
            <label for="exampleFormControlInput1" className="form-label">
              Fecha y Hora:
            </label>
            <DateTimePicker value={dateSelected} onChange={changeDateSeleted} />
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
        </div>
      </div>
    </>
  );
};

export default Reserve;
