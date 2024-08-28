import React, { Component, useState, useEffect } from "react";

import projeto1 from "../../assets/projetoBruger.png";
import projeto2 from "../../assets/mock_up.png";
import projeto3 from "../../assets/projetoDeisy.png";

import {
  ContainerDetails,
  ContainerText,
  Image,
  Carrousel,
  MapAjust,
} from "./styles";
import { CarouselContainer } from "./styles";

import Button from "../buttons";

export default class CarrouselRender extends Component {
  state = {
    items: [
      {
        id: 1,
        titulo: "Deisy Studio",
        texto:
          "Estou desenvolvendo este site  para facilitar e organizar o dia a dia das profissionais da área de beleza. Tudo foi pensado para oferecer uma experiência prática e eficiente, tanto para quem presta o serviço quanto para quem precisa dele. O 'Deisy Studio' vai ser útil para agendar atendimentos com facilidade, realizar pagamentos online de forma segura, conferir todos os serviços disponíveis e outras funcionalidades que estarão na versão final.",
        img1: projeto3,
        botao1:
          "https://www.figma.com/design/02xuSm6JvBESYpcWVGxplq/Deyse-Studio?node-id=4-23&t=zZZA3I3UYMVaeHkg-0",
        botao2: "https://github.com/katyalmeida/api-deisy-studio",
        validator: "primeiro",
        status: true,
      },
      {
        id: 2,
        titulo: "API de Hamburgueria",
        texto:
          "Este projeto consiste em uma aplicação simples para gerenciar pedidos de uma hamburgueria. A aplicação permite que os clientes façam seus pedidos, além de possibilitar a exclusão e confirmação dos mesmos. As tecnologias usadas foram: Swal Alert, JavaScript, Styled-components, Express, Axios e UUID.",
        img1: projeto1,
        botao1: "https://hamburgueriaprojeto.netlify.app",
        botao2: "https://github.com/katyalmeida/hamburgueria",
        validator: "segundo",
      },
      {
        id: 3,
        titulo: "Woovi - Desafio Front-end",
        texto:
          "O desafio pede 3 telas web em formato mobile, que oferece suporte ao PIX e suas variações em parcelas com cartão de crédito, criando uma experiência de usuário fluida e moderna. Para alcançar este objetivo, utilizei uma combinação de tecnologias: Swal Alert, JavaScript, React, Styled-components e MUI.",
        img1: projeto2,
        botao1: "https://desafiowoovi.netlify.app",
        botao2: "https://github.com/katyalmeida/desafio-woovi",
        validator: "terceiro",
      },

      // {
      //   id: 4,
      //   titulo: "Woovi - Desafio Front-end",
      //   texto:
      //     "O desafio pede 3 telas web em formato mobile, que oferece suporte ao PIX e suas variações em parcelas com cartão de crédito, criando uma experiência de usuário fluida e moderna. Para alcançar este objetivo, utilizei uma combinação de tecnologias: Swal Alert, JavaScript, React, Styled-components e MUI.",
      //   img1: projeto2,
      //   botao1: "https://desafiowoovi.netlify.app",
      //   botao2: "https://github.com/katyalmeida/desafio-woovi",
      // },
    ],
    windowWidth: window.innerWidth,
  };

  updateDimensions = () => {
    this.setState({ windowWidth: window.innerWidth });
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {
    const { items, windowWidth } = this.state;
    const itemsToShow = windowWidth > 1000 ? 2 : 1;

    return (
      <CarouselContainer itemsToShow={itemsToShow}>
        {items.map((projeto) => (
          <MapAjust key={projeto.id}>
            <ContainerDetails validator={projeto.validator}>
              <Carrousel>
                <Image src={projeto.img1} />
              </Carrousel>
            </ContainerDetails>
            <ContainerText>
              <h1>{projeto.titulo}</h1>
              <p>{projeto.texto}</p>
              <a href={projeto.botao1} style={{ textDecoration: "none" }}>
                {projeto.status ? (
                  <Button>VER NO FIGMA</Button>
                ) : (
                  <Button>VER DEPLOY</Button>
                )}
              </a>
              <a href={projeto.botao2} style={{ textDecoration: "none" }}>
                <Button style={{ backgroundColor: "#FF8C00", color: "black" }}>
                  REPOSITÓRIO GIT
                </Button>
              </a>
            </ContainerText>
          </MapAjust>
        ))}
      </CarouselContainer>
    );
  }
}
