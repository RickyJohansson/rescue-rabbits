import "./Cards.scss";
import Card from "./Card/Card";
import { Animal } from "../../models/animalInterface";

interface Props {
  animals: Animal[];
  setHiddenCss: (hiddenCss: boolean) => void;
  hiddenCss: boolean;
  setChosenAnimal: (chosenAnimal: Animal) => void;
  chosenAnimal: Animal;
}

const CardGrid = ({
  animals,
  hiddenCss,
  setHiddenCss,
  setChosenAnimal,
  chosenAnimal,
}: Props): JSX.Element => (
  <section className="cardsContainer">
    {animals.map((animal) => (
      <Card
        chosenAnimal={chosenAnimal}
        setChosenAnimal={setChosenAnimal}
        key={animal.animalId}
        animal={animal}
        hiddenCss={hiddenCss}
        setHiddenCss={setHiddenCss}
      />
    ))}
  </section>
);

export default CardGrid;
