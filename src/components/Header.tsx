import "./Header.scss";
import Logo from "../assets/logo.svg";
import Search_Btn from "../assets/search-btn.svg";
import { Animal } from "../models/animalInterface";
import jsonData from "../animals.json";

interface Props {
    setAnimals: (animals: Animal[]) => void;
}

function Header({setAnimals}: Props) {

    let allAnimals = jsonData.animals;
    let query = '';

    function getInputValue(event: any) {
        console.log(event.target.value);
        query = event.target.value;
        if (event.keyCode == 13) {
            handleSearchQuery(query);
        }  
    }

    // TODO: lägg in && på rad 19 och animal.location/name, etc
    //if...else if
    // och sen var det väl att flytta över rad 29+30 + 35 va?
    // så har vi allt i en och samma funktion
    //Japp .. ok, men då har vi väl den info som behövs nu..? resten kommer vi ihg till imon!
    // Minns fan inte vad vi gjorde tidigare idag. =P


    function handleSearchQuery(event: any) {
        const filteredAnimals = [...allAnimals];
        let newFilteredAnimals = filteredAnimals.filter(animal => animal.animal === query);
        // let newFilteredNames = filteredAnimals.filter(animal => animal.name === query);
        // let newFilteredLocations = filteredAnimals.filter(animal => animal.location === query);
        console.log(newFilteredAnimals);
        
        setAnimals(newFilteredAnimals);  
         
    }

    return (
        <header>
        <section>
            <img className="logo" src={ Logo } alt="" />
            <h1>Rescue Rabbits</h1>
        </section>
        <section>
            <input onKeyUp={ getInputValue } type="text" placeholder="SÖK" />
            <a>
            <img onClick={ handleSearchQuery } className="search-btn" src={ Search_Btn } alt="" />
            </a>
        </section>
        </header>
    );
    }

export default Header;
