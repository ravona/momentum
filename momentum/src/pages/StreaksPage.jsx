import React, { useState, useEffect } from 'react'
import StreaksList from '../components/StreaksList/StreaksList'
import Toggle from '../components/Toggle/Toggle'
import CreateStreak from '../components/CreateStreak/CreateStreak'
import StreaksData from '../data/streaks.json'

export const StreaksPage = () => {
    const [streaks, setStreaks] = useState(
        JSON.parse(localStorage.getItem('streaks')) || StreaksData
    )

    useEffect(() => {
        localStorage.setItem('streaks', JSON.stringify(streaks))
    }, [streaks])

    const deleteStreak = (id) => {
        setStreaks(streaks.filter((streak) => streak.id !== id))
    }

    const addStreak = (newStreak) => {
        setStreaks([...streaks, newStreak])
    }

    const handleStreakUpdate = (id, isActive, count, timeLeft) => {
        setStreaks(
            streaks.map((streak) =>
                streak.id === id
                    ? { ...streak, isActive, count, timeLeft }
                    : streak
            )
        )
    }

    return (
        <>
            <div className="CreateStreak">
                <Toggle text="Create New Streak">
                    <CreateStreak onCreateStreak={addStreak} />
                </Toggle>
            </div>

            <StreaksList
                onDeleteStreak={deleteStreak}
                onStreakUpdate={handleStreakUpdate}
                streaks={streaks}
            />
        </>
    )
}
