import React from "react";

// Components:
import { Streak } from "../Streak/Streak";

// Styles:
import "./Streaks.css";

export const StreaksList = ({ streaks }) => {
  const deleteStreak = () => {};
  return (
    <>
      <div className="streaks">
        {streaks.map((streak) => (
          <Streak
            onDeleteStreaks={deleteStreak}
            streaks={streaks}
            key={streak.id}
            streak={streak}
          />
        ))}
      </div>
    </>
  );
};
