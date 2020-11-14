import React, { useState, useContext } from "react";

import { StreaksContext } from "../../context/streaks.context.js";
import { createStreak } from "../../context/actions/streaks.actions";

import "./CreateStreak.css";

export const CreateStreak = () => {
  const { dispatch } = useContext(StreaksContext);

  const [newStreak, setNewStreak] = useState({
    title: "",
    motivation: "",
    intervalNum: 1,
    intervalUnit: "days",
  });

  const { title, motivation, intervalNum, intervalUnit } = newStreak;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNewStreak({
      ...newStreak,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createStreak(newStreak));
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="streak-form">
        <h3>Create New Streak</h3>
        <div className="streak-form_section">
          <label className="streak-form_label">Name your streak:</label>
          <input
            name="title"
            type="text"
            value={title}
            placeholder="Ex: Stopped smoking"
            onChange={(e) => handleChange(e)}
            required
          />
        </div>

        <div className="streak-form_section">
          <label className="streak-form_label">
            Why maintaining this streak is important to you?
          </label>
          <input
            name="motivation"
            type="text"
            value={motivation}
            placeholder="Ex: So I can play soccer at the park with my kids"
            onChange={(e) => handleChange(e)}
            required
          />
        </div>

        <div className="streak-form_section">
          <label className="streak-form_label">Should be updated Every</label>
          <input
            name="intervalNum"
            type="number"
            value={intervalNum}
            onChange={(e) => handleChange(e)}
            required
          />
        </div>

        <div className="streak-form_section">
          <label className="streak-form_label">
            Pick time interval
            <select
              name="intervalUnit"
              value={intervalUnit}
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
