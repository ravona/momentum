import React, { useState } from "react";

// data:
import messages from "../../data/messages.json";

// components:
import Countdown from "react-countdown";
import { nanoid } from "nanoid";
import { getRandomArrayItem } from "../../utils/utils";

// context:
import { useStreaks } from "../../context/StreaksProvider";
import { useNotification } from "../../context/NotificationProvider";

// style:
import "./Streak.scss";

export const Streak = ({ id, title, motivation }) => {
  const { deleteStreak } = useStreaks();
  const { printNotification } = useNotification();

  const [count, setCount] = useState(0);
  const [status, setStatus] = useState(false);

  const handleIncrement = () => {
    setStatus(true);
    setCount(count + 1);

    const getRandomSuccessMessage = getRandomArrayItem(messages.increment);
    printNotification(getRandomSuccessMessage);
  };

  const handleLoss = () => {
    setStatus(false);
    setCount(0);

    const getRandomLossMessage = getRandomArrayItem(messages.loss);
    printNotification(getRandomLossMessage);
  };

  const handleDeleteStreak = (e) => {
    e.preventDefault();
    deleteStreak(id);
  };

  return (
    <>
      <div key={id} className={`streak`}>
        <div onClick={handleDeleteStreak}>delete</div>
        <h4 className={"streak-title"}>{title}</h4>
        <h5 className={"streak-motivation"}>{motivation}</h5>
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
