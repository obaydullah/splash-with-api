import { IoIosClose } from "react-icons/io";
import "../../styles/pastWinnersModal.css";
import { useEffect, useState } from "react";
import { renderMonth } from "@/lib/utils/render-month";
import { formatter } from "@/lib/utils";

export default function PastWinnersModal({
  showWinnersModal,
  setShowWinnersModal,
  data,
  loading,
  setMonth,
  setYear,
  month,
  year,
}) {
  const hndleModalClose = () => {
    setShowWinnersModal(!showWinnersModal);
  };

  const handlePreviousButtonClick = () => {
    if (month >= 11) {
      setYear((prevState) => prevState + 1);
      setMonth(0);
    } else {
      setMonth((prevState) => prevState + 1);
    }
  };
  const handleNextButtonClick = () => {
    if (month <= 0) {
      setYear((prevState) => prevState - 1);
      setMonth(11);
    } else {
      setMonth((prevState) => prevState - 1);
    }
  };

  const isPrevoiusDisabled = () => {
    const date = new Date();
    if (month + 1 >= date.getUTCMonth() && year === date.getUTCFullYear()) {
      return true;
    }
    return false;
  };

  return (
    <>
      <div className="winners__modal--area">
        <div className="container">
          <div className="winners__modal">
            <div className="modal__header">
              <h3 className="modal__title">Past Winners</h3>
              <p className="modal__subtitle">
                Viewing month of {renderMonth(month)} {year}
              </p>
              <IoIosClose className="modal__close" onClick={hndleModalClose} />
            </div>

            <div className="modal__table">
              <div className="modal__header--bottom">
                <p className="place">Place</p>
                <p className="username">Username</p>
                <p className="wagered">Wagered</p>
                <p className="prize">Prize</p>
              </div>

              {loading && <div>Loading data...</div>}

              {!loading &&
                data?.map((item, index) => (
                  <div className="modal__table--item" key={index}>
                    <p className="item__sl">{index + 1}</p>
                    <p className="item__name">{item.username}</p>
                    <p className="item__wagered">
                      {formatter.format(item.wagerAmount)}
                    </p>
                    <p className="item__prize">$500</p>
                  </div>
                ))}

              <div className="modal__pagination">
                <button
                  onClick={handlePreviousButtonClick}
                  className="btn__pagination"
                  disabled={isPrevoiusDisabled()}
                >
                  Previous Page
                </button>
                {/* <div className="pagination__num">
                  <button className="pagination__num--btn">1</button>
                  <button className="pagination__num--btn">2</button>
                  <button className="pagination__num--btn">3</button>
                  <button className="pagination__num--btn">4</button>
                </div> */}
                <button
                  className="btn__pagination"
                  onClick={handleNextButtonClick}
                >
                  Next Page
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
