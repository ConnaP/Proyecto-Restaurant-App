import React from "react";
import menu from "../../assets/img/menu3.jpeg"
import "./Menu.css"

const Menu = () => {
  return (
    <div className="menu">
      <div className="card">
        <img
          src={menu}
          className="card-img-top"
          alt="..."
        />
        {/* <div className="card-body">
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Menu;
