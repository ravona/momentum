import React from "react";
import { useStreaks } from "../../context/StreaksProvider";

// Components:
import { Streak } from "../Streak/Streak";

// Styles:
import "./Streaks.css";

export const StreaksList = () => {
  const { streaks } = useStreaks();
  return (
    <>
      <div className="streaks">
        {streaks.map((streak) => (
          <Streak key={streak.id} {...streak} />
        ))}
      </div>
    </>
  );
};
