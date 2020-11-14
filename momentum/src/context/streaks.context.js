import React, { createContext, useReducer } from "react";
import data from "../data/streaks.json";
import streaksReducer from "./reducers/streaks.reducer";

const initialState = {
  streaks: data,
};

const StreaksContext = createContext(initialState);

const StreaksProvider = ({ children }) => {
  const [state, dispatch] = useReducer(streaksReducer, initialState);

  return (
    <StreaksContext.Provider value={{ streaks: state.streaks, dispatch }}>
      {children}
    </StreaksContext.Provider>
  );
};

export { StreaksContext, StreaksProvider };
