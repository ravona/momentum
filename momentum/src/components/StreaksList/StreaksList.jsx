import React from "react";

// Components:
import { Streak } from "../Streak/Streak";

// Context:
import { useStreaks } from "../../context/StreaksProvider";

// Styles:
import "./Streaks.css";

export const StreaksList = () => {
  const { streaks } = useStreaks();

  if (!streaks.length) {
    return <div>No Streaks found. (Add a Streak)</div>;
  }

  return (
    <>
      <div className="streaks">
        {streaks.map((streak) => (
          <Streak
            key={streak.id}
            id={streak.id}
            title={streak.title}
            motivation={streak.motivation}
          />
        ))}
      </div>
    </>
  );
};
