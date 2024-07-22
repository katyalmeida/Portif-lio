import projeto1 from "../../assets/projetos1.PNG";
import projeto2 from "../../assets/mock_up.png"

const projectsArray = [
     {
        id: 1,
        titulo: "API de Hamburgueria",
        texto: "Este projeto consiste em uma aplicação simples para gerenciar pedidos de uma hamburgueria. A aplicação permite que os clientes façam seus pedidos, além de possibilitar a exclusão e confirmação dos mesmos. As tecnologias usadas foram: Swal Alert, JavaScript, Styled-components, Express, Axios e UUID.",
        img1:projeto1,
        botao1: "https://hamburgueriaprojeto.netlify.app",
        botao2:"https://github.com/katyalmeida/hamburgueria",
        first: 'project'
    },

    {
        id: 2,
        titulo: "Woovi - Desafio Front-end",
        texto: "O desafio pede 3 telas web em formato mobile, que oferece suporte ao PIX e suas variações em parcelas com cartão de crédito , criando uma experiência de usuário fluida e moderna.Para alcançar este objetivo, utilizei uma combinação de tecnologias :Swal Alert,JavaScrip,React,Sttyled-components e MUI. ",
        img1: projeto2,
        botao1: "https://desafiowoovi.netlify.app",
   botao2:"https://github.com/katyalmeida/desafio-woovi",
    }
]

export default projectsArray;