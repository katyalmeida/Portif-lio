import styled from 'styled-components';


export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

@media (max-width: 768px){
  min-height: 100%;
}




`

export const ContainerButton = styled.div`
display: flex;
width: 90%;
margin-bottom: 50px;
`
export const ContainerTextos = styled.div`
display: flex;
align-items:center;

h1{
    font-size: 80px;
    padding: 40px;
    font-weight: 1000;
    margin-top: 20px;
    
}

@media (max-width: 768px){
h1{
    font-size: 30px;
    padding: 20px;
    margin-top: 10px;
}

  }


`






