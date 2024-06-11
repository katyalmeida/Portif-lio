import styled from 'styled-components';
import Git from '../../assets/gitOrange.png';
import Linkedin from '../../assets/linkedinAzul.png';
import Whatsapp from '../../assets/whatsapp.png';


export const Container = styled.div`
background-color: black;
width: 100%;
height: 160px;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 190px;


@media (max-width: 1286px){
 height: 130px; 
 padding: 0 60px;
}
@media (max-width: 768px){
    width: 100%;
    height: 80px;
    gap:20px;

}
@media (max-width: 596px){
    display: flex;
    flex-direction: row;
    padding: 0 50px;
}
@media (max-width: 431px){
    display: flex;
    flex-direction: row;
    padding: 0 10px;
}




`

export const ContainerText= styled.div`
/* margin-left: 220px; */
cursor: pointer;

h1{
    font-size: 40px;
    color:white;
    font-weight:900;
    &:hover{  transform: scale(1.0);
    color: #4169E1;
    }

}
h2{
    font-size: 20px;
    color:  #4169E1;
    &:hover{  transform: scale(1.0);
    color:white;}


}

@media (max-width: 1286px){
h1{
    font-size: 28px;
}}


@media (max-width: 596px){
    h1{        font-size: 28px;
    }
    }
    @media (max-width: 431px){
h1{
    font-size: 26px;
}}
@media (max-width: 596px){
    h2{        font-size: 14px;
    }
    }
@media (max-width: 431px){
    h2{        font-size: 14px;
    }
    }
   
`

export const ContainerImage = styled.div`
display: flex;
gap:30px;
align-items: center;
cursor: pointer;

.whats{
    width: 50px;

    &:hover{
content: url(${Whatsapp});
    }


}
.linkedin{
    width: 50px;
    &:hover{
        content:url(${Linkedin})
    }

}
.git{
    width: 50px;
    &:hover{
        content: url(${Git});
    }

}
@media (max-width: 1286px){
 .whats{width:40px;}
    .linkedin{ width:40px;}
    .git{width:40px;}

}
@media (max-width: 768px){
    display: flex;
 gap:10px;
    .whats{width:20px;}
    .linkedin{ width:20px;}
    .git{width:20px;}


}
@media (max-width: 596px){
    .whats{width:30px;}
    .linkedin{ width:30px;}
    .git{width:30px;}
}

@media (max-width: 431px){
 .whats{width:25px;}
    .linkedin{ width:25px;}
    .git{width:25px;}

}





`



