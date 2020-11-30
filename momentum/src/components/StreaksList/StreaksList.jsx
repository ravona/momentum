import React, { useState } from "react";
import { nanoid } from "nanoid";

// components:
import { Streak } from "../Streak/Streak";

// style:
import "./Streaks.scss";

const StreaksList = ({ streaks, onDeleteStreak, onStreakUpdate }) => {
  return (
    <>
      <div className="streaks">
        {streaks.map((streak, index) => (
          <Streak
            key={index}
            streaks={streaks}
            streak={streak}
            onDeleteStreak={onDeleteStreak}
            onStreakUpdate={onStreakUpdate}
          />
        ))}
      </div>
    </>
  );
};

export default StreaksList;
