import './Form.css'

const Form = () => {
  return (
    <>
      <div className="container-form">
        <h1 className="title">¡Contactanos y cuentanos tu experiencia!</h1>
        <div className=" mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Nombre:
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Pedro Venegas"
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
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">
            Comenta tu opnión:
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
          <button type="button" className="btn btn-outline-secondary btn-style">
            Enviar
          </button>
        </div>
      </div>
    </>
  );
};

export default Form;
