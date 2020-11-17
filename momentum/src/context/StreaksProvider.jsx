import { nanoid } from "nanoid";
import React, { createContext, useState, useContext } from "react";
import streaksData from "../data/streaks.json";

const StreaksContext = createContext();
const useStreaks = () => useContext(StreaksContext);

const StreaksProvider = ({ children }) => {
  const [streaks, setStreaks] = useState(streaksData);

  const addStreak = (newStreak) =>
    setStreaks([
      ...streaks,
      {
        id: nanoid(),
        count: 0,
        isActive: false,
        ...newStreak,
      },
    ]);

  const deleteStreak = (id) =>
    setStreaks(streaks.filter((streak) => streak.id !== id));

  return (
    <StreaksContext.Provider value={{ streaks, addStreak, deleteStreak }}>
      {children}
    </StreaksContext.Provider>
  );
};

export { useStreaks, StreaksProvider };
