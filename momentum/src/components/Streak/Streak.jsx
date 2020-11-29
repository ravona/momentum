import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";

// data:
import messages from "../../data/messages.json";

// components:
import { getRandomArrayItem } from "../../utils/utils";
import Notification from "../Notification/Notification";
import { FaTrash, FaShareAlt } from "react-icons/fa";

// style:
import "./Streak.scss";

export const Streak = ({ streak, onDeleteStreak }) => {
  const [count, setCount] = useState(streak.count);
  const [isActive, setIsActive] = useState(streak.isActive);
  const [timeLeft, setTimeLeft] = useState(streak.timeLeft);

  // On current streak change --> save each streak individually localStorage
  useEffect(() => {
    localStorage.setItem(
      `streak-${streak.id}`,
      JSON.stringify([
        { ...streak, count: count, timeLeft: timeLeft, isActive: isActive },
      ])
    );
  }, [count, isActive, timeLeft]);

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

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

  const getDeadline = () =>
    Date.now() +
    getIntervalInMilliseconds(streak.intervalNum, streak.intervalUnit);

  const handleDeleteStreak = () => {
    onDeleteStreak(streak.id);
  };

  const handleIncrement = () => {
    setIsActive(true);
    setCount(count + 1);
    setTimeLeft(getDeadline());
  };

  const handleLoss = () => {
    setIsActive(false);
    setCount(0);
  };

  return (
    <>
      <div className={`streak streak-${streak.id}`}>
        <div className={"streak__header"}>
          <div className={"streak__icon"}>
            <FaTrash onClick={handleDeleteStreak} />
          </div>

          <div className={"streak__icon"}>
            <FaShareAlt />
          </div>
        </div>

        <div className={"streak__body"}>
          <h3 className={"streak__title"}>{streak.title}</h3>
          <h4 className={"streak__motivation"}>{streak.motivation}</h4>
          <h5 className={"streak__interval"}>
            Update every {streak.intervalNum} {streak.intervalUnit}
          </h5>

          {isActive === true ? (
            <>
              <div className="streak__notification">
                <Notification text={getRandomArrayItem(messages.increment)} />
              </div>
              <div className="streak__countdown">
                <Countdown date={getDeadline()} onComplete={handleLoss}>
                  <Notification text={getRandomArrayItem(messages.loss)} />
                </Countdown>
              </div>
            </>
          ) : null}
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
