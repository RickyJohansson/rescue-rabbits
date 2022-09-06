import "./AdoptionForm.scss";
import React from "react";

const adoptionForm = () => {
  return (
    <div>
      <div className="adoptionContainer">
        <h1> Vad kul att du vill rädda ett djur!</h1>
        <p>
          Att adoptera ett djur ger dig inte bara en ny vän, utan en ny
          familjemedlem. Eftersom vi vill vara säkra på att djurets nya hem ska
          bli deras sista så tar vi in ansökningar löpande, och våra handläggare
          går igenom varje ansökan noggrant för att välja ut det bästa hemmet
          för djuret. För att göra en intresseanmälan för djuret behöver du
          fylla i detta formulär.
        </p>
      </div>
      <div className="container">
        <form action="submit">
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name.."
          ></input>

          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Your last name.."
          ></input>

          <label htmlFor="subject">Adress</label>
          <textarea
            id="subject"
            name="subject"
            placeholder="Skriv din adress här."
          ></textarea>

          <input type="submit" value="Submit"></input>
        </form>
      </div>
    </div>
  );
};

export default adoptionForm;
