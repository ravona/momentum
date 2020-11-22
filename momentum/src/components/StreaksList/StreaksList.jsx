import React from "react";

// components:
import { Streak } from "../Streak/Streak";

// style:
import "./Streaks.scss";

const StreaksList = ({ streaks, onDeleteStreak }) => {
  return (
    <>
      <div className="streaks">
        {streaks.map((streak) => (
          <Streak
            key={streak.id}
            onDeleteStreak={onDeleteStreak}
            streak={streak}
          />
        ))}
      </div>
    </>
  );
};

export default StreaksList;
