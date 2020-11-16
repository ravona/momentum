import { nanoid } from "nanoid";
import React from "react";

// Components:
import { Streak } from "../Streak/Streak";

// Styles:
import "./Streaks.css";

export const StreaksList = ({ streaks }) => {
  return (
    <>
      <div className="streaks">
        {streaks.map((streak) => (
          <Streak key={nanoid()} streak={streak} />
        ))}
      </div>
    </>
  );
};
