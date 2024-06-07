import React from 'react';
import Git from '../../assets/git.png'
import Linkedin from '../../assets/linkedin.png';
import Tela from '../../assets/tela.png';


import {
  Container,
  H1,
  H2,
  H3,
  Image,
  Button,
  ContainerImage,
  ContainerTextos,
  ContainerItens,
  ContainerButton
} from "./styles";


const App = () => {

  return (
    <Container>
<ContainerItens>   
    
    <ContainerButton>
    <a href="#resumo">
  <Button>Resumo</Button>
</a>
<a href="#projetos">
  <Button>Projetos</Button>
</a>
<a href="#contatos">
  <Button>Contatos</Button>
</a>
        </ContainerButton>


        <ContainerTextos>
          <H1> Olá eu sou,</H1>
          <H2>Katiane Almeida</H2>
          <H3>DESENVOLVEDORA FULL-STACK</H3>
        </ContainerTextos>

        <ContainerImage>
         <a href="https://github.com/katyalmeida" target="blank"><Image alt="logogit" src={Git} className='git' /></a> 
         <a href="https://www.linkedin.com/in/almeida-katiane/" target="blank"><Image alt="logolinkedin" src={Linkedin} className='linkedin'/></a> 
        </ContainerImage>
       

       
        </ContainerItens>
   
 




    <img src={Tela} className='background'/>
    </Container>

  )

}
export default App