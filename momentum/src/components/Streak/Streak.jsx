import { useReducer, useEffect } from "react"

// reducer:
import reducer from "./reducer"

import Countdown from "react-countdown"

import add from "date-fns/add"
import {
    FaTrash,
    FaHourglassHalf,
    FaComment,
    FaTwitter,
    FaClock,
    FaTrophy,
} from "react-icons/fa"

// context:
import { useStreaks } from "../../context/StreakProvider"

// style:
import "./Streak.scss"

export const Streak = ({ streak }) => {
    const { streaks, setStreaks, deleteStreak } = useStreaks()

    const initialStreakState = { ...streak }
    const [streakState, dispatch] = useReducer(reducer, initialStreakState)

    const {
        id,
        isActive,
        title,
        motivation,
        count,
        deadline,
        intervalUnit,
        intervalNum,
        goal,
    } = streakState

    const getDeadline = () =>
        add(new Date(), {
            [streak.intervalUnit]: intervalNum,
        })

    const handleStreakIncrement = () => {
        dispatch({
            type: "STREAK_INCREMENT",
            payload: {
                isActive: true,
                count: count + 1,
                deadline: getDeadline(),
            },
        })
    }

    const handleStreakLoss = () => {
        dispatch({
            type: "STREAK_LOSS",
            payload: {
                count: 0,
                deadline: 0,
                isActive: false,
            },
        })
    }

    // updates props when local state changes
    useEffect(() => {
        setStreaks(
            streaks.map((streak) =>
                streak.id === id ? { ...streak, ...streakState } : streak
            )
        )
    }, [streakState])

    let goalStatus
    if (streak.goal > streak.count) {
        goalStatus = `${
            streak.goal - streak.count
        } repetitions left to reach goal!`
    }

    if (streak.count > streak.goal) {
        goalStatus = `${
            streak.count - streak.goal
        } repetitions beyond your goal!`
    }

    if (streak.count === streak.goal) {
        goalStatus = "Congratulations, you have reached your goal!"
    }

    let StreakTweet = ""
    if (isActive) {
        StreakTweet = `${title} with Momentum - a habit forming app. I'm on a streak of ${count} ${intervalUnit} and going!`
    } else {
        StreakTweet = `${title} with Momentum - a habit forming App. Give it a try, it's awesome!`
    }

    return (
        <div className={`Streak Streak--${isActive ? "active" : "inactive"}`}>
            <div className={"Streak__header"}>
                <div className={"Streak__icon Streak__icon--share"}>
                    <a
                        target="_blank"
                        rel="noreferrer noopener"
                        href={`https://twitter.com/intent/tweet?text=${StreakTweet}`}
                    >
                        <FaTwitter />
                    </a>
                </div>

                <div className={"Streak__icon Streak__icon--delete"}>
                    <FaTrash onClick={() => deleteStreak(id)} />
                </div>
            </div>

            <div className={"Streak__body"}>
                <h3 className={"Streak__title"}>{title}</h3>
                <h4 className={"Streak__motivation"}>{motivation}</h4>

                <ul className={"Streak__list"}>
                    <li className={"Streak__list-item"}>
                        <FaComment className="Streak__list-item__icon" />
                    </li>

                    <li className={"Streak__list-item"}>
                        <FaClock className="Streak__list-item__icon" />
                        <span>
                            Increment every{" "}
                            {intervalNum === 1 ? null : intervalNum}{" "}
                            {intervalNum === 1
                                ? intervalUnit.slice(0, -1)
                                : intervalUnit}{" "}
                            to maintain this Streak.
                        </span>
                    </li>

                    {isActive ? (
                        <li className={"Streak__list-item"}>
                            <FaHourglassHalf className="Streak__list-item__icon" />
                            <Countdown
                                date={deadline}
                                onComplete={handleStreakLoss}
                            ></Countdown>
                        </li>
                    ) : null}

                    {goal ? (
                        <li className={"Streak__list-item"}>
                            <FaTrophy className="Streak__list-item__icon" />
                            <span>{goalStatus}</span>
                        </li>
                    ) : null}
                </ul>
            </div>

            <div className="Streak__footer">
                <div className="Streak__counter">{count}</div>
                <button
                    onClick={handleStreakIncrement}
                    className={`btn btn--medium btn--light btn--${
                        isActive ? "success" : "primary"
                    }`}
                >
                    Increment
                </button>
            </div>
        </div>
    )
}
