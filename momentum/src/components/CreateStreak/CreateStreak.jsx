import React, { useState } from "react";
import { nanoid } from "nanoid";

// style:
import "./CreateStreak.scss";

const CreateStreak = ({ onCreateStreak }) => {
  const [id] = useState(nanoid(10));
  const [title, setTitle] = useState("");
  const [motivation, setMotivation] = useState("");
  const [intervalNum, setIntervalNum] = useState(1);
  const [intervalUnit, setIntervalUnit] = useState("days");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStreak = { id, title, motivation, intervalNum, intervalUnit };
    onCreateStreak(newStreak);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <h2>Create New Streak</h2>
        <div className="form__section">
          <label className="form__label">Name your streak:</label>
          <input
            className="form__input"
            name="title"
            type="text"
            value={title}
            placeholder="Ex: Stopped smoking"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="form__section">
          <label className="form__label">
            Why maintaining this streak is important to you?
          </label>
          <input
            className="form__input"
            name="motivation"
            type="text"
            value={motivation}
            placeholder="Ex: So I can play soccer at the park with my kids"
            onChange={(e) => setMotivation(e.target.value)}
            required
          />
        </div>

        <div className="form__section">
          <label className="form__label">Should be updated Every</label>
          <input
            className="form__input"
            name="intervalNum"
            type="number"
            value={intervalNum}
            onChange={(e) => setIntervalNum(e.target.value)}
            required
          />
        </div>

        <div className="form__section">
          <label className="form__label">
            Pick time interval
            <select
              className="form__select"
              name="intervalUnit"
              value={intervalUnit}
              onChange={setIntervalUnit}
            >
              <option value="seconds">Seconds</option>
              <option value="minutes">Minutes</option>
              <option value="hours">Hours</option>
              <option value="days">Days</option>
            </select>
          </label>
        </div>

        <div className="form__section">
          <button
            className="btn btn--small btn--success btn--light btn--uppercase"
            type="submit"
            value="Create"
          >
            Create
          </button>
        </div>
      </form>
    </>
  );
};

export default CreateStreak;
