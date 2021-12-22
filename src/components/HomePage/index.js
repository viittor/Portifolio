import React from "react";
import Perfil from "../../assets/perfil.png";
import "../../App.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="body-home">
      <div className="main">
        <div className="text-box">
          <div className="container-name">
            <h1>
              Olá, eu sou <br />
              <strong>Victor!</strong>
            </h1>
            <h2>Fullstack Developer Student</h2>
          </div>
          <div className="home-button">
            <Link to="/Portifolio"><button className="button-port">Ver meu portifólio</button></Link>
          </div>
        </div>
        <div className="image-box">
          <img src={Perfil} alt="perfil" className="perfil" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
