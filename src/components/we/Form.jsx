import "./Form.css";
import React, { useEffect, useState } from "react";

const Form = ({ user }) => {
  const [formData, setFormData] = useState({
    comment: "",
  });

  const [sessionStorageData, setSessionStorageData] = useState([]);

  useEffect(() => {
    const data = sessionStorage.getItem("commets") || null;

    if (data) {
      console.log("data", JSON.parse(data));
      return setSessionStorageData(JSON.parse(data));
    }

    console.log("asa", data);

    return setSessionStorageData([]);

    // return () => {
    //   second
    // }
  }, []);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendData(formData);
  };

  const getSessionStorage = () => {
    const commets = sessionStorage.getItem("commets") || null;

    if (commets) {
      return JSON.parse(commets);
    }

    return commets;
  };

  const sendData = (data) => {
    const { comment } = data;

    if (comment.trim() != "") {
      const comment = {
        name: user.name,
        email: user.email,
        commet: data.comment,
      };

      const commetsSessionStorage = getSessionStorage();

      let commets;

      if (commetsSessionStorage) {
        console.log("**", commetsSessionStorage);
        commets = [...commetsSessionStorage, comment];
      }

      if (!commetsSessionStorage) {
        commets = [comment];
      }

      setSessionStorageData(commets);

      sessionStorage.setItem("commets", JSON.stringify(commets));
      setFormData({
        comment: "",
      });

      return alert(
        `Estimad@ ${user.name}!! se ingresaró el comentario exitosamente!`
      );
    }

    alert("Ingrese comentario");
  };

  console.log("asas", sessionStorageData.length);

  return (
    <>
      {user ? (
        <>
          <form onSubmit={handleSubmit} className="container-form">
            <h1 className="title">¡Contactanos y cuentanos tu experiencia!</h1>
            <div className=" mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Nombre:
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Pedro Venegas"
                value={user.name}
                disabled={true}
              />
            </div>
            <div className=" mb-3">
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
            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">
                Comenta tu opnión:
              </label>
              <textarea
                id="comment"
                name="comment"
                className="form-control"
                rows="3"
                value={formData.comment}
                onChange={handleChange}
              ></textarea>
              <button
                className="btn btn-outline-secondary btn-style"
                type="submit"
              >
                Enviar
              </button>
            </div>
          </form>
        </>
      ) : (
        <></>
      )}
      <div className="container-table">
        {sessionStorageData.length > 0 ? (
          <>
            <p className="sub-title">Comentarios</p>
            <div class="table-responsive">
              <table class="table table-dark table-hover table-sm">
                <thead>
                  <tr>
                    <th scope="col">N°</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Email</th>
                    <th scope="col">Comentario</th>
                  </tr>
                </thead>
                <tbody>
                  {sessionStorageData.map((dato, i) => (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{dato.name}</td>
                      <td>{dato.email}</td>
                      <td>{dato.commet}</td>
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

export default Form;
