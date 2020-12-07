import {React} from "react";
import Countdown from "react-countdown";
import {FaTrash, FaShareAlt, FaRegClock, FaTrophy} from "react-icons/fa";

// style:
import "./Streak.scss";

export const Streak = ({streak, onDeleteStreak, onStreakUpdate}) => {
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
    streak.count = streak.count + 1;
    streak.timeLeft = getDeadline();
    onStreakUpdate((streak.isActive = true));
  };

  const handleStreakLoss = () => {
    streak.count = 0;
    streak.timeLeft = null;
    onStreakUpdate((streak.isActive = false));
  };

  let goalStatus;
  if (streak.goal > streak.count) {
    goalStatus = `${streak.goal - streak.count} repetitions to reach goal!`;
  }

  if (streak.count > streak.goal) {
    goalStatus = `${streak.count - streak.goal} repetitions beyond your goal!`;
  }

  if (streak.count === streak.goal) {
    goalStatus = "Congratulations, you have reached your goal!";
  }

  return (
    <>
      <div className={`Streak Streak--${streak.isActive ? "active" : null}`}>
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
              <FaRegClock className="Streak__list-item__icon" />
              <span>
                Update every {streak.intervalNum} {streak.intervalUnit} to
                prevent reset.
              </span>
            </li>
            <li className={"Streak__list-item"}>
              <FaTrophy className="Streak__list-item__icon" />
              <span>{goalStatus}</span>
            </li>
          </ul>
        </div>

        <div className="Streak__footer">
          {streak.isActive ? (
            <div className="Streak__countdown">
              <Countdown
                date={streak.timeLeft}
                onComplete={handleStreakLoss}
              ></Countdown>
            </div>
          ) : null}

          <div className="Streak__counter">{streak.count}</div>

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
