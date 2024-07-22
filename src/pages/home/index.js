import React, { useEffect, useState } from 'react';
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
  const [refImage, setRefImage] = useState(window.innerWidth);


  useEffect(() => {
    const captureWindow = () => {
      setRefImage(window.innerWidth);
    };

    window.addEventListener('resize', captureWindow)

    return () => {
      window.removeEventListener('resize', captureWindow)
    };

  },[]);
  
  
  
    const [refElementoVisivel, setRefElementoVisivel] = useState(window.innerWidth);
  
    useEffect(() => {
      const captureWindow = () => {
        setRefElementoVisivel(window.innerWidth);
      };
  
      captureWindow(); 
  
      window.addEventListener('resize', captureWindow);
  
      return () => {
        window.removeEventListener('resize', captureWindow);
      };
    }, []);

  
  return (
    <Container>
        
       
      {refElementoVisivel < 768 && ( 
        <div style={{ background: "#4169E1", width: "100%", height: "90px" }}></div>
      )}
  

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
       {  refElementoVisivel < 768 && (  <div style={{background:"black",width:"100%", height:"45px"}}></div>)}
       
     

 



    { refImage >= 1300 ? (
       <img src={Tela} className='background'/>
    ) : (
      <div></div>
    )}

    </Container>

  )

}
export default App