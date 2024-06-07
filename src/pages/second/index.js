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
                    Entusiasta da tecnologia e estudante dedicada, sempre buscando me atualizar e aprimorar minhas habilidades. Atualmente em transição de carreira para a área de Desenvolvedora Full-Stack, na programação, utilizo ferramentas e linguagens como JavaScript, React, Node.js e Express com a finalidade de contribuir para o desenvolvimento de projetos e sistemas web. Comprometida a trabalhar com profissionais da área para explorar novas oportunidades e maneiras de adquirir mais conhecimento. Além do desenvolvimento profissional, procuro me desenvolver no âmbito pessoal buscando superar desafios e dar o meu melhor.
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