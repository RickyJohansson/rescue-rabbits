import React, { useState } from "react";
import "./Cards.scss";
import Card from "./Card";
import { Animal } from "../models/animalInterface";

interface Props {
  animals: Animal[];
}

const CardGrid = ({ animals }: Props) => (
  <section className="cardsContainer">
    {animals.map((animal) => (
      <Card key={animal.animalId} animal={animal} />
    ))}
  </section>
);

export default CardGrid;
