import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Nav from "./components/Nav";
import Location from "./components/Locations";
import Footer from "./components/Footer";
import jsonData from "./animals.json";
import { Animal } from "./models/animalInterface";
import { Routes, Route } from "react-router-dom";
import AdoptionForm from "./Views/Adoptionform";

function App() {
  const [animals, setAnimals] = useState<Animal[]>(jsonData.animals);
  const [hiddenCss, setHiddenCss] = useState<boolean>(true);
  const [chosenAnimal, setChosenAnimal] = useState<Animal>(jsonData.animals[1]);
  const [formView, setFormView] = useState<boolean>(true);
  return (
    <div className="App">
      <Header />
      <Nav setAnimals={setAnimals} />
      {/* <AnimalOverlay /> */}
      <Routes>
        <Route
          path="1"
          element={
            <AdoptionForm
              setFormView={setFormView}
              formView={formView}
              setHiddenCss={setHiddenCss}
            />
          }
        />
        <Route
          path="/"
          element={
            <Main
              chosenAnimal={chosenAnimal}
              setChosenAnimal={setChosenAnimal}
              animals={animals}
              setHiddenCss={setHiddenCss}
              hiddenCss={hiddenCss}
            />
          }
        />
      </Routes>
      <Location setAnimals={setAnimals} />
      <Footer />
    </div>
  );
}

export default App;
