import React from "react";

// components:
import { StreaksList } from "./components/StreaksList/StreaksList";
import { CreateStreak } from "./components/CreateStreak/CreateStreak";
import { Notification } from "./components/Notification/Notification";

// context:
import { NotificationProvider } from "./context/NotificationProvider";
import { StreaksProvider } from "./context/StreaksProvider";

// style:
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

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
