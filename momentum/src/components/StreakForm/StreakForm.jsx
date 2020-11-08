import React, { useState } from "react";

export const StreakForm = ({ streaks }) => {
  const [title, setTitle] = useState("");
  const [motivation, setMotivation] = useState("");

  const onNewStreak = (e) => {
    e.preventDefault();
    let newStreaks = [...streaks];
    let newStreak = {
      title: { title },
      motivation: { motivation },
    };
    newStreaks.push(newStreak);
    console.log(newStreaks);
  };

  return (
    <>
      <form className="streak-form">
        <div className="streak-form_section">
          <label className="streak-form_label">Name your streak:</label>
          <input
            type="text"
            value={title}
            placeholder="Ex: Stopped smoking"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="streak-form_section">
          <label className="streak-form_label">
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
              onNewStreak(e);
            }}
          >
            Create
          </button>
        </div>
      </form>
    </>
  );
};
