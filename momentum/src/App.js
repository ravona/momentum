import React, { useState } from "react";
import data from "./data/streaks.json";
import Toggle from "./components/Toggle/Toggle";
import { StreaksList } from "./components/StreaksList/StreaksList";
import { CreateStreak } from "./components/CreateStreak/CreateStreak";

import "./App.scss";

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
      <div className="CreateStreakWrapper">
        <Toggle text="Create New Streak">
          <CreateStreak onCreateStreak={addStreak} />
        </Toggle>
      </div>

      <StreaksList onDeleteStreak={deleteStreak} streaks={streaks} />
    </div>
  );
}

export default App;
