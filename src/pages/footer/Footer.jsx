import "./Footer.css";
import instagram from '../../assets/img/icon-instagram.png'
import facebook from '../../assets/img/icon-facebook.png'

export const Footer = () => {
  return (
    <>
       <footer className="footer">
      <div className="comun">
        <p className="letras-negras">Hablemos</p>
        <a href="#">Contacto</a>
        <a href="#">Ayuda</a>
        <a href="#">Trabaja con nosotros</a>
      </div>

      <div className="comun">
        <p className="letras-negras">Legal</p>
        <a href="#">Privacidad</a>
        <a href="#">Terminos y condiciones</a>
        <a href="#">Código ético</a>
      </div>
      <div className="comun icon-redes-sociales">
      <p className="letras-negras">¡Síguenos!</p>
        <div className="circulo2">
          <img
            className="img-redessociales"
            src={instagram}
            alt=""
          />
        </div>

        <div className="circulo2">
          <img
            className="img-redessociales"
            src={facebook}
            alt=""
          />
        </div>
      </div>
    </footer>
     
    </>
  );
};

export default Footer;
