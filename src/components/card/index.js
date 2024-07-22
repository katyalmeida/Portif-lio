import React from "react";
import {
  Container,
  ContainerDetails,
  ContainerText,
  Image,
  Carrousel,
  MapAjust,
} from "./styles";

import Button from "../buttons";
import projectsArray from "./projectsArray.js";

function Card() {
  return (
    <Container>
      {projectsArray &&
        projectsArray.map((projetos) => (
          <MapAjust>
            <ContainerDetails key={projetos.id} validator={projetos.first}>
              <Carrousel>
                <Image src={projetos.img1} />
              </Carrousel>
            </ContainerDetails>

            <ContainerText>
              <h1>{projetos.titulo}</h1>
              <p>{projetos.texto}</p>
              <a href={projetos.botao1} style={{ textDecoration: "none" }}>
                <Button>ACESSAR DEPLOY</Button>
              </a>
              <a href={projetos.botao2} style={{ textDecoration: "none" }}>
                <Button style={{ backgroundColor: "#FF8C00", color: "black" }}>
                  REPOSITÓRIO GIT
                </Button>
              </a>
            </ContainerText>
          </MapAjust>
        ))}
    </Container>
  );
}

export default Card;
