import React, { useEffect, useState } from "react";

const Project = () => {
  const [projeto, setProjeto] = useState([]);

  useEffect(() => {
    async function getProjeto() {
      const projetoResult = await fetch(
        "https://restapisgi.herokuapp.com/products"
      );
      const projetoData = await projetoResult.json();
      setProjeto(projetoData);
    }
    getProjeto();
  }, []);

  return (
    <div>
      <ul>
        {projeto.map((item) => (
          <li className="item">
            <div >
              <img src="https://blog.handtalk.me/wp-content/uploads/2018/11/capa-blog-2.png" alt="thumbnail" className="thumb-item" />
            </div>
            <div className="name-item">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
            <div className="btn-item">
              <a href="www.google.com" target="_blank" className="btn-preview">
                Preview
              </a>
              <a href="www.github.com" target="_blank" className="btn-repo">
                Repositório
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Project;
