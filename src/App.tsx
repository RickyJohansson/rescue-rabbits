import { useState } from "react";
import "./App.css";
import Header from './components/Header';
import Main from "./components/Main";
import Nav from "./components/Nav";
import Location from "./components/Locations";
function App() {

  return (

    <div className="App">
      <Header />
      <Nav />
      <Main />
      <Location />
      <footer>
        <h1>Rescue Rabbits</h1>
      </footer>
    </div>
    
  );
}

export default App;
