import React from "react";
import { FiMail, FiPhone, FiGithub } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";

const ContactPage = () => {
  return (
    <div className="body">
      <div className="main-port">
        <div>
          <h1>ENTRE EM CONTATO:</h1>
        </div>
        <div className="cont1-contact">
          <div className="cont2-contact">
            <a
              href="mailto:victor.ferrando@hotmail.com"
              title="Enviar um e-mail"
            >
              <div className="div-icon">
                <FiMail className="icon-c" />
              </div>
              <div className="div-cont-text">victor.ferrando@hotmail.com</div>
            </a>
          </div>
          <div className="cont2-contact">
            <a
              href="https://api.whatsapp.com/send?phone=5542999521151"
              target="_blank"
              title="Conversar pelo WhatsApp"
            >
              <div className="div-icon">
                <FiPhone className="icon-c" />
              </div>
              <div className="div-cont-text">+55 (42) 9 9952-1151</div>
            </a>
          </div>
          <div className="cont2-contact">
            <a
              href="https://github.com/viittor"
              target="_blank"
              title="Acessar GitHub"
            >
              <div className="div-icon">
                <FiGithub className="icon-c" />
              </div>
              <div className="div-cont-text">GitHub</div>
            </a>
          </div>
          <div className="cont2-contact">
            <a
              href="https://www.linkedin.com/in/victorferrandosilva/"
              target="_blank"
              title="Acessar Linkedin"
            >
              <div className="div-icon">
                <BsLinkedin className="icon-c" />
              </div>
              <div className="div-cont-text">Linkedin</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
