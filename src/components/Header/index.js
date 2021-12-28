import React from "react";
import { Link } from "react-router-dom";
import Perfil from "../../assets/perfil.png";

const Header = () => {
  return (
    <div className="main-header">
      <div className="main-header1">
        {/* <img src={Perfil} alt="perfil-header" className="perfil-header" /> */}
        <div className="container-links">
          <Link style={{ textDecoration: "none", color: "white" }} to="/">
            <div className="link-h">
              <p>HOME</p>
            </div>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/Portifolio"
          >
            <div className="link-h">
              <p>PORTIFÓLIO</p>
            </div>
          </Link>
          <Link style={{ textDecoration: "none", color: "white" }} to="/About">
            <div className="link-h">
              <p>SOBRE MIM</p>
            </div>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/Contact"
          >
            <div className="link-h">
              <p>CONTATO</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
