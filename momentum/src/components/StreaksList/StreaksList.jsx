import React from "react";
import { Streak } from "../Streak/Streak";

export const StreaksList = ({ streaks }) => (
  <>
    <div className="streaks">
      {streaks.map((streak, i) => (
        <Streak
          key={i}
          id={i}
          title={streak.title}
          motivation={streak.motivation}
          status={streak.isActive}
        />
      ))}
    </div>
  </>
);
