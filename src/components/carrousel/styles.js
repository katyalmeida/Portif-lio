import Carousel from "react-elastic-carousel";
import styled from "styled-components";

export const CarouselContainer = styled(Carousel)`
  .rec-arrow {
    border: transparent;
    background-color: transparent;
    box-shadow: none;
    width: 30px;
    height: 30px;
    min-width: 30px;
    font-size: 1em;
    line-height: 0px;
  }
  .rec-arrow:hover {
    background-color: #4169e1;
  }

  .rec-dot {
    background-color: none;
    box-shadow: 0 0 1px 1px gray; /* Cor dos dots */
  }
  .rec-dot_active {
    background-color: #4169e1;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`;

export const MapAjust = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 75%;
  }
  @media (max-width: 1286px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #4169e1;
  border-radius: 0 25px 25px 0;
  padding: 20px;

  @media (max-width: 1286px) {
    border-radius: 0 0 25px 25px;
  }

  h1 {
    text-align: center;
    color: black;
    font-weight: 800;
    color: white;
    font-size: 21px;
    margin-bottom: 20px;
    /* margin-top:-30px; */

    @media (max-width: 1286px) {
      font-size: 14px;
    }
    @media (max-width: 768px) {
      font-size: 13px;
      /* margin-top: 10px;} */
    }
    @media (max-width: 431px) {
      font-size: 16px;
      margin-top: 2px;
    }
  }

  p {
    text-align: center;
    font-weight: 400;
    /* text-indent: 26px; */
    font-size: 15px;
    color: white;
    margin-top: 10px;
    /* margin-bottom: 40px; */

    @media (max-width: 1285px) {
      font-size: 14px;
      margin-bottom: 2px;
    }

    @media (max-width: 768px) {
      font-size: 12px;
      margin-bottom: 2px;
    }

    @media (max-width: 431px) {
      font-size: 13px;
    }
  }
`;
export const ContainerDetails = styled.div`
  background-color: ${(props) =>
    props.validator === "primeiro"
      ? "#e9e4e7"
      : props.validator === "segundo"
      ? "black"
      : props.validator === "terceiro"
      ? "white" // Terceira validação
      : "a6a6a6"};
  display: flex;
  width: 100%;
  height: 480px;
  justify-content: center;

  @media (max-width: 431px) {
    height: 375px;
  }

  img {
    max-width: 297px;
    /* border-radius:25px 25px 0 0 ; */

    @media (max-width: 431px) {
      width: 230px;
      /* border-radius:25px 25px 0 0 ; */
    }

    /* @media (max-width: 1286px){
        width: 300px;
    } */
  }
`;
export const Image = styled.img``;
export const Carrousel = styled.div``;
