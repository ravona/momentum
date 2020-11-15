import React, { useState } from "react";
import data from "./data/streaks.json";
import { StreaksList } from "./components/StreaksList/StreaksList";
import { CreateStreak } from "./components/CreateStreak/CreateStreak";

import "./App.css";
import { nanoid } from "nanoid";

function App() {
  const [streaks, setStreaks] = useState(data);
  const [streak, setStreak] = useState({
    id: nanoid(),
    title: "",
    motivation: "",
    intervalNum: 1,
    intervalUnit: "days",
    count: 0,
    isActive: false,
  });

  const addStreak = (newStreak) => {
    setStreaks([...streaks, newStreak]);
  };

  const deleteStreak = (id) => {
    setStreaks(streaks.filter((streak) => streak.id !== id));
  };

  return (
    <div className="App">
      <CreateStreak onCreateStreak={addStreak} streak={streak} />
      <StreaksList onDeleteStreaks={deleteStreak} streaks={streaks} />
    </div>
  );
}

export default App;
