import React, { useEffect, useState } from "react";
import idea from "../../assets/idea.png";

const Project = () => {
  const [projeto, setProjeto] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/viittor/repos") //faz a busca dos repositorios
      .then((response) => response.json()) //transforma em json
      .then((data) => setProjeto(data)); //pega os dados recebidos e passa para o setProjeto
  }, []);

  return (
    <div>
      <ul className="container-list">
        {projeto.map((item) => (
          <li className="item">
            {/* <div>
              <img
                src={idea}
                alt="thumbnail"
                className="thumb-item"
              />
            </div> */}
            <div className="name-item">
              <h3 style={{ textTransform: "uppercase" }}>{item.name}</h3>
              <p>{item.description}</p>
            </div>
            <div className="btn-item">
              <button className="btn btn-secondary">
                <a href={item.homepage} target="_blank" className="btn-preview">
                  Preview
                </a>
              </button>

              <button className="btn btn-secondary">
                <a href={item.html_url} target="_blank" className="btn-repo">
                  Repositório
                </a>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Project;
