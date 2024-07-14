import { formatter } from "@/lib/utils";
import "../../styles/winnersCard.css";

export default function WinnersCard({ img, username, wagerAmount }) {
  return (
    <>
      <div className="leaderboard__card">
        <img src={img} alt="" />
        <div className="leaderboard__card--content">
          <p className="user">User</p>
          <h3 className="name">{username}</h3>
          <p className="wagered">Wagered</p>
          <p className="amount">
            <span>$</span>
            {formatter.format(wagerAmount)}
          </p>
          <p className="reward">Reward</p>

          <a href="#" className="leaderboard__card--btn">
            $50
          </a>
        </div>
      </div>
    </>
  );
}
