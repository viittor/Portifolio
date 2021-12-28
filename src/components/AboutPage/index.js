import React from "react";
import Perfil from "../../assets/perfil.png";

const AboutPage = () => {
  return (
    <div className="body">
      <div className="main-port">
        <section className="about-section">
          <img src={Perfil} alt="perfil" className="perfil-about" />
          <div className="div-about">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            viverra nibh erat, in aliquam urna scelerisque ut. Duis accumsan
            libero vitae aliquam venenatis. Nullam quis nulla dignissim, iaculis
            ante non, molestie urna. Etiam porta convallis risus et varius.
            Curabitur a interdum felis, vitae vestibulum mauris. In condimentum
            arcu tempus eros mattis, nec lacinia enim semper. Mauris eget nunc
            nisl. Curabitur et venenatis ipsum. Mauris efficitur dolor pretium
            metus ornare, at vehicula massa cursus. Praesent ullamcorper nulla
            tellus, ultricies convallis nisi vestibulum at. Maecenas ornare
            aliquam ipsum eu convallis. Pellentesque id tortor lectus.
          </p>

          <p>
            Praesent sed egestas lectus. Nam pharetra massa quis mi mollis
            gravida. Praesent metus odio, dapibus eget risus et, aliquet
            sollicitudin risus. Nunc consequat ipsum vel lectus sodales
            placerat. In auctor auctor fringilla. Morbi a nunc ut elit suscipit
            laoreet ornare ac enim. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            curae; Suspendisse id ultrices augue. Proin elementum, enim sit amet
            viverra suscipit, odio arcu venenatis odio, ac venenatis dui ligula
            sit amet nulla.
          </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
