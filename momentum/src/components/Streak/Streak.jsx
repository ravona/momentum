import React, { useState } from "react";
import Countdown from "react-countdown";
import { getRandomArrayItem } from "../../utils/utils";
import Notification from "../Notification/Notification";
import messages from "../../data/messages.json";
import { FaTrash, FaShareAlt } from "react-icons/fa";

import "./Streak.scss";

export const Streak = ({ streak, onDeleteStreak }) => {
  const { id, title, motivation, intervalNum, intervalUnit } = streak;
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const getIntervalInMilliseconds = (intervalNum, intervalUnit) => {
    let intervalInMilliseconds;
    switch (intervalUnit) {
      case "seconds":
        intervalInMilliseconds = intervalNum * 1000;
        break;
      case "minutes":
        intervalInMilliseconds = intervalNum * 60000;
        break;
      case "hours":
        intervalInMilliseconds = intervalNum * 3.6e6;
        break;
      case "days":
        intervalInMilliseconds = intervalNum * 8.64e7;
        break;
      default:
        intervalInMilliseconds = intervalNum * 8.64e7;
    }
    return intervalInMilliseconds;
  };

  const handleDeleteStreak = () => {
    onDeleteStreak(id);
  };

  const handleIncrement = () => {
    setCount(count + 1);
    setIsActive(true);
  };

  const handleLoss = () => {
    setCount(0);
    setIsActive(false);
  };

  return (
    <>
      <div key={id} className={`streak`}>
        <div className={"streak__header"}>
          <div className={"streak__icon"}>
            <FaTrash onClick={handleDeleteStreak} />
          </div>

          <div className={"streak__icon"}>
            <FaShareAlt />
          </div>
        </div>

        <div className={"streak__body"}>
          <h3 className={"streak__title"}>{title}</h3>
          <h4 className={"streak__motivation"}>{motivation}</h4>
          <h5 className={"streak__interval"}>
            Update every {intervalNum} {intervalUnit}
          </h5>

          {isActive === true ? (
            <>
              <div className="streak__notification">
                <Notification text={getRandomArrayItem(messages.increment)} />
              </div>
              <div className="streak__countdown">
                <Countdown
                  date={
                    Date.now() +
                    getIntervalInMilliseconds(intervalNum, intervalUnit)
                  }
                  onComplete={handleLoss}
                />
              </div>
            </>
          ) : (
            <>
              <div className="streak__notification">
                <Notification text={getRandomArrayItem(messages.loss)} />
              </div>
            </>
          )}
          <div className="streak__counter">{count}</div>
        </div>

        <div className="streak__footer">
          <button
            onClick={handleIncrement}
            className="btn btn--medium btn--success btn--light btn--uppercase"
          >
            Increment
          </button>
        </div>
      </div>
    </>
  );
};
