import React, { useState } from "react";
import "./App.css";
import { StreaksList } from "./components/StreaksList/StreaksList";
import { StreakForm } from "./components/StreakForm/StreakForm";

function App() {
  const [streaks, setStreaks] = useState([
    {
      title: "Stop Smoking",
      motivation: "So I can play soccer at the park with my kids",
      isActive: false,
    },
    {
      title: "Jog every 2 days for a year",
      motivation: "I want to lose weight and get in shape",
      isActive: false,
    },
    {
      title: "Learn 10 words in Spanish every day",
      motivation:
        "I want to speak with the local during my upcoming trip to Mexico",
      isActive: false,
    },
  ]);

  return (
    <div className="App">
      <React.StrictMode>
        <StreaksList streaks={streaks} />
        <StreakForm streaks={streaks} />
      </React.StrictMode>
    </div>
  );
}

export default App;
