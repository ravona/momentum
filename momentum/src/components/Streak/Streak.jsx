import React, { useState } from "react";
import Countdown from "react-countdown";
import messages from "../../data/messages.json";
import "./Streak.css";

export const Streak = ({ streak }) => {
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState(false);

  // const onDeleteStreak = (id) => {
  //   deleteStreak(id);
  // };

  const handleIncrement = () => {
    setStatus(true);
    setCount(count + 1);
  };

  const handleLoss = () => {
    setStatus(false);
    setCount(0);
  };

  return (
    <>
      <div key={streak.id} className={`streak`}>
        {/* <div onClick={onDeleteStreak}>delete</div> */}
        <h4 className={"streak-title"}>{streak.title}</h4>
        <h5 className={"streak-motivation"}>{streak.motivation}</h5>
        <div className="streak-countdown">
          {status === true ? (
            <Countdown date={Date.now() + 2000} onComplete={handleLoss} />
          ) : null}
        </div>

        <div className="streak-counter">{count}</div>
        <button onClick={handleIncrement} className="streak-btn">
          Increment
        </button>
      </div>
    </>
  );
};
