import React from "react";

// components:
import { Streak } from "../Streak/Streak";

// style:
import "./Streaks.scss";

const StreaksList = ({ streaks, onDeleteStreak, onStreakUpdate }) => {
  return (
    <>
      <div className="Streaks">
        {streaks.map((streak) => (
          <Streak
            key={streak.id}
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
