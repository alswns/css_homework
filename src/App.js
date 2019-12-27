import React from 'react';
import Banner from './banner';
import { createGlobalStyle } from 'styled-components'
import First from './Fisrt';
import Footer from './Footer';

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
  }
  a{
    text-decoration:none;
    color:white;
  }
body{
  
}
`
function App() {
  return (
    <>
    <GlobalStyle/>
    <Banner></Banner>
    <First ></First>
    <Footer></Footer>
    </>
  );
}

export default App;
