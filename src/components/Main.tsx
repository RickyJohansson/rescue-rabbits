import "./Main.scss";
import Cards from "./Cards";
import React, { useState } from "react";
import { Animal } from "../models/animalInterface";

interface Props {
  animals: Animal[];
}

const Main = ({ animals }: Props) => (
  <section className="IntroContainer">
    <div className="cardsContainer">
      <Cards animals={animals} />
    </div>
  </section>
);

export default Main;
