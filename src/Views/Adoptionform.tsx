import "./AdoptionForm.scss";
import React from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  setHiddenCss: (hiddenCss: boolean) => void;
}

const adoptionForm = ({ setHiddenCss }: Props) => {
  const navigate = useNavigate();

  const gotoStart = () => {
    setHiddenCss(true);
    navigate("/");
  };

  return (
    <div className="adoptionContainer">
      <h1> Vad kul att du vill rädda ett djur!</h1>
      <p>
        Att adoptera ett djur ger dig inte bara en ny vän, utan en ny
        familjemedlem. Eftersom vi vill vara säkra på att djurets nya hem ska
        bli deras sista så tar vi in ansökningar löpande, och våra handläggare
        går igenom varje ansökan noggrant för att välja ut det bästa hemmet för
        djuret. För att göra en intresseanmälan för djuret behöver du fylla i
        detta formulär.
      </p>
      <div className="container">
        <form action="submit">
          <div className="flex-column">
            <label htmlFor="phonenumber">Telefonnummer</label>
            <input
              required
              type="text"
              id="phonenumber"
              name="phonenumber"
              placeholder="Ditt telefonnummer"
            ></input>
          </div>
          <div className="flex-column">
            <label htmlFor="fname">Förnamn</label>
            <input
              required
              type="text"
              id="fname"
              name="fname"
              placeholder="Ditt förnamn"
            ></input>
          </div>
          <div className="flex-column">
            <label htmlFor="lname">Efternamn</label>
            <input
              required
              type="text"
              id="lname"
              name="lname"
              placeholder="Ditt efternamn"
            ></input>
          </div>
          <div className="flex-column">
            <label htmlFor="email">E-post</label>
            <input
              required
              type="text"
              id="email"
              name="email"
              placeholder="Din e-postadress"
            ></input>
          </div>

          <div className="flex-column">
            <label htmlFor="adress">Adress</label>
            <textarea
              className="adress-field"
              required
              id="adress"
              name="adress"
              placeholder="Skriv din adress här."
            ></textarea>
          </div>
          <div className="radio-buttons-container">
            <div className="radio-question">
              <p>Har du haft djur tidigare?</p>
            </div>
            <div>
              <input
                className="submit"
                type="submit"
                value="Skicka"
                onClick={gotoStart}
              ></input>
            </div>
          </div>
          <div className="submit-container">
            <input className="submit" type="submit" value="Skicka"></input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default adoptionForm;
