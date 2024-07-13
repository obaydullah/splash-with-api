import { LeaderboardRemainingTime } from "./LeaderboardRemainingTime";
import { formatter } from "@/lib/utils";

const buildUrl = () => {
  const API_BASE_URL =
    "https://packdraw.com/api/v1/affiliates/leaderboard?after=";
  const API_KEY = "e174b184-87d4-47e4-85da-1fac082d9461";

  const time = `${new Date().getMonth()}-01-${new Date().getUTCFullYear()}`;

  return `${API_BASE_URL}${time}&apiKey=${API_KEY}`;
};

const getData = async () => {
  try {
    const response = await fetch(buildUrl());
    const data = await response.json();
    if (data?.leaderboard?.length > 0) {
      return data;
    } else {
      console.log("Error", data);
    }
  } catch (error) {
    console.error(error);
  }
  return null;
};

export const Leaderboard = async () => {
  const data = await getData();
  return (
    <>
      {/* Leaderboard Card Area Start */}
      <div className="leaderboard__card--area">
        <div className="container">
          <div className="leaderboard__cards">
            <div className="leaderboard__card">
              <img src="/images/leaderboard-card-1.png" alt="" />
              <div className="leaderboard__card--content">
                <p className="user">User</p>
                <h3 className="name">{data?.leaderboard[1].username}</h3>
                <p className="wagered">Wagered</p>
                <p className="amount">
                  <span>$</span>
                  {formatter.format(data?.leaderboard[1].wagerAmount)}
                </p>
                <p className="reward">Reward</p>

                <a href="#" className="leaderboard__card--btn">
                  $50
                </a>
              </div>
            </div>
            <div className="leaderboard__card middle">
              <img src="/images/leaderboard-card-2.png" alt="" />
              <div className="leaderboard__card--content">
                <p className="user">User</p>
                <h3 className="name">{data?.leaderboard[0].username}</h3>
                <p className="wagered">Wagered</p>
                <p className="amount">
                  <span>$</span>
                  {formatter.format(data?.leaderboard[0].wagerAmount)}
                </p>
                <p className="reward">Reward</p>

                <a href="#" className="leaderboard__card--btn">
                  $50
                </a>
              </div>
            </div>
            <div className="leaderboard__card">
              <img src="/images/leaderboard-card-3.png" alt="" />
              <div className="leaderboard__card--content">
                <p className="user">User</p>
                <h3 className="name">{data?.leaderboard[2].username}</h3>
                <p className="wagered">Wagered</p>
                <p className="amount">
                  <span>$</span>
                  {formatter.format(data?.leaderboard[2].wagerAmount)}
                </p>
                <p className="reward">Reward</p>

                <a href="#" className="leaderboard__card--btn">
                  $50
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Leaderboard Card Area End */}

      {/* Leaderboard List Start */}

      <div className="leaderboard__area">
        <div className="container">
          <div className="leaderboard__inner">
            <LeaderboardRemainingTime />

            <div className="challengers">
              <h3 className="challengers__title">Challengers</h3>

              <div className="challengers__header">
                <p>place</p>
                <p>username</p>
                <p>Wagered</p>
                <p>Prize</p>
              </div>
              <div className="challengers__table">
                {data?.leaderboard?.slice(3, 10).map((challenger, index) => (
                  <div className="challengers__item" key={index}>
                    <p className="sl">{index + 4}</p>
                    <p className="name">{challenger?.username}</p>
                    <p className="challengers__num">
                      {formatter.format(challenger?.wagerAmount)}
                    </p>
                    <p className="challengers__prize">$500</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Leaderboard List End */}
    </>
  );
};
