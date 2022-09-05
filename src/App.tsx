import { useState } from "react";
import "./App.css";
import Header from './components/Header';
import Main from "./components/Main";
import Nav from "./components/Nav";
import Location from "./components/Locations";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <Nav />
      <Main />
      <footer>
        <h1>Rescue Rabbits</h1>
      </footer>
    </div>
  );
}

export default App;
