import "./Header.scss";

import Logo from "../../assets/logo.svg";
import Search_Btn from "../../assets/search-btn.svg";
import { Animal } from "../../models/animalInterface";
import jsonData from "../../animals.json";
import burgerMenu from "../../assets/menu.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  setAnimals: (animals: Animal[]) => void;
  setQueriedAnimals: (queriedAnimals: string) => void;
  menuVisible: boolean;
  setMenuVisible: (menuVisible: boolean) => void;
  setHiddenCss: (hiddenCss: boolean) => void;
  hiddenCss: boolean;
}
function Header({
  setAnimals,
  setQueriedAnimals,
  menuVisible,
  setMenuVisible,
  setHiddenCss,
  hiddenCss,
}: Props) {
  let allAnimals: Array<Animal> = jsonData.animals;
  const [query, setQuery] = useState<string>("".toLowerCase());
  let visibleClass: string = menuVisible ? " visible" : "";
  const navigate = useNavigate();
  const handleMenuClick: () => void = () => {
    setMenuVisible(!menuVisible);
  };

  function navigateHome() {
    navigate("/");
  }

  const getInputValue: (event: any) => void = (event: any) => {
    setQuery(event.target.value.toLowerCase());
    if (event.keyCode === 13) {
      sortSearch(query);
      setQueriedAnimals(`Visar alla sökningar för "${query}"`);
      navigate("/");
      setHiddenCss(true);
    }
  };

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
    setQueriedAnimals(`Visar alla sökningar för "${query}"`);
    navigate("/");
    setHiddenCss(true);
  };

  const handleOverlayCategory = (e: any) => {
    const filteredAnimals: Array<Animal> = [...allAnimals];
    let newFilteredAnimals: Array<Animal> = filteredAnimals.filter(
      (dog) => dog.animal === e.target.innerHTML
    );
    setAnimals(newFilteredAnimals);
    setQueriedAnimals(
      `Visar alla sökningar för "${newFilteredAnimals[0].animal}"`
    );
    setMenuVisible(!menuVisible);
    e.preventDefault();
  };

  const showAllAnimals: (e: any) => void = (e: any) => {
    setAnimals(allAnimals);
    setMenuVisible(!menuVisible);
    setQueriedAnimals(`Visar alla sökningar för "Alla Djur"`);
    e.preventDefault();
  };

  return (
    <header>
      <div className={`sidebar__overlay ${visibleClass}`}>
        <h1>NAVIGERING</h1>
        <ul>
          <a onClick={showAllAnimals} className="menu-link" href="">
            Alla djur
          </a>
          <a
            onClick={(e) => handleOverlayCategory(e)}
            className="menu-link"
            href=""
          >
            Hund
          </a>
          <a
            onClick={(e) => handleOverlayCategory(e)}
            className="menu-link"
            href=""
          >
            Katt
          </a>
          <a
            onClick={(e) => handleOverlayCategory(e)}
            className="menu-link"
            href=""
          >
            Markatta
          </a>
          <a
            onClick={(e) => handleOverlayCategory(e)}
            className="menu-link"
            href=""
          >
            Minigris
          </a>
          <a
            onClick={(e) => handleOverlayCategory(e)}
            className="menu-link"
            href=""
          >
            Hamster
          </a>
        </ul>
        {/* <h1>HÄR FINNS VI</h1>
        <ul>
          <a>Stockholm</a>
          <a>Göteborg</a>
          <a>Karlstad</a>
          <a>Linköping</a>
        </ul> */}
      </div>
      <div className="header__wrapper">
        <section className="header__title">
          <img
            onClick={handleMenuClick}
            className="hamburger"
            src={burgerMenu}
            alt=""
          />
          <a onClick={navigateHome} href="">
            <img className="logo" src={Logo} alt="" />
          </a>
          <a onClick={navigateHome} href="" className="main-title">
            Rescue Rabbits
          </a>
        </section>
        <section className="header__search">
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
      </div>
    </header>
  );
}

export default Header;
