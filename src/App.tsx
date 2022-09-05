import { useState } from "react";
import "./App.css";
import Main from "./components/Main";
<<<<<<< Updated upstream
import Header from './components/Header';

=======
import Nav from "./components/Nav";
import Location from "./components/Locations";
>>>>>>> Stashed changes
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
<<<<<<< Updated upstream
      <Header />
      <nav>
        <h1>NAVIGERING</h1>
        <ul>
          <li>HUNDAR</li>
          <li>KATTER</li>
          <li>MARKATTOR</li>
          <li>MINIGRISAR</li>
          <li>HAMSTRAR</li>
        </ul>
      </nav>
=======
      <header>
        <h1>Rescue Rabbits</h1>
      </header>
      <Nav />
>>>>>>> Stashed changes
      <Main />
      <Location />

      <footer>
        <h1>Rescue Rabbits</h1>
      </footer>
    </div>
  );
}

export default App;
