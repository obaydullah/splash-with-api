import "../../styles/giveway.css";

export default function Giveway() {
  return (
    <div className="giveway__area">
      <div className="container">
        <div className="giveway">
          <img src="/images/giveway.png" alt="" />
          <div className="giveway__content">
            <p className="total__amount">Total amount given away</p>
            <div className="giveway__amount">
              <div className="giveway__amount--inner">
                <p className="num">$</p>
                <p className="num">1</p>
                <span className="comma num">,</span>
                <p className="num">2</p>
                <p className="num">5</p>
                <p className="num">0</p>
                <span className="comma num">,</span>
                <p className="num">0</p>
                <p className="num">0</p>
                <p className="num">0</p>
              </div>
             
            </div>
            <a href="#" className="btn__round">
              how to compete?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
