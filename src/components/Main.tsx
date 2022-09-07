import "./Main.scss";
import Cards from "./Cards";
import React, { useState } from "react";
import { Animal } from "../models/animalInterface";
import AnimalOverlay from "./AnimalOverlay";

interface Props {
  animals: Animal[];
  setHiddenCss:(hiddenCss: boolean) => void;
  hiddenCss: boolean
}

const Main = ({ animals, setHiddenCss, hiddenCss }: Props) => (
  <section className="IntroContainer">
    <AnimalOverlay setHiddenCss={setHiddenCss} hiddenCss={hiddenCss} />
    <div className="cardsContainer">
      <Cards animals={animals} />
    </div>
  </section>
);

export default Main;
