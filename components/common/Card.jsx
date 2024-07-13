import "../../styles/card.css";

export default function Card() {
  return (
    <div className="card">
      <div className="title">
        <h3>csgo roll</h3>
      </div>
      <div className="rewards">
        <h3>Rewards</h3>
        <p>DAILY FREE CASES + RAKEBACK</p>
        <p>5% DEPOSIT BONUS</p>
        <p>COMPETE IN MONTHLY RACE</p>
      </div>
      <p className="use__code">Use Code</p>
      <div className="card__btn">
        <button className="btn__card">Splash</button>
      </div>
    </div>
  );
}
