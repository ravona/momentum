import React, { useState } from "react";
import { nanoid } from "nanoid";

// components:
import { Streak } from "../Streak/Streak";

// style:
import "./Streaks.scss";

const StreaksList = ({ streaks, onDeleteStreak, onIncrementStreak }) => {
  return (
    <>
      <div className="streaks">
        {streaks.map((streak, index) => (
          <Streak
            key={index}
            streak={streak}
            onDeleteStreak={onDeleteStreak}
            onIncrementStreak={onIncrementStreak}
          />
        ))}
      </div>
    </>
  );
};

export default StreaksList;
