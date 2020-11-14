import React, { useContext } from "react";

// Context:
import { StreaksContext } from "../../context/streaks.context.js";

// Components:
import { Streak } from "../Streak/Streak";

// Styles:
import "./Streaks.css";

export const StreaksList = () => {
  const { streaks } = useContext(StreaksContext);
  return (
    <>
      <div className="streaks">
        {streaks.map((streak) => (
          <Streak streak={streak} />
        ))}
      </div>
    </>
  );
};
