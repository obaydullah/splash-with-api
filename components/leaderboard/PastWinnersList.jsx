"use client";

import { useEffect, useState } from "react";
import PastWinnersModal from "./PastWinnersModal";
import WinnersCard from "./WinnersCard";

export const PastWinnersList = () => {
  const [showWinnersModal, setShowWinnersModal] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [month, setMonth] = useState(new Date().getUTCMonth() - 1);
  const [year, setYear] = useState(new Date().getUTCFullYear());

  const getPastWinnersList = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/leaderboard", {
        method: "POST",
        body: JSON.stringify({
          month: month + 1,
          year,
        }),
      });

      const data = await response.json();

      if (data && data?.data && data?.data?.leaderboard) {
        setData(data?.data?.leaderboard);
      }

      console.log(data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("effect");
    getPastWinnersList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [month]);

  const handleModal = () => {
    setShowWinnersModal(!showWinnersModal);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log("Updating...");

  return (
    <>
      <div className="past__winners">
        <div className="container">
          <h3 className="winners__title">PAST WINNERS</h3>
          {data?.length >= 3 && (
            <div className="past__winner">
              <WinnersCard
                img="/images/past-winner-1.png"
                wagerAmount={data[0].wagerAmount}
                username={data[0].username}
              />
              <WinnersCard
                img="/images/past-winner-1.png"
                wagerAmount={data[1].wagerAmount}
                username={data[1].username}
              />
              <WinnersCard
                img="/images/past-winner-1.png"
                wagerAmount={data[2].wagerAmount}
                username={data[2].username}
              />
            </div>
          )}

          <button className="past__winner--btn" onClick={handleModal}>
            View All
          </button>
        </div>
      </div>

      {showWinnersModal && (
        <PastWinnersModal
          showWinnersModal={showWinnersModal}
          setShowWinnersModal={setShowWinnersModal}
          data={data.slice(0, 10)}
          month={month}
          year={year}
          setMonth={setMonth}
          setYear={setYear}
          loading={loading}
          setLoading={setLoading}
        />
      )}
    </>
  );
};
