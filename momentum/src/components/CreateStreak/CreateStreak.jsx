import React, { useState } from "react";
import { useStreaks } from "../../context/StreaksProvider";

import "./CreateStreak.css";

export const CreateStreak = () => {
  const { onCreateStreak } = useStreaks();

  const [newStreak, setNewStreak] = useState({
    title: "",
    motivation: "",
    intervalNum: 1,
    intervalUnit: "days",
  });

  const handleChange = (e) => {
    setNewStreak({
      ...newStreak,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreateStreak(newStreak);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="streak-form">
        <h3>Create New Streak</h3>
        <div className="streak-form_section">
          <label className="streak-form_label">Name your Streak:</label>
          <input
            name="title"
            type="text"
            value={newStreak.title}
            placeholder="I have stopped smoking"
            onChange={(e) => handleChange(e)}
            required
          />
        </div>

        <div className="streak-form_section">
          <label className="streak-form_label">
            Why maintaining this Streak is important to you?
          </label>
          <input
            name="motivation"
            type="text"
            value={newStreak.motivation}
            placeholder="So I can play soccer at the park with my kids"
            onChange={(e) => handleChange(e)}
            required
          />
        </div>

        <div className="streak-form_section">
          <label className="streak-form_label">Should be updated every</label>
          <input
            name="intervalNum"
            type="number"
            value={newStreak.intervalNum}
            onChange={(e) => handleChange(e)}
            required
          />
        </div>

        <div className="streak-form_section">
          <label className="streak-form_label">
            Select time interval
            <select
              name="intervalUnit"
              value={newStreak.intervalUnit}
              onChange={handleChange}
            >
              <option value="seconds">Seconds</option>
              <option value="minutes">Minutes</option>
              <option value="hours">Hours</option>
              <option value="days">Days</option>
            </select>
          </label>
        </div>

        <div className="streak-form_section">
          <button type="submit" value="Create">
            Create
          </button>
        </div>
      </form>
    </>
  );
};
