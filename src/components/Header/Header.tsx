import "./Header.scss";

import Logo from "../../assets/logo.svg";
import Search_Btn from "../../assets/search-btn.svg";
import { Animal } from "../../models/animalInterface";
import jsonData from "../../animals.json";
import { useNavigate } from "react-router-dom";
import burgerMenu from "../../assets/menu.svg";
import { useState } from 'react';

interface Props {
  setAnimals: (animals: Animal[]) => void;
}

function Header({ setAnimals }: Props) {
  let allAnimals: Array<Animal> = jsonData.animals;
  const [query, setQuery] = useState<string>("".toLowerCase());

  const navigate = useNavigate();

  const navigateHome: () => void = () => {
    navigate("/");
  }


  const getInputValue: (event: any) => void = (event: any) => {
    setQuery(event.target.value);
    if (event.keyCode === 13) {
      sortSearch(query);
    }
  }

  const sortSearch: (query: string) => void = (query: string) => {
    const filteredAnimals: Array<Animal> = [...allAnimals];
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
      <section className="header__title">
        <img className="burgerMenu" src={burgerMenu} alt="" />
        <a onClick={navigateHome}>
          <img className="logo" src={Logo} alt="" />
        </a>
        <h1>Rescue Rabbits</h1>
      </section>
      <section>
        <input onKeyUp={getInputValue} type="text" placeholder="SÖK" />
        <a>
          <img
            onClick={() => sortSearch(query)}
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
