import React from "react";

// uses context:
import { useStreaks } from "../../context/StreaksProvider";

// components:
import { Streak } from "../Streak/Streak";

// styles:
import "./Streaks.scss";

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
