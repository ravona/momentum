// context:
import { useStreaks } from "../../context/StreakProvider"

// components:
import { Streak } from "../Streak/Streak"

// style:
import "./Streaks.scss"

const StreaksList = () => {
    const { streaks } = useStreaks()

    return (
        <div className="Streaks">
            {streaks.map((streak) => (
                <Streak key={streak.id} streak={streak} />
            ))}
        </div>
    )
}

export default StreaksList
