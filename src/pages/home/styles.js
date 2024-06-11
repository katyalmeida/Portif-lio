import styled from 'styled-components';
import Git from '../../assets/gitOrange.png';
import Linkedin from '../../assets/linkedinAzul.png';



export const Container = styled.div`
display: flex;
flex-direction: row;

.background {
    width: 92%;
    position: absolute;
    top: -5%;
    right: 1%;
    z-index: -2;
}
@media (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    .background {
      width: 100%;
      top: 15%;
      right: -2%;
    }
  }
/* 
@media (max-width: 768px){
    display: flex;
flex-direction: row;
.background{
    width: 100%;
    position: absolute;
    top: 15%;
    right: -2%;
    z-index: -2;
}  
} */

`;

export const  ContainerItens = styled.div`
display: flex;
flex-direction:column;
padding:80px 120px;
cursor: pointer;

@media (max-width: 768px){
    padding: 15px 20px;

}
/* @media (max-width: 460px){

    margin-left: 150px;
} */

 `

export const H1 = styled.h1`

font-size: 100%;
font-weight: 200;
@media (max-width: 768px){
    font-size: 15px;
    font-weight: 100;
}





`;

export const H2 = styled.h2`
font-style: normal;
font-size: 130px;
font-weight: 1000;


@media (max-width: 768px){
    font-size: 40px;
}



@media (max-width: 460px){
    font-size: 35px;
}
@media (max-width: 431px){
    font-size: 32px;
}
/* @media (max-width: 1286px){
    font-size: 100px;

} */


`;
export const H3 = styled.h3`
font-weight: 800;
font-size: 42px;
color: #4169E1;

@media (max-width: 1286px){
    font-size: 32px;
    font-weight: 800;
}
@media (max-width: 768px){
    font-size: 20px;
}

@media (max-width: 431px){
    font-size: 18px;
}



`;

export const ContainerTextos = styled.div`
margin-top: 80px;
margin-bottom: 180px;




`

export const Button = styled.button`
width: 180px;
height: 38px;
border-radius: 35px;
border: none;
background-color: #4169E1;
font-size: 18px;
font-weight: 1000;
color: white;
cursor: pointer;
box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.2);


@media (max-width: 768px) {


    width: 150px;
height: 30px;
font-size: 14px;
font-weight: 700;
background-color: #373333;;
}
@media (max-width: 460px){
    
    width: 80px;
height: 25px;
font-size: 10px;
}
@media (max-width: 431px) {



    width: 100px;
height: 25px;
font-size: 10px;
    
}



&:hover{
opacity: 0.95;
}

&:active{
opacity: 0.50;
}





`
export const ContainerButton = styled.div`
display: flex;
gap: 35px;

@media (max-width: 768px) {
    display: flex;
 gap: 30px; 
margin-top: 30px;
justify-content: center;
}



`

export const Image = styled.img`
width: 50px;


`
export const ContainerImage = styled.div`

display: flex;
gap: 30px;

.git{
    &:hover{
    content:url(${Git});
}
}

.linkedin{
    &:hover{
        content:url(${Linkedin});
    }
}


img{
    width: 60px;
    
  
}

@media (max-width: 768px) {
   img{
    width:32px;
    
 }
 
display: flex;
gap: 12px;
margin-top: -70px;
margin-bottom: 30px;
  }



`