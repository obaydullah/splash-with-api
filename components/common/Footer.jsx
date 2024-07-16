import Link from "next/link";
import "../../styles/footer.css";

export default function Footer() {
  return (
    <div className="footer__area">
      <div className="container">
        <div className="footer">
          <div className="footer__left">
            <Link href="/">Home</Link>
            <Link href="/leaderboard">Leaderboard</Link>
            <Link href="/bonuses">Bonuses</Link>
          </div>
          <div className="footer__middle">
            <img src="/images/footer__logo.png" alt="" />
          </div>
          <div className="footer__right">
            <a href="#">Challanges</a>
            <a href="#">Social</a>
            <a href="#">Register</a>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            18+ | Gamble Responsibly | BeGambleAware. Most people gamble for fun
            and enjoyment. Do not think of gambling as a way to make money.
          </p>

          <div className="footer__bottom--right">
            <p>Site by</p>
            <img src="/images/footer__bottom--logo.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
