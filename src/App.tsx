import { useState } from "react";
import "./App.css";
import Main from "./components/Main";
import Header from './components/Header';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
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
      <Main />
      <aside>
        <h1>HÄR FINNS VI</h1>
        <ul>
          <li>Stockholm</li>
          <li>Göteborg</li>
          <li>Karlstad</li>
          <li>Linköping</li>
        </ul>
      </aside>

      <footer>
        <h1>Rescue Rabbits</h1>
      </footer>
    </div>
  );
}

export default App;
