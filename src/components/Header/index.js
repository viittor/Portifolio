import React from "react";
import { Link } from "react-router-dom";
import Perfil from "../../assets/perfil.png";

const Header = () => {
  return (
    <div>
      <div className="main-header">
        {/* <img src={Perfil} alt="perfil-header" className="perfil-header" /> */}
        <div className="container-links">
          <div className="link-h">
            <Link style={{ textDecoration: "none", color: "white" }} to="/">
              <p>HOME</p>
            </Link>
          </div>
          <div className="link-h">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/Portifolio"
            >
              <p>PORTIFÓLIO</p>
            </Link>
          </div>
          <div className="link-h">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/About"
            >
              <p>SOBRE MIM</p>
            </Link>
          </div>
          <div className="link-h">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/Contact"
            >
              <p>CONTATO</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
