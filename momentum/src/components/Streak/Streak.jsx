import {React, useState} from "react";
import Countdown from "react-countdown";
import add from "date-fns/add";
import {FaTrash, FaTwitter, FaRegClock, FaTrophy} from "react-icons/fa";

import {Notification} from "../Notification/Notification";
import {getRandomArrayItem} from "../../utils/utils";
import messages from "../../data/messages.json";

// style:
import "./Streak.scss";

export const Streak = ({streak, onDeleteStreak, onStreakUpdate}) => {
  const [message, setMessage] = useState("");

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
    setMessage(getRandomArrayItem(messages.increment));
  };

  const handleStreakLoss = () => {
    streak.count = 0;
    streak.deadline = 0;
    onStreakUpdate((streak.isActive = false));
    setMessage(getRandomArrayItem(messages.loss));
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

  let StreakTweet = "";
  if (streak.isActive) {
    StreakTweet = `${streak.title} with Momentum - a habit forming app. I'm on a streak of ${streak.count} ${streak.intervalUnit} and going!`;
  } else {
    StreakTweet = `${streak.title} with Momentum - a habit forming App. Give it a try, it's awesome!`;
  }

  return (
    <>
      <div
        className={`Streak Streak--${streak.isActive ? "active" : "inactive"}`}
      >
        <div className={"Streak__header"}>
          <div className={"Streak__icon Streak__icon--share"}>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href={`https://twitter.com/intent/tweet?text=${StreakTweet}`}
            >
              <FaTwitter />
            </a>
          </div>

          <div className={"Streak__icon Streak__icon--delete"}>
            <FaTrash onClick={handleDeleteStreak} />
          </div>
        </div>

        <div className={"Streak__body"}>
          <h3 className={"Streak__title"}>{streak.title}</h3>
          <h4 className={"Streak__motivation"}>{streak.motivation}</h4>

          {message ? (
            <div className="Streak__notification">
              <Notification text={message} />
            </div>
          ) : null}

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
            className={`btn btn--medium btn--light btn--${
              streak.isActive ? "success" : "primary"
            }`}
          >
            Increment
          </button>
        </div>
      </div>
    </>
  );
};
