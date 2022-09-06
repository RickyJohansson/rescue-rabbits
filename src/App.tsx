import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Nav from "./components/Nav";
import Location from "./components/Locations";

import Footer from './components/Footer';
import AnimalOverlay from "./components/AnimalOverlay";
function App() {

import Footer from "./components/Footer";
import jsonData from "./animals.json";
import { Animal } from "./models/animalInterface";
import { Routes, Route } from "react-router-dom";
<<<<<<< Updated upstream
import ViewAnimal from "./Views/ViewAnimal";

=======
import AdoptionForm from "./Views/Adoptionform";
>>>>>>> Stashed changes

function App() {
  const [animals, setAnimals] = useState<Animal[]>(jsonData.animals);
  return (
    <div className="App">
      <Header />
      <Nav />
      <Main />
      <AnimalOverlay />
      <Routes>
        <Route path="1" element={<ViewAnimal />} />
        <Route path="/" element={<Main animals={animals} />} />
      </Routes>
      <Location />
      <Footer />
    </div>
  );
}

export default App;
