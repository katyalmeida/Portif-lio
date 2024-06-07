import React from 'react';
import Card from '../../components/card';



import {
    Container,
    ContainerButton,
    ContainerTextos,
} from "./styles";


const App = () => {
    return (
        <Container id="projetos">
            <ContainerTextos>
                <h1> Projetos </h1>
            </ContainerTextos>
            <ContainerButton>

           <Card></Card>
           




            </ContainerButton>


           


        </Container>

    )
}
export default App