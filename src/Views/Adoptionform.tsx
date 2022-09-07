import "./AdoptionForm.scss";
import React from "react";
import { useNavigate } from 'react-router-dom';

const adoptionForm = () => {
  
  const navigate = useNavigate();

  const gotoStart = () => {
    navigate('/');
  }

  return (
    <div className="adoptionContainer">
      <section>
        <h1> Vad kul att du vill rädda ett djur!</h1>
        <p>
          Att adoptera ett djur ger dig inte bara en ny vän, utan en ny
          familjemedlem. Eftersom vi vill vara säkra på att djurets nya hem ska
          bli deras sista så tar vi in ansökningar löpande, och våra handläggare
          går igenom varje ansökan noggrant för att välja ut det bästa hemmet
          för djuret. För att göra en intresseanmälan för djuret behöver du
          fylla i detta formulär.
        </p>
        <div className="container">
          <form action="submit">
            <div className="flex-column">
              <label htmlFor="fname">Namn</label>
              <input
                required
                type="text"
                id="fname"
                name="firstname"
                placeholder="Ditt namn"
              ></input>
            </div>
            <div className="flex-column">
              <label htmlFor="lname">E-post</label>
              <input
                required
                type="text"
                id="lname"
                name="lastname"
                placeholder="Your last name.."
              ></input>
            </div>
            <div className="flex-column">
              <label htmlFor="adress">Adress</label>
              <textarea
                required
                id="adress"
                name="adress"
                placeholder="Skriv din adress här."
              ></textarea>
            </div>
            <div>
              <input className="submit" type="submit" value="Skicka" onClick={gotoStart}></input>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default adoptionForm;
