import React from "react";
import Perfil from "../../assets/perfil.png";

const AboutPage = () => {
  return (
    <div className="body">
      <div className="main-port">
        <section className="about-section">
          <img src={Perfil} alt="perfil" className="perfil-about" />
          <div className="div-about">
            
            <h1>Sobre Mim...</h1>
          <p>
            Sou estudante de programação e estou em transição de carreira para a área de desenvolvimento. Atuei mais de 8 anos na área comercial, atualmente como Analista comercial, função na qual pude aprimorar muitas habilidades, em especial soft skills. Agora busco uma oportunidade para entrar no mercado da Tecnologia.
          </p>

          <p>
            Fique a vontade para entrar em contato comigo, através da Página de Contato!
          </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
