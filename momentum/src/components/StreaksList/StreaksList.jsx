import React, { useContext } from "react";

// Context:
import { StreaksContext } from "../../context/streaks.context.js";

// Components:
import { Streak } from "../Streak/Streak";

// Styles:
import "./Streaks.css";

export const StreaksList = () => {
  const { streaks } = useContext(StreaksContext);
  if (!streaks.length) return <div>No Streaks Listed.</div>;
  return (
    <>
      <div className="streaks">
        {streaks.map((streak) => (
          <Streak key={streak.id} streak={streak} />
        ))}
      </div>
    </>
  );
};
