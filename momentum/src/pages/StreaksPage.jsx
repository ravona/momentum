import React, { useState } from "react";
import data from "./data/streaks.json";
import Toggle from "./components/Toggle/Toggle";
import { StreaksList } from "./components/StreaksList/StreaksList";
import { CreateStreak } from "./components/CreateStreak/CreateStreak";

export const StreaksPage = () => (
  <>
    <h1>Streaks Page</h1>
    <div className="CreateStreakWrapper">
      <Toggle text="Create New Streak">
        <CreateStreak onCreateStreak={addStreak} />
      </Toggle>
    </div>

    <StreaksList onDeleteStreak={deleteStreak} streaks={streaks} />
  </>
);
