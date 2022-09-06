import { useState } from "react";
import "./App.css";
import Header from './components/Header';
import Main from "./components/Main";
import Nav from "./components/Nav";
import Location from "./components/Locations";
import Footer from './components/Footer';
import AnimalOverlay from "./components/AnimalOverlay";
function App() {

  return (

    <div className="App">
      <Header />
      <Nav />
      <Main />
      <AnimalOverlay />
      <Location />
      <Footer />
    </div>

  );
}

export default App;
