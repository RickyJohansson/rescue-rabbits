import './Nav.scss';
import { Animal } from "../models/animalInterface";

interface Props {
    animals: Animal[],
    setAnimals: (animals: Animal[]) => void;
}

function Nav({animals, setAnimals}: Props) {

    const handleCategory = (e: any) => {
        let filteredAnimals = animals.filter(dog => dog.animal === e.target.innerHTML)
        setAnimals(filteredAnimals);
    }

    return (
        <nav>
            <h1>NAVIGERING</h1>
            <ul>
                <a onClick={(e) => handleCategory(e)}>Hundar</a>
                <a onClick={(e) => handleCategory(e)}>Katter</a>
                <a onClick={(e) => handleCategory(e)}>Markattor</a>
                <a onClick={(e) => handleCategory(e)}>Minigrisar</a>
                <a onClick={(e) => handleCategory(e)}>Hamstrar</a>
            </ul>
        </nav>
    );
}

export default Nav;