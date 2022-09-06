import "./ViewAnimal.scss";

import React from "react";
let animalName = "Bosse";
let animalDesc = "lorem ipsum lorem ipsum lorem ipsum lorem ipsum";

type Props = {};

const ViewAnimal = (props: Props) => {
  return (
    <div className="animalContainer">
      <h1>{animalName}</h1>
      <img src="" alt="" />
      <p>{animalDesc}</p>
      <button className="button-type-1">Anmäl intresse för {animalName}</button>
    </div>
  );
};

export default ViewAnimal;
