import React from "react";
import { StreaksList } from "./components/StreaksList/StreaksList";
import { CreateStreak } from "./components/CreateStreak/CreateStreak";
import { Notification } from "./components/Notification/Notification";

import "./App.css";
import { NotificationProvider } from "./context/NotificationProvider";
import { StreaksProvider } from "./context/StreaksProvider";

function App() {
  return (
    <div className="App">
      <NotificationProvider>
        <Notification />
        <StreaksProvider>
          <CreateStreak />
          <StreaksList />
        </StreaksProvider>
      </NotificationProvider>
    </div>
  );
}

export default App;
