import "./Locations.scss";
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

function Locations({
  setAnimals,
  setQueriedAnimals,
  formView,
  setFormView,
  setHiddenCss,
  hiddenCss,
}: Props) {
  const navigate = useNavigate();
  const handleLocation = (e: any) => {
    const allAnimals: Array<Animal> = jsonData.animals;
    if (formView || hiddenCss) {
      setFormView(true);
      setHiddenCss(true);
      navigate("/");
    }
    const filteredLocations: Array<Animal> = [...allAnimals];
    let newFilteredLocations: Array<Animal> = filteredLocations.filter(
      (location) => location.location === e.target.innerHTML
    );
    setAnimals(newFilteredLocations);
    setQueriedAnimals(
      `Visar alla sökningar för "${newFilteredLocations[0].location}"`
    );
  };

  return (
    <aside className="hidden-sidebar">
      <h1>HÄR FINNS VI</h1>
      <ul>
        <a onClick={(e) => handleLocation(e)}>Stockholm</a>
        <a onClick={(e) => handleLocation(e)}>Göteborg</a>
        <a onClick={(e) => handleLocation(e)}>Karlstad</a>
        <a onClick={(e) => handleLocation(e)}>Linköping</a>
      </ul>
    </aside>
  );
}

export default Locations;
