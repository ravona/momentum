import {
  GET_STREAKS,
  CREATE_STREAK,
  EDIT_STREAK,
  DELETE_STREAK,
} from "../types";

export const createStreak = (streak) => ({
  type: CREATE_STREAK,
  payload: streak,
});

export const getStreaks = () => ({
  type: GET_STREAKS,
});
