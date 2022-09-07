import './Locations.scss';
import { Animal } from "../models/animalInterface";

interface Props {
    animals: Animal[],
    setAnimals: (animals: Animal[]) => void;
}

function Locations({animals, setAnimals}: Props) {

  const handleLocation = (e: any) => {
    let filteredLocations = animals.filter(location => location.animal === e.target.innerHTML)
    setAnimals(filteredLocations);
    console.log(e.target.innerHTML);
}

  return (
    <aside>
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
