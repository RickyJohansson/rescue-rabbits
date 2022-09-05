import "./Card.scss";

let animalName = "Charles";
function Card() {
  return (
    <>
      <article className="animalCard">
        <h1>{animalName}</h1>
        <img src="https://placehold.jp/150x150.png" alt="" />
      </article>
    </>
  );
}

export default Card;
