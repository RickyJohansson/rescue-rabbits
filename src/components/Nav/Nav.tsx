import "./Nav.scss";
import { Animal } from "../../models/animalInterface";
import jsonData from "../../animals.json";
import { useNavigate } from "react-router-dom";
interface Props {
  setAnimals: (animals: Animal[]) => void;
  setQueriedAnimals: (queriedAnimals: string) => void;
  formView: boolean;
  setFormView: (formView: boolean) => void;
  setHiddenCss: (hiddenCss: boolean) => void;
  hiddenCss: boolean;
}

function Nav({
  setAnimals,
  setQueriedAnimals,
  formView,
  setFormView,
  setHiddenCss,
  hiddenCss,
}: Props) {
  const navigate = useNavigate();
  let allAnimals: Array<Animal> = jsonData.animals;

  const handleCategory = (e: any) => {
    const filteredAnimals: Array<Animal> = [...allAnimals];
    let newFilteredAnimals: Array<Animal> = filteredAnimals.filter(
      (dog) => dog.animal === e.target.innerHTML
    );
    if (formView || hiddenCss) {
      setFormView(true);
      setHiddenCss(true);
      navigate("/");
    }
    setAnimals(newFilteredAnimals);
    setQueriedAnimals(
      `Visar alla sökningar för "${newFilteredAnimals[0].animal}"`
    );
  };

  const showAllAnimals: () => void = () => {
    setAnimals(allAnimals);
    setQueriedAnimals(`Visar alla sökningar för "Alla Djur"`);
  };

  return (
    <nav className="hidden-sidebar">
      <h1>NAVIGERING</h1>
      <ul>
        <a onClick={showAllAnimals}>Alla Djur</a>
        <a onClick={(e) => handleCategory(e)}>Hund</a>
        <a onClick={(e) => handleCategory(e)}>Katt</a>
        <a onClick={(e) => handleCategory(e)}>Markatta</a>
        <a onClick={(e) => handleCategory(e)}>Minigris</a>
        <a onClick={(e) => handleCategory(e)}>Hamster</a>
      </ul>
    </nav>
  );
}

export default Nav;
