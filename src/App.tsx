import { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Nav from "./components/Nav/Nav";
import Location from "./components/Locations/Locations";
import Footer from "./components/Footer/Footer";
import jsonData from "./animals.json";
import { Animal } from "./models/animalInterface";
import { Routes, Route } from "react-router-dom";
import AdoptionForm from "./Views/Adoptionform";

let string =
  "Rescue Rabbits är en ideell organisation som räddar djur från hem där djuren blivit illa behandlade, men även djur som blivit övergivna. Vi finns endast tack vare generösa donationer från den italienska maffian. För att donera kan du besöka Donationer-sidan";

function App() {
  const [animals, setAnimals] = useState<Animal[]>(jsonData.animals);
  const [hiddenCss, setHiddenCss] = useState<boolean>(true);
  const [chosenAnimal, setChosenAnimal] = useState<Animal>(jsonData.animals[1]);
  const [formView, setFormView] = useState<boolean>(true);
  const [adoptedCss, setAdoptedCss] = useState<boolean>(false);
  const [queriedAnimals, setQueriedAnimals] = useState<string>(string);
  const [menuVisible, setMenuVisible] = useState<boolean>(false);

  return (
    <div className="App">
      <Header
        setAnimals={setAnimals}
        setQueriedAnimals={setQueriedAnimals}
        menuVisible={menuVisible}
        setMenuVisible={setMenuVisible}
      />
      <Nav setAnimals={setAnimals} setQueriedAnimals={setQueriedAnimals} />
      <Routes>
        <Route
          path="1"
          element={
            <AdoptionForm
              animals={animals}
              setFormView={setFormView}
              formView={formView}
              setHiddenCss={setHiddenCss}
              chosenAnimal={chosenAnimal}
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
              queriedAnimals={queriedAnimals}
            />
          }
        />
      </Routes>
      <Location setAnimals={setAnimals} setQueriedAnimals={setQueriedAnimals} />
      <Footer />
    </div>
  );
}

export default App;
