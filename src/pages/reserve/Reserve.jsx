import React from "react";
import "./Reserve.css";
import { DateTimePicker } from "@material-ui/pickers";
import { useState } from "react";

export const Reserve = ({ user }) => {
  const [sessionStorageData, setSessionStorageData] = useState([]);

  const [formData, setFormData] = useState({
    table: "",
    phone: "",
    date: new Date(),
  });

  const handleChange = (event) => {
    if (event?.target?.name) {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
      });
    } else {
      setFormData({
        ...formData,
        date: new Date(event),
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendData(formData);
  };

  const getHour = (newDate) => {
    const hora = newDate.getHours();
    const minutos = newDate.getMinutes();
    const segundos = newDate.getSeconds();

    return `${hora}:${minutos}:${segundos}`;
  };

  const getDate = (newDate) => {
    const dia = newDate.getDate();
    const mes = newDate.getMonth() + 1;
    const anio = newDate.getFullYear();

    return `${dia}/${mes}/${anio}`;
  };

  const getSessionStorage = () => {
    const reserves = sessionStorage.getItem("reserves") || null;

    if (reserves) {
      return JSON.parse(reserves);
    }

    return reserves;
  };

  const sendData = (data) => {
    const { table, phone, date } = data;

    if (table.trim() != "" && phone.trim() != "") {
      const reserve = {
        name: user.name,
        email: user.email,
        table: table,
        phone: phone,
        fecha: getDate(date),
        hora: getHour(date),
      };

      const reserveSessionStorage = getSessionStorage();

      let reserves;

      if (reserveSessionStorage) {
        reserves = [...reserveSessionStorage, reserve];
      }

      if (!reserveSessionStorage) {
        reserves = [reserve];
      }

      setSessionStorageData(reserves);

      sessionStorage.setItem("reserves", JSON.stringify(reserves));
      setFormData({
        table: "",
        phone: "",
        date: new Date(),
      });

      return alert(
        `Estimad@ ${user.name}!! se ingresaró la reserva exitosamente!`
      );
    }

    alert("Existen campos sin completar");
  };

  return (
    <>
      {user ? (
        <form onSubmit={handleSubmit} className="container-reserve">
          <div className="form card">
            <h1 className="title">Reserva</h1>
            <div className="mb-3 form-input">
              <label for="exampleFormControlInput1" className="form-label">
                Fecha y Hora:
              </label>
              <DateTimePicker
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
            </div>
            <div className="form-input">
              <label for="exampleFormControlInput1" className="form-label">
                Mesa:
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                id="table"
                name="table"
                value={formData.table}
                onChange={handleChange}
              >
                <option value="2" selected>
                  Seleccione cantidad personas
                </option>
                <option value="2">Para 2 personas</option>
                <option value="4">Para 4 personas</option>
                <option value="6">Para 6 personas</option>
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
                value={user.name}
                disabled={true}
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
                value={user.email}
                disabled={true}
              />
            </div>
            <div className="mb-3 form-input">
              <label for="exampleFormControlInput1" className="form-label">
                Teléfono:
              </label>
              <input
                type="number"
                className="form-control"
                id="phone"
                name="phone"
                placeholder="56912341234"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3 form-input">
              <button
                className="btn btn-outline-secondary btn-style"
                type="submit"
              >
                Realizar reserva
              </button>
            </div>
          </div>
        </form>
      ) : (
        <>
          <p className="sub-title">Debes iniciar sesión</p>
        </>
      )}
      {/* </> */}
      <div className="container-table">
        {user && sessionStorageData.length > 0 ? (
          <>
            <p className="sub-title">Reservas</p>
            <div class="table-responsive">
              <table class="table table-dark table-hover table-sm">
                <thead>
                  <tr>
                    <th scope="col">N°</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Email</th>
                    <th scope="col">Mesa para</th>
                    <th scope="col">Fecha</th>
                    <th scope="col">Hora</th>
                  </tr>
                </thead>
                <tbody>
                  {sessionStorageData.map((dato, i) => (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{dato.name}</td>
                      <td>{dato.email}</td>
                      <td>{dato.table} personas</td>
                      <td>{dato.fecha}</td>
                      <td>{dato.hora}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};


export default Reserve;
