import { React, useEffect } from "react";
import Countdown from "react-countdown";

// data:
import messages from "../../data/messages.json";

// components:
import { getRandomArrayItem } from "../../utils/utils";
import Notification from "../Notification/Notification";
import { FaTrash, FaShareAlt, FaRegClock } from "react-icons/fa";

// style:
import "./Streak.scss";

export const Streak = ({ streak, onDeleteStreak, onStreakUpdate }) => {
  // On current streak change --> save each streak individually localStorage
  useEffect(() => {
    localStorage.setItem(`Streak-${streak.id}`, JSON.stringify({ streak }));
  }, [streak]);

  useEffect(() => {}, [streak.isActive]);

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
      <div
        className={`Streak Streak--${streak.id} Streak--${
          streak.isActive ? "active" : "inactive"
        }`}
      >
        <div className={"Streak__header"}>
          <div className={"Streak__icon Streak__icon--share"}>
            <FaShareAlt />
          </div>

          <div className={"Streak__icon Streak__icon--delete"}>
            <FaTrash onClick={handleDeleteStreak} />
          </div>
        </div>

        <div className={"Streak__body"}>
          <h3 className={"Streak__title"}>{streak.title}</h3>
          <h4 className={"Streak__motivation"}>{streak.motivation}</h4>

          <ul className={"Streak__list"}>
            <li className={"Streak__list-item"}>
              Update every {streak.intervalNum} {streak.intervalUnit} to prevent
              reset.
            </li>
            <li className={"Streak__list-item"}>
              {streak.goal - streak.count === 0
                ? "Congratulations, you have reached your goal!"
                : `${streak.goal - streak.count} repetitions to reach goal.`}
            </li>
          </ul>
        </div>

        <div className="Streak__footer">
          {streak.isActive && streak.count < streak.goal ? (
            <div className="Streak__countdown">
              <Countdown
                date={streak.timeLeft}
                onComplete={handleStreakLoss}
              ></Countdown>
            </div>
          ) : null}

          <div className="Streak__counter">
            {streak.goal === streak.count ? "Success!" : streak.count}
          </div>

          <button
            disabled={streak.goal === streak.count ? true : false}
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
