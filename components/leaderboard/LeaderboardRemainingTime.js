"use client";

import { useEffect, useState } from "react";

import { getTargetDate, getRemainingDays } from "@/lib/utils";

export const LeaderboardRemainingTime = () => {
  const [remainingTime, setRemainingTime] = useState(() => {
    const targetDate = getTargetDate();
    return getRemainingDays(targetDate);
  });

  const updateTime = () => {
    const targetDate = getTargetDate();
    setRemainingTime(getRemainingDays(targetDate));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Inside interval");
      updateTime();
    }, 300);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="leaderboard">
      <h3 className="title">Leaderboard is ending</h3>
      <p className="subtitle">
        The winners will be determined when the timer runs out
      </p>
      <div className="times__remaining">
        <div className="day">
          <p className="num">{remainingTime.day}</p>
          <p>Days</p>
        </div>
        <div className="hours">
          <p className="num">{remainingTime.hour}</p>
          <p>Hours</p>
        </div>
        <div className="mins">
          <p className="num">{remainingTime.minute}</p>
          <p>Minutes</p>
        </div>
        <div className="sec">
          <p className="num">{remainingTime.second}</p>
          <p>Seconds</p>
        </div>
      </div>
    </div>
  );
};
