import "./Main.scss";
import Cards from "../Cards/Cards";
import { useEffect } from "react";
import { Animal } from "../../models/animalInterface";
import CloseOverlayBtn from "../../assets/close-overlay.svg";
import VetLogo from "../../assets/vet-logo.svg";
import { useNavigate } from "react-router-dom";

interface Props {
  animals: Animal[];
  setHiddenCss: (hiddenCss: boolean) => void;
  hiddenCss: boolean;
  setChosenAnimal: (chosenAnimal: Animal) => void;
  chosenAnimal: Animal;
  adoptedCss: boolean;
  setAdoptedCss: (adoptedCss: boolean) => void;
}

const Main = ({
  animals,
  setHiddenCss,
  hiddenCss,
  setChosenAnimal,
  chosenAnimal,
  adoptedCss,
  setAdoptedCss,
}: Props) => {
  let hiddenClass: string = hiddenCss ? " hidden" : "";
  const navigate = useNavigate();
  function handleCloseClick(e: any) {
    if (!hiddenCss) {
      setHiddenCss(true);
      e.preventDefault();
    }
  }

  const gotoAdoptionform: () => void = () => {
    if (!chosenAnimal.adopted) {
      navigate("/1");
      setHiddenCss(!hiddenCss);
    }
  };

  let adoptedText: string = "";
  let adoptedBtn: string = adoptedCss ? " adopted-btn" : "";

  useEffect(() => {
    if (chosenAnimal.adopted) {
      setAdoptedCss(true);
    } else {
      setAdoptedCss(false);
    }
  }, [hiddenCss]);

  if (chosenAnimal.adopted) {
    adoptedText =
      "OBS! Detta djuret är redan adopterat och går inte att anmäla intresse på.";
  } else {
    adoptedText = "";
  }

  if (hiddenCss) {
    return (
      <section className="IntroContainer">
        <p className="intro-text">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s. When an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions of Lorem.
        </p>
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
            <div className="header-wrapper">
              <div className="header-vet-container">
                <img className="vet-logo" src={VetLogo} alt="" />
              </div>
              <div className="header-text-container">
                <h1>{chosenAnimal.name}</h1>
                <h2>{chosenAnimal.animal}</h2>
              </div>
            </div>
            <div className="overlay-wrapper">
              <div className="img-wrapper">
                <img className="overlay-img" src={chosenAnimal.image} alt="" />
              </div>
              <div className="info-wrapper">
                <p>
                  <span>Ålder:</span> {chosenAnimal.age} år
                </p>
                <p>
                  <span>Kön:</span> {chosenAnimal.gender}
                </p>
                <p>
                  <span>Finns i:</span> {chosenAnimal.location}
                </p>
                <p>
                  <span>Djuret ankom till rescue rabbits:</span>{" "}
                  {chosenAnimal.uploaded}
                </p>
                <br />
                <p>{chosenAnimal.desc}</p>
                <p className="adopted-text">{adoptedText}</p>
              </div>
            </div>
            <p className="link-text">
              Läs mer om {chosenAnimal.animal} och hur man sköter dem{" "}
              <a href="#">HÄR!</a>
            </p>
            <button
              className={"animal-btn" + adoptedBtn}
              onClick={gotoAdoptionform}
            >
              ANMÄL INTRESSE
            </button>
          </section>
        </section>
      </>
    );
  }
};

export default Main;
