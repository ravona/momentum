import "./Streak.css";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import Countdown from "react-countdown";

export const Streak = ({ id, name, motivation }) => {
  let [StreakCount, setStreakCount] = useState(0);

  const handleIncrement = () => {
    // increment counter
    setStreakCount(StreakCount + 1);

    // start countdown
    ReactDOM.render(
      <Countdown onComplete={handleLoss} date={Date.now() + 2000} />,
      document.querySelector(`.streak-${id} .streak-countdown`)
    );
  };

  const handleLoss = () => {
    // reset counter
    setStreakCount((StreakCount = 0));

    // remove countdown
    ReactDOM.render(
      null,
      document.querySelector(`.streak-${id} .streak-countdown`)
    );
  };

  return (
    <>
      <div className={`streak streak-${id}`}>
        <span className="streak-icon streak-icon--close material-icons">
          delete
        </span>
        <div className="streak-number">Streak #{id}</div>
        <h3 className="streak-title">{name}</h3>
        <p className="streak-motivation">{motivation}</p>
        <div className="streak-countdown"></div>
        <div className="streak-counter">{StreakCount}</div>
        <button onClick={(e) => handleIncrement(id, e)} className="streak-btn">
          Increment
        </button>
      </div>
    </>
  );
};
