import React from "react";
import "./Nosotros.css";

export const Nosotros = () => {
  return (
    <>
      <div className="we">
        <div className="container-text">
          <h1 className="title">¿QUIENES SOMOS?</h1>
          <p className="description">
            La casa Pizza, se inició en año 2019, en la ciudad de Chillán. El
            concepto gourmet, ofrece pizzas artesanales con masa a las hierbas
            finas con 3 etapas de fermentado, utilizando ingredientes de la más
            alta calidad, complementando el menú con snacks, bebidas y postres,
            en un total ambiente familiar.
          </p>
          <p className="sub-title">MISIÓN</p>
          <p>
            Somos una empresa de servicio de comida rápida, dedicada a la
            elaboración y venta de pizzas artesanales con ingredientes de alta
            calidad, complaciendo a nuestros clientes a través de nuestro
            personal capacitado y comprometido, en un ambiente totalmente
            familiar, aportando para el desarrollo de nuestra localidad.
          </p>
          <p className="sub-title">VISIÓN</p>
          <p>
            Somos una empresa de servicio de comida rápida, dedicada a la
            elaboración y venta de pizzas artesanales con ingredientes de alta
            calidad, complaciendo a nuestros clientes a través de nuestro
            personal capacitado y comprometido, en un ambiente totalmente
            familiar, aportando para el desarrollo de nuestra localidad.
          </p>
        </div>

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
            <button
              type="button"
              className="btn btn-outline-secondary btn-style"
            >
              Enviar
            </button>
          </div>
        </div>

        <div className="contact">
          <p>Contacto</p>
          <dd class="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="flex-shrink-0 h-6 w-6 text-gray-400"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              ></path>
            </svg>
            <span className="ml-3">+1 (555) 123-4567</span>
          </dd>
        </div>
      </div>
    </>
  );
};
