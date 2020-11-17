import React, { useState } from "react";

// data:
import messages from "../../data/messages.json";

// components:
import Countdown from "react-countdown";
import { getRandomArrayItem } from "../../utils/utils";
import { IoMdTrash } from "react-icons/io/index";

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
        <IoMdTrash className={"streak__icon"} onClick={handleDeleteStreak} />
        <h4 className={"streak__title"}>{title}</h4>
        <h5 className={"streak__motivation"}>{motivation}</h5>
        <div className="streak__countdown">
          {status === true ? (
            <Countdown date={Date.now() + 2000} onComplete={handleLoss} />
          ) : null}
        </div>

        <div className="streak__counter">{count}</div>
        <button onClick={handleIncrement} className="streak-btn">
          Increment
        </button>
      </div>
    </>
  );
};
