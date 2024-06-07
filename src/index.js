import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/home';
import GlobalStyle from './styles/globalStyle';
import Second from './pages/second';
import Projects from './pages/projects';
import Footer from './components/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <>
    <GlobalStyle />
    <Home />
    <Second />
    <Projects />
    <Footer />

  </>

);

