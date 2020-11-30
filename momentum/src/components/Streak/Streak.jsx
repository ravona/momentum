import { React, useEffect } from "react";
import Countdown from "react-countdown";

// data:
import messages from "../../data/messages.json";

// components:
import { getRandomArrayItem } from "../../utils/utils";
import Notification from "../Notification/Notification";
import { FaTrash, FaShareAlt } from "react-icons/fa";

// style:
import "./Streak.scss";

export const Streak = ({ streak, onDeleteStreak, onStreakUpdate }) => {
  // On current streak change --> save each streak individually localStorage
  useEffect(() => {
    localStorage.setItem(`streak-${streak.id}`, JSON.stringify({ streak }));
  }, [streak]);

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

  const handleStreakIncrement = () => {
    onStreakUpdate(
      streak.id,
      (streak.isActive = true),
      (streak.count = streak.count + 1),
      (streak.timeLeft = getDeadline())
    );
  };

  const handleStreakLoss = () => {
    onStreakUpdate(
      streak.id,
      (streak.isActive = false),
      (streak.count = 0),
      (streak.timeLeft = null)
    );
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

          <div className="streak__notification">
            <Notification
              text={
                streak.isActive
                  ? getRandomArrayItem(messages.increment)
                  : getRandomArrayItem(messages.loss)
              }
            />
          </div>

          {streak.isActive ? (
            <div className="streak__countdown">
              <Countdown
                date={streak.timeLeft}
                onComplete={handleStreakLoss}
              ></Countdown>
            </div>
          ) : null}

          <div className="streak__counter">{streak.count}</div>
        </div>

        <div className="streak__footer">
          <button
            onClick={handleStreakIncrement}
            className="btn btn--small btn--success btn--light"
          >
            Increment
          </button>
        </div>
      </div>
    </>
  );
};
