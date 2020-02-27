import React from 'react';
import Home from "./pages/Home"
import StaticCard from "./components/StaticCard";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";


function App() {
  return (
      <div>
        <Header />
        <Wrapper>
          <Home />
          <StaticCard />
        </Wrapper>
        <Footer />
      </div>
  );
}

export default App;
