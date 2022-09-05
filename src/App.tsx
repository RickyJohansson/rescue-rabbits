import { useState } from "react";
import "./App.css";
import Main from "./components/Main";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header>
        <h1>Rescue Rabbits</h1>
      </header>

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
