import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: row;
gap: 50px;

@media (max-width: 768px){
    display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
}
`

export const MapAjust = styled.div`
display: flex;
flex-direction: row;
width: 90%;
@media (max-width: 768px){
    display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 75%;

}
`

export const ContainerText = styled.div`
display: flex;
text-decoration: none;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #4169E1;
border-radius: 0 25px 25px 0;
padding: 20px;
@media (max-width: 768px){
    border-radius: 10px;

}


 h1{
    text-align: center;
    color:  black;
    font-weight: 800;
    color: white;
    font-size:23px;
margin-top:-30px;
@media (max-width: 768px){

font-size:16px


}
 }
 
 p{
    text-align:center;
    font-weight: 400;
    /* text-indent: 26px; */
    font-size: 15px;
    color: white;
    margin-top: 8px;
    margin-bottom: 15px;


    @media (max-width: 768px){
        font-size: 10px;



    }

 }

`
export const ContainerDetails = styled.div`
 /* background-color: black; */
img{
    width: 310px;
    height: 480px;


}
@media (max-width: 768px){
    img{ width: 250px;
        height: 340px; 
        border-radius: 10px;


    
    }
   
}

`
export const Image = styled.img``
export const Carrousel = styled.div``