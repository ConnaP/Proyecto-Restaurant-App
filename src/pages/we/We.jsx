import "./We.css";
import About from "../../components/we/about";
import Form from "../../components/we/Form";
import Contact from "../../components/we/Contact";

export const We = () => {
  const title = "¿QUIENES SOMOS?";
  const text1 =
    "La casa Pizza, se inició en año 2019, en la ciudad de Chillán. El concepto gourmet, ofrece pizzas artesanales con masa a las hierbas finas con 3 etapas de fermentado, utilizando ingredientes de la más alta calidad, complementando el menú con snacks, bebidas y postres, en un total ambiente familiar.";

  const text2 =
    "Somos una empresa de servicio de comida rápida, dedicada a la elaboración y venta de pizzas artesanales con ingredientes de alta calidad, complaciendo a nuestros clientes a través de nuestro personal capacitado y comprometido, en un ambiente totalmente familiar, aportando para el desarrollo de nuestra localidad.";

  const text3 =
    "Somos una empresa de servicio de comida rápida, dedicada a la elaboración y venta de pizzas artesanales con ingredientes de alta calidad, complaciendo a nuestros clientes a través de nuestro personal capacitado y comprometido, en un ambiente totalmente familiar, aportando para el desarrollo de nuestra localidad.";

  return (
    <>
      <div className="we">
        <About title={title} text1={text1} text2={text2} text3={text3} />

        <Form />

        {/* <Contact /> */}
      </div>
    </>
  );
};
