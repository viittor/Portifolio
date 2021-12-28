import React from "react";
import Project from "../Project";

const PortifolioPage = () => {
  return (
    <div className="body">
      <div className="main-port">
        <div>
          <h1>CONHEÇA MEUS PROJETOS:</h1>
        </div>
        <div className="port-items">
          <Project />
        </div>
      </div>
    </div>
  );
};

export default PortifolioPage;
