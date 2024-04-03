import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import classes from "./Entrada.module.css";
import ImgEntrada from "../../assets/sorvete-entrada.webp";
import { ReactComponent as ArrowSvg } from "../../assets/arrow-right.svg";
import "aos/dist/aos.css";
import AOS from "aos";

AOS.init({
  duration: 800,
  offset: 0,
});

const Entrada = () => {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <section className={classes.entrada}>
      <div className={classes.container}>
        <div className={classes.principal} data-aos="fade-down">
          <p className={classes.funcionamento}>
            Dom a Dom das 11h as 22h{" "}
          </p>
          <h1>
            Picolé <span></span>
            <span>G</span>
            <span>o</span>
            <span>u</span>
            <span>r</span>
            <span>m</span>
            <span>e</span>
            <span>t</span>
            <br /> da Thay
          </h1>
          <p className={classes.descricao}>
            Desde Maio de 2017, demos inicio a nossa produção. <br /> No começo de uma maneira mas simples.
            <br /> <b>E hoje com toda qualidade e conhecimento do ramo!</b>
          </p>
          <Link to="/lojas">
            Encontre a loja mais perto de você <ArrowSvg />
          </Link>
        </div>
      </div>
      <div className={classes.img} data-aos="fade-up">
        <img src={ImgEntrada} alt="Casquinha de sorvete" />
      </div>
      <ul className={classes.caracts} data-aos="fade-down">
        <li>Sorvete gourmet em cada palito.</li>
        <li>Luxo em forma de picolé.</li>
        <li>Picolés para os paladares mais exigentes.</li>
      </ul>
    </section>
  );
};

export default Entrada;
