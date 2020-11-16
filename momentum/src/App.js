import React, { useState } from "react";
import data from "./data/streaks.json";
import { StreaksList } from "./components/StreaksList/StreaksList";
import { CreateStreak } from "./components/CreateStreak/CreateStreak";
import Notification from "./components/Notification/Notification";
import messages from "./data/messages.json";
import { getRandomArrayItem } from "./utils/utils";

import "./App.css";
import { nanoid } from "nanoid";

function App() {
  const [streaks, setStreaks] = useState(data);
  const [streak, setStreak] = useState({
    id: null,
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

  const updateStreak = (updatedStreak) => {
    setStreak([...streak, updatedStreak]);
  };

  // const deleteStreak = (id) => {
  //   setStreaks(streaks.filter((streak) => streak.id !== id));
  // };

  return (
    <div className="App">
      <Notification text={getRandomArrayItem(messages.increment)} />
      <CreateStreak onCreateStreak={addStreak} />
      <StreaksList streaks={streaks}></StreaksList>
    </div>
  );
}

export default App;
