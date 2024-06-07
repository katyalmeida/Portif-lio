import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
margin-top: 20px;


button {
    width: 200px;
    text-decoration: none;
background:white;
color:#4169E1;
font-size: 15px;
height: 34px;
border-radius: 35px;
border: none;
font-weight: 1000;
background: white;
cursor:pointer;
box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.2);


&:hover{
opacity: 0.95;
}

&:active{
opacity: 0.50;
}

@media (max-width: 768px){
    display: flex;
flex-direction: column;
margin-top: 0px;
width: 130px;
font-size: 10px;
height: 30px;
align-items: center;
justify-content: center;

}

}

`
