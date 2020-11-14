import React from "react";

import { StreaksList } from "./components/StreaksList/StreaksList";
import { CreateStreak } from "./components/CreateStreak/CreateStreak";

import "./App.css";
import NotificationBar from "./components/NotificationBar/NotificationBar";

function App() {
  return (
    <div className="App">
      <NotificationBar message="Welcome!" />
      <CreateStreak />
      <StreaksList />
    </div>
  );
}

export default App;
