import "../../styles/leaderboard.css";

export default function Leaderboard() {
  return (
    <div className="leaderboard__area">
      <div className="leaderboard">
        <div className="container">
          <img src="/images/leaderboard.png" alt="" />
          <div className="leaderboard__btn">
            <a href="#" className="btn__round">
              view leaderboards
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
