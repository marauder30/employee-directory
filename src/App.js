import React from 'react';
import Home from "./pages/Home"
import StaticCard from "./components/StaticCard";
import EmployeeCard from "./components/EmployeeCard";
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
          <EmployeeCard />
        </Wrapper>
        <Footer />
      </div>
  );
}

export default App;
