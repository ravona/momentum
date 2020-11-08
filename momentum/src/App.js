import React, { useState } from "react";
import "./App.css";
import { Streak } from "./components/Streak/Streak";
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

  const [title, setTitle] = useState("");
  const [motivation, setMotivation] = useState("");

  const createNewStreak = (e) => {
    const newStreaks = [...streaks];
    newStreaks.push({
      title: `${title}`,
      motivation: `${motivation}`,
      isActive: false,
    });
    setStreaks(newStreaks);
  };

  return (
    <div className="App">
      <React.StrictMode>
        <div className="streaks">
          {streaks.map((streak, i) => (
            <Streak
              id={i}
              key={i}
              title={streak.title}
              motivation={streak.motivation}
              status={streak.isActive}
            />
          ))}
        </div>

        <hr></hr>

        <form id="StreakForm" className="StreakForm">
          <div className="StreakForm_section">
            <label className="StreakForm_label">Name your streak:</label>
            <input
              type="text"
              name="title"
              value={title}
              placeholder="Ex: Stopped smoking"
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="StreakForm_section">
            <label className="StreakForm_label">
              Why maintaining this streak is important to you?
            </label>
            <input
              type="text"
              name="motivation"
              value={motivation}
              placeholder="Ex: Stopped smoking"
              onChange={(e) => setMotivation(e.target.value)}
              required
            />
          </div>

          <div className="StreakForm_section">
            <button
              value="Create"
              onClick={(e) => {
                e.preventDefault();
                createNewStreak(e);
              }}
            >
              Create
            </button>
          </div>
        </form>

        <hr></hr>
      </React.StrictMode>
    </div>
  );
}

export default App;
