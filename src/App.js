import React from 'react';
import Home from "./pages/Home"
import Card from "./components/Card";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";


function App() {
  return (
      <div>
        <Header />
        <Wrapper>
          <Home />
          <Card />
        </Wrapper>
        <Footer />
      </div>
  );
}

export default App;
