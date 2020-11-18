import { nanoid } from "nanoid";
import React from "react";

// Components:
import { Streak } from "../Streak/Streak";

// Styles:
import "./Streaks.scss";

export const StreaksList = ({ streaks, onDeleteStreak }) => {
  return (
    <>
      <div className="streaks">
        {streaks.map((streak) => (
          <Streak
            onDeleteStreak={onDeleteStreak}
            key={nanoid()}
            streak={streak}
          />
        ))}
      </div>
    </>
  );
};
