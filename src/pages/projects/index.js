import CarrouselRender from "../../components/carrousel";
import React, { useState, useEffect } from "react";

import { Container, ContainerButton, ContainerTextos } from "./styles";

const App = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const updateDimensions = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  return (
    <Container id="projetos">
      <ContainerTextos>
        <h1> Projetos </h1>
      </ContainerTextos>
      <ContainerButton windowWidth={windowWidth}>
        <CarrouselRender></CarrouselRender>
      </ContainerButton>
    </Container>
  );
};
export default App;
