import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Nav from "./components/Nav/Nav";
import Location from "./components/Locations/Locations";
import Footer from "./components/Footer/Footer";
import jsonData from "./animals.json";
import { Animal } from "./models/animalInterface";
import { Routes, Route } from "react-router-dom";
import AdoptionForm from "./Views/Adoptionform";

function App() {
  const [animals, setAnimals] = useState<Animal[]>(jsonData.animals);
  const [hiddenCss, setHiddenCss] = useState<boolean>(true);
  const [chosenAnimal, setChosenAnimal] = useState<Animal>(jsonData.animals[1]);
  const [formView, setFormView] = useState<boolean>(true);
  const [adoptedCss, setAdoptedCss] = useState<boolean>(false);

<<<<<<< Updated upstream
=======
  // FRÅGOR ATT STÄLLA TILL DAVID:

  // "Detta behöver sparas i något state. Om det behövs visas någonstans vem som gjort bokningen, det väljer ni själva."
  // Vi visar en overlay med "tack för visat intresse" men har inte kopplat någon state till det

  //TODO

  // I LISTAN(????) ska det minst visas:
  // Plats
  // Ålder
  // Uppläggningsdatum
  // Vi visar bara namn + bild i "listan"



  
>>>>>>> Stashed changes
  return (
    <div className="App">
      <Header setAnimals={setAnimals} />
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
              adoptedCss={adoptedCss}
              setAdoptedCss={setAdoptedCss}
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
