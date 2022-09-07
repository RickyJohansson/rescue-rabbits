import './Nav.scss';
import { Animal } from "../models/animalInterface";
import jsonData from "../animals.json";

interface Props {
    setAnimals: (animals: Animal[]) => void;
}

function Nav({setAnimals}: Props) {

    let allAnimals = jsonData.animals

    const handleCategory = (e: any) => {

        const filteredAnimals = [...allAnimals]
        let newFilteredAnimals = filteredAnimals.filter(dog => dog.animal === e.target.innerHTML)
        setAnimals(newFilteredAnimals);

    }


    const showAllAnimals = () => {

        setAnimals(allAnimals);

    }


    return (
        <nav>
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