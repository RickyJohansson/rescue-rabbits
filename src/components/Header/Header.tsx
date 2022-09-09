import "./Header.scss";
<<<<<<< Updated upstream:src/components/Header/Header.tsx
import Logo from "../../assets/logo.svg";
import Search_Btn from "../../assets/search-btn.svg";
import { Animal } from "../../models/animalInterface";
import jsonData from "../../animals.json";
=======
import Logo from "../assets/logo.svg";
import Search_Btn from "../assets/search-btn.svg";
import { Animal } from "../models/animalInterface";
import jsonData from "../animals.json";
import { useNavigate } from 'react-router-dom';
>>>>>>> Stashed changes:src/components/Header.tsx

interface Props {
  setAnimals: (animals: Animal[]) => void;
}

function Header({ setAnimals }: Props) {
  let allAnimals = jsonData.animals;
  let query = "".toLowerCase();

  const navigate = useNavigate();

  function navigateHome() {
    navigate('/');
  }

  function getInputValue(event: any) {
    query = event.target.value;
    const filteredAnimals = [...allAnimals];
    if (event.keyCode == 13) {
      let newFilteredAnimals: Animal[] = filteredAnimals.filter((animal) => {
        if (animal.animal.toLowerCase() === query) {
          return animal.animal;
        } else if (animal.location.toLowerCase() === query) {
          return animal.location;
        } else if (animal.name.toLowerCase() === query) {
          return animal.name;
        } else if (animal.keyWords.includes(query)) {
          return animal.keyWords;
        }
      });
      setAnimals(newFilteredAnimals);
    }
  }

  function handleSearchButton() {
    const filteredAnimals = [...allAnimals];
    let newFilteredAnimals: Animal[] = filteredAnimals.filter((animal) => {
      if (animal.animal.toLowerCase() === query) {
        return animal.animal;
      } else if (animal.location.toLowerCase() === query) {
        return animal.location;
      } else if (animal.name.toLowerCase() === query) {
        return animal.name;
      } else if (animal.keyWords.includes(query)) {
        return animal.keyWords;
      }
    });
    setAnimals(newFilteredAnimals);
  }

  return (
    <header>
      <section>
        <a onClick={ navigateHome } ><img className="logo" src={Logo} alt="" /></a>
        <h1>Rescue Rabbits</h1>
      </section>
      <section>
        <input onKeyUp={getInputValue} type="text" placeholder="SÖK" />
        <a>
          <img
            onClick={handleSearchButton}
            className="search-btn"
            src={Search_Btn}
            alt=""
          />
        </a>
      </section>
    </header>
  );
}

export default Header;
