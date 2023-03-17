import React from "react";
import { Container } from "./HomePage.styles";
import { Header, Footer, Main } from "../../components"; 

export const HomePage : React.FC = () => {
  return (
    <Container>
      <Header/>
      <Main/>
      <Footer/>
    </Container>
  );
};