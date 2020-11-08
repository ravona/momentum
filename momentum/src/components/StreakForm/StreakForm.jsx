import React, { useState } from "react";
import { Streak } from "../Streak/Streak";
import ReactDOM from "react-dom";

export const StreakForm = () => {
  const [title, setTitle] = useState("");
  const [motivation, setMotivation] = useState("");

  const [streak, setStreak] = useState({
    title: "",
    motivation: "",
    isActive: false,
  });

  const createNewStreak = () => {
    ReactDOM.render(
      <Streak title={title} motivation={motivation}></Streak>,
      document.querySelector(".streaks")
    );
  };

  return (
    <>
      <form id="StreakForm" className="StreakForm">
        <div className="StreakForm_section">
          <label className="StreakForm_label">Name your streak:</label>
          <input
            type="text"
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
              createNewStreak(e);
              e.preventDefault();
            }}
          >
            Create
          </button>
        </div>
      </form>
    </>
  );
};
