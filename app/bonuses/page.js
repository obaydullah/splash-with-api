import Card from "@/components/common/Card";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Hero from "@/components/common/Hero";
import "../../styles/bonuses.css";

export default function Bonuses() {
  return (
    <>
      <Header />
      <Hero content={false} img="/images/hero__bonuses.png" />

      <div className="partners">
        <div className="container">
          <div className="partner">
            <img src="/images/partners__title.png" alt="" />

            <div className="partner__card">
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </div>

      <div className="others">
        <div className="container">
          <div className="other">
            <img src="/images/other.png" alt="" />

            <div className="other__card">
              <div className="other__card--item">
                <Card />
                <Card />
                <Card />
              </div>
              <div className="other__card--item">
                <Card />
                <Card />
                <Card />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="gamble__area">
        <div className="container">
          <div className="gamble">
            <h3>Gamble Responsibly</h3>
            <p>
              For more information and advice visit{" "}
              <a href="#">begambleaware.org</a>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
