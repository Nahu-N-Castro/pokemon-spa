import { NavLink } from "react-router-dom";
import imageMe from "../../img/me-byn.jpg";
import back from "../../img/back.svg";
import github from "../../img/github.svg";
import linkedin from "../../img/linkedin.svg";
import style from "./about.module.css";

const About = () => {
  return (
    <section className={style.about}>
      <div>
        <NavLink className={style.back} to="/home">
          <img className={style.backimg} src={back} alt="back" />
        </NavLink>
      </div>
      <div className={style.div}>
        <img className={style.imgMe} src={imageMe} alt="NahuCastro" />
        <div className={style.abText}>
          <h1 className={style.h1}>About Us</h1>
          <h5>Nahuel Castro | Full Stack Developer </h5>
          <p>
            I am a fronted web developer. I can provide clean code and pixel
            perfect design. I also make the website more & more interactive with
            web animations. I can provide clean code and pixel perfect desing. I
            responsive design makes your website accesible to all users,
            regardless of their device.
          </p>
          <div>
            <a href="https://github.com/Nahu-N-Castro">
              <img className={style.git} src={github} alt="github" />
            </a>
            <a href="https://www.linkedin.com/in/nahuel-castro-8a07bb202/">
              <img className={style.linkedin} src={linkedin} alt="linkedin" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
