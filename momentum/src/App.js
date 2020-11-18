import React, { useState } from "react";
import data from "./data/streaks.json";
import { StreaksList } from "./components/StreaksList/StreaksList";
import { CreateStreak } from "./components/CreateStreak/CreateStreak";

import "./App.css";

function App() {
  const [streaks, setStreaks] = useState(data);

  const deleteStreak = (id) => {
    setStreaks(streaks.filter((streak) => streak.id !== id));
  };

  const addStreak = (newStreak) => {
    setStreaks([...streaks, newStreak]);
  };

  return (
    <div className="App">
      <CreateStreak onCreateStreak={addStreak} />
      <StreaksList onDeleteStreak={deleteStreak} streaks={streaks} />
    </div>
  );
}

export default App;
