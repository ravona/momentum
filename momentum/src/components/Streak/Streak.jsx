import "./Streak.css";
import React, { useState } from "react";
import Countdown from "react-countdown";

export const Streak = ({ streak }) => {
  const [count, setCount] = useState(streak.count);
  const [isActive, setIsActive] = useState(streak.isActive);

  const handleIncrement = () => {
    setIsActive(true);
    setCount(count + 1);
  };

  const handleLoss = () => {
    setIsActive(false);
    setCount(0);
  };

  return (
    <>
      <div key={streak.title} className={`streak`}>
        {/* <div onClick={onDeleteStreak(streak.id)}>delete</div> */}
        <h4 className={"streak-title"}>{streak.title}</h4>
        <h5 className={"streak-motivation"}>{streak.motivation}</h5>
        <div className="streak-countdown">
          {/* 
          1. will render Countdown componenet after a click on increment button
          2. will reset Countdown after each click on increment button 
          3. will unmount Countdown after Streak loss 
          */}

          <Countdown date={Date.now() + 2000} onComplete={handleLoss} />
        </div>

        <div className="streak-counter">{count}</div>
        <button onClick={handleIncrement} className="streak-btn">
          Increment
        </button>

        <button onClick={handleLoss} className="streak-btn">
          Simulate Streak loss
        </button>
      </div>
    </>
  );
};
