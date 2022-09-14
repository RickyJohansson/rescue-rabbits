import "./AdoptionForm.scss";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Animal } from "../models/animalInterface";
interface Props {
  setHiddenCss: (hiddenCss: boolean) => void;
  setFormView: (formView: boolean) => void;
  formView: boolean;
  chosenAnimal: Animal;
}

const adoptionForm = ({
  setHiddenCss,
  setFormView,
  formView,
  chosenAnimal,
}: Props) => {
  const navigate = useNavigate();

  const goToStart = () => {
    setHiddenCss(true);
    setFormView(!formView);
    navigate("/");
  };

  const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.target.value;
  };

  const submitHandler: () => void = () => {
    setFormView(!formView);
    console.log(formView);
  };
  if (formView) {
    return (
      <div className="adoptionContainer">
        <h1> Vad kul att du vill rädda {chosenAnimal.name}!</h1>
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
              <div className="flex-row">
                <div className="flex-row">
                  <input
                    className="radio-btn"
                    type="radio"
                    id="yes"
                    name="choose"
                    value="yes"
                    onChange={radioHandler}
                  />
                  <label htmlFor="yes">Ja</label>
                </div>

                <div className="flex-row">
                  <input
                    className="radio-btn"
                    type="radio"
                    id="no"
                    name="choose"
                    value="no"
                    onChange={radioHandler}
                  />
                  <label htmlFor="no">Nej</label>
                </div>
              </div>
            </div>
            <div className="submit-container">
              <input
                className="submit"
                type="submit"
                value="Skicka"
                onClick={submitHandler}
              ></input>
            </div>
          </form>
        </div>
      </div>
    );
  } else {
    return (
      <div className="post-submit-container">
        <h1>Tack för visat intresse! Vi hör av oss inom 3-29 arbetsdagar.</h1>
        <button className="submit" onClick={goToStart}>
          Tillbaka
        </button>
      </div>
    );
  }
};

export default adoptionForm;
