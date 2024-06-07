import React from "react";
import Git from "../../assets/gitlogo.png";
import Whats from "../../assets/whats.png";
import Linkedin from "../../assets/linkedinlogo.png";
import { Container, ContainerText, ContainerImage } from "./styles";

function Footer() {
  return (
    <Container id="contatos">
      <ContainerText>
        <h1>Katiane Almeida</h1>
        <h2>Desenvolvedora Full-Stack</h2>
      </ContainerText>

      <ContainerImage>
        <img alt="logowhats" src={Whats} className="whats" />
        <a href="https://github.com/katyalmeida" target="blank">
          <img alt="logogit" src={Git} className="git" />
        </a>
        <a href="https://www.linkedin.com/in/almeida-katiane/" target="blank"> <img alt="logolinkedin" src={Linkedin} className="linkedin"/>
        </a>
      </ContainerImage>
    </Container>
  );
}
export default Footer;
