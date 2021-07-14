import React from 'react';

// components:
import Nav from "./components/Nav/Nav";
import Container from "./components/Container/Container";

// style:
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Container>
        <Nav />
      </Container>
    </div>
  );
}

export default App;
