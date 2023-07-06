import './About.css'

const about = ({ text1, text2, text3 }) => {
  return (
    <>
      <div className="container-text">
        <h1 className="title">¿QUIENES SOMOS?</h1>
        <p className="description">{text1}</p>
        <p className="sub-title">MISIÓN</p>
        <p>{text2}</p>
        <p className="sub-title">VISIÓN</p>
        <p>{text3}</p>
      </div>
    </>
  );
};

export default about;
