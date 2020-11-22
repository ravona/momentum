import React, { useState, useEffect } from "react";
import StreaksData from "../data/streaks.json";
import Toggle from "../components/Toggle/Toggle";
import StreaksList from "../components/StreaksList/StreaksList";
import CreateStreak from "../components/CreateStreak/CreateStreak";

export const StreaksPage = () => {
  const [streaks, setStreaks] = useState(
    JSON.parse(localStorage.getItem("streaks")) || StreaksData
  );

  useEffect(() => {
    localStorage.setItem("streaks", JSON.stringify(streaks));
  }, [streaks]);

  const addStreak = (newStreak) => {
    setStreaks([...streaks, newStreak]);
  };

  const deleteStreak = (id) => {
    setStreaks(streaks.filter((streak) => streak.id !== id));
  };

  return (
    <>
      <div className="CreateStreak">
        <Toggle text="Create New Streak">
          <CreateStreak onCreateStreak={addStreak} />
        </Toggle>
      </div>

      <StreaksList onDeleteStreak={deleteStreak} streaks={streaks} />
    </>
  );
};
