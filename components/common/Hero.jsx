import { FaPlay } from "react-icons/fa";
import "../../styles/hero.css";

export default function Hero({ content, img }) {
  return (
    <div className="hero__area">
      <img src={img} alt="" className="hero__img" />
      <div className="container">
        {content && (
          <div className="hero__content">
            <div className="hero__btn">
              <a href="#" className="btn btn__primary">
                Bonuses
              </a>
              <a href="#" className="btn btn__primary">
                Leaderboard
              </a>
            </div>

            <div className="hero__play--btn">
              <div className="hero__play--btn--inner">
                <FaPlay className="play" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
