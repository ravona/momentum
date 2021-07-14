import { createContext, useContext } from "react"

// hooks:
import usePersistentState from "../hooks/usePersistentState"

// data:
import streaksData from "../data/streaks.json"

const StreakContext = createContext()
export const useStreaks = () => useContext(StreakContext)

export const StreakProvider = ({ children }) => {
    const [streaks, setStreaks] = usePersistentState("streaks", streaksData)

    const addStreak = (newStreak) => {
        setStreaks([...streaks, newStreak])
    }

    const deleteStreak = (id) => {
        setStreaks(streaks.filter((streak) => streak.id !== id))
    }

    // const handleStreakUpdate = (id, isActive, count, timeLeft) => {
    //     setStreaks(
    //         streaks.map((streak) =>
    //             streak.id === id
    //                 ? { ...streak, isActive, count, timeLeft }
    //                 : streak
    //         )
    //     )
    // }

    return (
        <StreakContext.Provider
            value={{ streaks, setStreaks, addStreak, deleteStreak }}
        >
            {children}
        </StreakContext.Provider>
    )
}
