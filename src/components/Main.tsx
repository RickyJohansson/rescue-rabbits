import "./Main.scss";
import Cards from "./Cards";
import React, { useState } from "react";
import { Animal } from "../models/animalInterface";
import CloseOverlayBtn from "../assets/close-overlay.svg";
import VetLogo from "../assets/vet-logo.svg";

interface Props {
  animals: Animal[];
  setHiddenCss: (hiddenCss: boolean) => void;
  hiddenCss: boolean;
  setChosenAnimal: (chosenAnimal: Animal) => void;
  chosenAnimal: Animal;
}

const Main = ({
  animals,
  setHiddenCss,
  hiddenCss,
  setChosenAnimal,
  chosenAnimal,
}: Props) => {
  let hiddenClass: string = hiddenCss ? " hidden" : "";
  function handleCloseClick(e: any) {
    if (!hiddenCss) {
      setHiddenCss(true);
      e.preventDefault();
    }
  }

  if (hiddenCss) {
    return (
      <>
        <section className="IntroContainer">
          <div className="cardsContainer">
            <Cards
              chosenAnimal={chosenAnimal}
              setChosenAnimal={setChosenAnimal}
              setHiddenCss={setHiddenCss}
              hiddenCss={hiddenCss}
              animals={animals}
            />
          </div>
        </section>
      </>
    );
  } else {
    return (
      <>
        <section className="IntroContainer">
          <div className="fillContainer"></div>

          <section className={"animal-overlay" + hiddenClass}>
            <a className="close-btn-wrapper" href="">
              <img
                className="close-btn"
                src={CloseOverlayBtn}
                alt=""
                onClick={(e) => handleCloseClick(e)}
              />
            </a>
            <h1>{chosenAnimal.name}</h1>
            <h2>{chosenAnimal.desc}</h2>
            <img className="vet-logo" src={VetLogo} alt="" />
            <div className="overlay-wrapper">
              <div className="img-wrapper">
                <img className="overlay-img" src={chosenAnimal.image} alt="" />
              </div>
              <div className="info-wrapper">
                <p>Ålder: {chosenAnimal.age} år</p>
                <p>Kön: {chosenAnimal.gender}</p>
                <p>Finns i {chosenAnimal.location}</p>
                <p>Djuret ankom till rescue rabbits {chosenAnimal.uploaded}</p>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking.
                </p>
              </div>
            </div>
            <p className="link-text">
              Läs mer om HUNDAR och hur man sköter dem <a href="#">HÄR!</a>
            </p>
            <button className="animal-btn">ANMÄL INTRESSE</button>
          </section>
        </section>
      </>
    );
  }
};

export default Main;
