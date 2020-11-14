import React from "react";

import { StreaksList } from "./components/StreaksList/StreaksList";
import { CreateStreak } from "./components/CreateStreak/CreateStreak";

import "./App.css";

function App() {
  return (
    <div className="App">
      <CreateStreak />
      <StreaksList />
    </div>
  );
}

export default App;
