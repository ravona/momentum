import React, { createContext, useState, useContext } from "react";
import streaksData from "../data/streaks.json";
import { nanoid } from "nanoid";

const StreaksContext = createContext();
const useStreaks = () => useContext(StreaksContext);

const StreaksProvider = ({ children }) => {
  const [streaks, setStreaks] = useState(streaksData);

  const onCreateStreak = (streak) =>
    setStreaks([
      ...streaks,
      {
        id: nanoid(),
        count: 0,
        isActive: false,
        ...streak,
      },
    ]);

  const removeStreak = (id) =>
    setStreaks(streaks.filter((streak) => streak.id !== id));

  return (
    <StreaksContext.Provider value={{ streaks, onCreateStreak, removeStreak }}>
      {children}
    </StreaksContext.Provider>
  );
};

export { useStreaks, StreaksProvider };
