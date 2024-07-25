import React from 'react';
import Katiane from '../../assets/katiane.png';
import Html from '../../assets/html.png';
import Css from '../../assets/css.png';
import Js from '../../assets/js.png';
import Rct from '../../assets/rct.png';
import Nde from '../../assets/nde.png';



import {
    Container,
    H1,
    P,
    Image,
    ContainerImage,
    ContainerTextos,

} from "./styles";

const Second = () => {

    return (
        <Container id='resumo'>
            

            <Image alt="foto-katiane" src={Katiane} />

            <ContainerTextos>
                <H1>Sobre mim</H1>
                <P>
                    Entusiasta da tecnologia e profissional dedicada, sempre buscando me atualizar e aprimorar minhas habilidades. Atualmente, estou em transição de carreira para a área de desenvolvimento Web buscando oportunidades para aplicar meus conhecimentos. Tenho habilidades adquiridas ao desenvolver projetos funcionais, atuando tanto no front-end quanto no back-end, utilizando tecnologias como: JavaScript, Node.js, React, Express.js e Styled-components. Contribuindo para o desenvolvimento de sistemas, estou sempre disposta a colaborar com novos projetos e a aproveitar oportunidades profissionais. Busco novos desafios que possam contribuir para o meu crescimento, além de trazer inovações e melhorias significativas para a equipe e aos trabalhos em que eu estiver envolvida.
                </P>

            </ContainerTextos>



            <ContainerImage>

                <img  className="html"alt="html" src={Html} title='HTML'/>
                <img  className="css"alt="css" src={Css} title='CSS' />
                <img className="js" alt="js" src={Js} title='JAVASCRIPT' />
                <img className="rct" alt="rct" src={Rct}  title='REACT'/>
                <img className="nde"alt="nde" src={Nde} title='NODE'/>

            </ContainerImage>


            <div className='box'> </div>
        </Container>

    )

}
export default Second