import React from "react";
import backHeaderHome from "../../assets/backHeaderHome.png";
import "../../App.css";

const HeaderHome = () => {
  return (
    <div className="body-page">
      <div className="header-home">
        <div className="header-home-left">
          <h1 className="victor-h1">VICTOR<br/>FERRANDO<br/>DA SILVA</h1>
          <h2 className="header-home-subtitle">
            SEJA BEM VINDO AO MEU PORTIFÓLIO
          </h2>
          <h4 className="header-home-phrase">
            Veja um pouco dos meus conhecimentos na prática!
          </h4>
        </div>
        <div className="header-home-right">
          <img
            className="img-victor"
            src={backHeaderHome}
            alt="backHeaderHome"
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderHome;
