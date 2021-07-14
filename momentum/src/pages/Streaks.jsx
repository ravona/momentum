// hooks:
import useToggle from "../hooks/useToggle"

import StreaksList from "../components/StreaksList/StreaksList"
import CreateStreak from "../components/CreateStreak/CreateStreak"

import Button from "@material-ui/core/Button"

export const Streaks = () => {
    const [shouldShowCreateStreak, toggleCreateStreak] = useToggle()

    return (
        <div className="page">
            <Button
                color="secondary"
                variant="contained"
                onClick={() => toggleCreateStreak(!shouldShowCreateStreak)}
            >
                {shouldShowCreateStreak ? "Hide Form" : "Create Streak"}
            </Button>

            {shouldShowCreateStreak ? <CreateStreak /> : null}

            <StreaksList />
        </div>
    )
}

export default Streaks
