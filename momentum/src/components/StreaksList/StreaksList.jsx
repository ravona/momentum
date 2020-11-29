import React, { useState } from "react";
import { nanoid } from "nanoid";

// components:
import { Streak } from "../Streak/Streak";

// style:
import "./Streaks.scss";

const StreaksList = (props) => {
  return (
    <>
      <div className="streaks">
        {props.streaks.map((streak, index) => (
          <Streak
            key={index}
            streak={streak}
            onDeleteStreak={props.onDeleteStreak}
            onIncrementStreak={props.onIncrementStreak}
          />
        ))}
      </div>
    </>
  );
};

export default StreaksList;
