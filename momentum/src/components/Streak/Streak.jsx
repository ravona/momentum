import {React} from "react";
import Countdown from "react-countdown";
import add from "date-fns/add";
import {FaTrash, FaShareAlt, FaRegClock, FaTrophy} from "react-icons/fa";

// style:
import "./Streak.scss";

export const Streak = ({streak, onDeleteStreak, onStreakUpdate}) => {
  const getDeadline = () =>
    add(new Date(), {
      [streak.intervalUnit]: streak.intervalNum,
    });

  const handleDeleteStreak = () => {
    onDeleteStreak(streak.id);
  };

  const handleStreakIncrement = () => {
    streak.count = streak.count + 1;
    streak.deadline = getDeadline();
    onStreakUpdate((streak.isActive = true));
  };

  const handleStreakLoss = () => {
    streak.count = 0;
    streak.deadline = null;
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
                Increment every {streak.intervalNum} {streak.intervalUnit} to
                maintain this Streak.
              </span>
            </li>
            {streak.goal ? (
              <li className={"Streak__list-item"}>
                <FaTrophy className="Streak__list-item__icon" />
                <span>{goalStatus}</span>
              </li>
            ) : null}
          </ul>
        </div>

        <div className="Streak__footer">
          {streak.isActive ? (
            <div className="Streak__countdown">
              <Countdown
                date={streak.deadline}
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
