import { useState } from 'react'
import Countdown from 'react-countdown'
import add from 'date-fns/add'
import {
    FaTrash,
    FaHourglassHalf,
    FaComment,
    FaTwitter,
    FaClock,
    FaTrophy,
} from 'react-icons/fa'

import { Notification } from '../Notification/Notification'
import { getRandomArrayItem } from '../../utils/utils'
import messages from '../../data/messages.json'

// style:
import './Streak.scss'

export const Streak = ({ streak, onDeleteStreak, onStreakUpdate }) => {
    const [message, setMessage] = useState('')

    const getDeadline = () =>
        add(new Date(), {
            [streak.intervalUnit]: streak.intervalNum,
        })

    const handleDeleteStreak = () => {
        onDeleteStreak(streak.id)
    }

    const handleStreakIncrement = () => {
        streak.count = streak.count + 1
        streak.deadline = getDeadline()
        onStreakUpdate((streak.isActive = true))
        setMessage(getRandomArrayItem(messages.increment))
    }

    const handleStreakLoss = () => {
        streak.count = 0
        streak.deadline = 0
        onStreakUpdate((streak.isActive = false))
        setMessage(getRandomArrayItem(messages.loss))
    }

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
        goalStatus = 'Congratulations, you have reached your goal!'
    }

    let StreakTweet = ''
    if (streak.isActive) {
        StreakTweet = `${streak.title} with Momentum - a habit forming app. I'm on a streak of ${streak.count} ${streak.intervalUnit} and going!`
    } else {
        StreakTweet = `${streak.title} with Momentum - a habit forming App. Give it a try, it's awesome!`
    }

    return (
        <>
            <div
                className={`Streak Streak--${
                    streak.isActive ? 'active' : 'inactive'
                }`}
            >
                <div className={'Streak__header'}>
                    <div className={'Streak__icon Streak__icon--share'}>
                        <a
                            target="_blank"
                            rel="noreferrer noopener"
                            href={`https://twitter.com/intent/tweet?text=${StreakTweet}`}
                        >
                            <FaTwitter />
                        </a>
                    </div>

                    <div className={'Streak__icon Streak__icon--delete'}>
                        <FaTrash onClick={handleDeleteStreak} />
                    </div>
                </div>

                <div className={'Streak__body'}>
                    <h3 className={'Streak__title'}>{streak.title}</h3>
                    <h4 className={'Streak__motivation'}>
                        {streak.motivation}
                    </h4>

                    <ul className={'Streak__list'}>
                        {message ? (
                            <li className={'Streak__list-item'}>
                                <FaComment className="Streak__list-item__icon" />
                                <Notification text={message} />
                            </li>
                        ) : null}

                        <li className={'Streak__list-item'}>
                            <FaClock className="Streak__list-item__icon" />
                            <span>
                                Increment every{' '}
                                {streak.intervalNum === 1
                                    ? null
                                    : streak.intervalNum}{' '}
                                {streak.intervalNum === 1
                                    ? streak.intervalUnit.slice(0, -1)
                                    : streak.intervalUnit}{' '}
                                to maintain this Streak.
                            </span>
                        </li>

                        {streak.isActive ? (
                            <li className={'Streak__list-item'}>
                                <FaHourglassHalf className="Streak__list-item__icon" />
                                <Countdown
                                    date={streak.deadline}
                                    onComplete={handleStreakLoss}
                                ></Countdown>
                            </li>
                        ) : null}

                        {streak.goal ? (
                            <li className={'Streak__list-item'}>
                                <FaTrophy className="Streak__list-item__icon" />
                                <span>{goalStatus}</span>
                            </li>
                        ) : null}
                    </ul>
                </div>

                <div className="Streak__footer">
                    <div className="Streak__counter">{streak.count}</div>
                    <button
                        onClick={handleStreakIncrement}
                        className={`btn btn--medium btn--light btn--${
                            streak.isActive ? 'success' : 'primary'
                        }`}
                    >
                        Increment
                    </button>
                </div>
            </div>
        </>
    )
}
