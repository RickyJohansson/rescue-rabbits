import "./Card.scss";
import { Animal } from "../models/animalInterface";
import React from "react";
import Adopted from "../assets/adopterad.svg";

interface Props {
  animal: Animal;
}
const Card = ({ animal }: Props) => {
  if (animal.adopted) {
    return (
      <>
        <article className="animalCard">
          <h1>{animal.name}</h1>
          <img src={animal.image} alt="bild" />
          <div>
            <img
              className="adoptedTag"
              src={Adopted}
              alt="har blivit adopterad"
            />
          </div>
        </article>
      </>
    );
  } else {
    return (
      <>
        <article className="animalCard">
          <h1>{animal.name}</h1>
          <img src={animal.image} alt="bild" />
        </article>
      </>
    );
  }
};

export default Card;
