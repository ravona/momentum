import React, { useState } from "react";
import Countdown from "react-countdown";
import { FaTrash, FaPenAlt } from "react-icons/fa";
import { useStreaks } from "../../context/StreaksProvider";

import "./Streak.css";

export const Streak = ({ id, title, motivation, count, isActive }) => {
  const { removeStreak } = useStreaks();

  const handleSelect = () => {};

  const editStreak = () => {};

  const handleIncrement = () => {};

  const handleLoss = () => {};

  return (
    <>
      <div className={`streak`}>
        <div>
          <button onClick={() => removeStreak(id)}>
            <FaTrash />
          </button>
          <button>
            <FaPenAlt onClick={() => editStreak(title)} />
          </button>
        </div>
        <h4 className={"streak-title"}>{title}</h4>
        <h5 className={"streak-motivation"}>{motivation}</h5>
        <div className="streak-countdown">
          {/* 
          1. will render Countdown componenet after a click on increment button
          2. will reset Countdown after each click on increment button 
          3. will unmount Countdown after Streak loss 
          */}
          <Countdown date={Date.now() + 2000} onComplete={handleLoss} />
        </div>

        <div className="streak-counter"></div>
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
