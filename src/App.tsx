import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter } from 'react-router-dom';
import AppRouter from "./components/AppRouter";
import SideBar from "./components/SideBar";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Container>
          <SideBar />
          <AppRouter />
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
