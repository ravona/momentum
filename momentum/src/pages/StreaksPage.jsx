import React, { useState, useEffect } from "react";
import StreaksList from "../components/StreaksList/StreaksList";
import Notification from "../components/Notification/Notification";
import Toggle from "../components/Toggle/Toggle";
import CreateStreak from "../components/CreateStreak/CreateStreak";
import StreaksData from "../data/streaks.json";

export const StreaksPage = () => {
  // load "streaks" (array) from local storage or fallback to JSON file
  const [streaks, setStreaks] = useState(
    JSON.parse(localStorage.getItem("streaks")) || StreaksData
  );

  // // after render, save "streaks" to local storage
  useEffect(() => {
    localStorage.setItem("streaks", JSON.stringify(streaks));
  }, [streaks]);

  // delete streak by id
  const deleteStreak = (id) => {
    setStreaks(streaks.filter((streak) => streak.id !== id));
  };

  // add newStreak to streaks
  const addStreak = (newStreak) => {
    setStreaks([...streaks, newStreak]);
  };

  const handleStreakUpdate = (id, isActive, count, timeLeft) => {
    setStreaks(
      streaks.map((streak) =>
        streak.id === id ? { ...streak, isActive, count, timeLeft } : streak
      )
    );
  };

  return (
    <>
      <div className="CreateStreak">
        <Toggle text="Create New Streak">
          <CreateStreak onCreateStreak={addStreak} />
        </Toggle>
      </div>

      <StreaksList
        onDeleteStreak={deleteStreak}
        onStreakUpdate={handleStreakUpdate}
        streaks={streaks}
      />
    </>
  );
};
