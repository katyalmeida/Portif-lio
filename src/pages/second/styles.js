import styled from 'styled-components'


export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
cursor: pointer;

.box {
    width: 100%;
    height: 80px;
    background-color: black;
    @media (max-width: 768px){
      width: 100%;
      height: 30px;

    }
}
`
export const ContainerImage = styled.div`
display: flex;
align-items: center;
gap: 40px;
margin-top: 80px;
margin-bottom: 14px;
@media (max-width: 768px){
  gap: 20px;
  margin-top: 40px;
  margin-bottom: 20px;



}


.html{
  width: 60px;
  margin-right: -8 px;
  
 
  &:hover{transform: scale(1.2)}
  @media (max-width: 768px){
    width: 30px;

  }
}
.css{
  width: 50px;

 &:hover{  transform: scale(1.2);}
 @media (max-width: 768px){
    width: 25px;

  }
}
.js{
  width: 48px;
  &:hover{  transform: scale(1.2);}
  @media (max-width: 768px){
    width: 22px;

  }
}

.rct{
  width: 60px;
  &:hover{  transform: scale(1.2);}
  @media (max-width: 768px){
    width: 30px;

  }
}

.nde{
  width: 60px;
  &:hover{  transform: scale(1.2);}
  @media (max-width: 768px){
    width: 40px;

  }
}
`

export const Image = styled.img`
margin-top: 10px;
width: 230px;

@media (max-width: 768px){
  width: 80px;
  margin-top: 20px;

}

`

export const ContainerTextos = styled.div`
display: flex;
flex-direction: column;
width: 60%;
align-items: center;
margin-top: 50px;
@media (max-width: 768px){
  margin-top: 20px;
}
`

export const H1 = styled.h1`
font-weight: 1000;
font-size: 48px;
color:  #4169E1;
margin-top: 15px;

@media (max-width: 768px){
  font-size: 18px;
margin-top: -5px;

}

`

export const P = styled.p`
  font-weight: 200;
  font-size: 25px;
  line-height: 1.5; 
  text-align: center;
  margin-top: 30px;

  @media (max-width: 768px){
    font-size: 14px;
    line-height: 1.2; 

    margin-top: 15px;



  }

`;







