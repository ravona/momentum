import { useState } from 'react'
import { nanoid } from 'nanoid'

// style:
import './CreateStreak.scss'

const CreateStreak = ({ onCreateStreak }) => {
    const [title, setTitle] = useState('')
    const [motivation, setMotivation] = useState('')
    const [intervalNum, setIntervalNum] = useState(1)
    const [intervalUnit, setIntervalUnit] = useState('days')
    const [goal, setGoal] = useState(0)

    const handleSubmit = (e) => {
        e.preventDefault()
        const newStreak = {
            id: nanoid(10),
            title,
            isActive: false,
            motivation,
            intervalNum,
            intervalUnit,
            count: 0,
            goal: parseInt(goal, 10),
            deadline: 0,
        }
        onCreateStreak(newStreak)
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="form">
                <h2 className="form__title">Create New Streak</h2>
                <div className="form__section">
                    <label className="form__label">Name your streak:</label>

                    <input
                        autoComplete="off"
                        required
                        className="form__input"
                        name="title"
                        type="text"
                        value={title}
                        placeholder="I quit smoking!"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <div className="form__section">
                    <label className="form__label">
                        Why maintaining this streak is important to you?
                    </label>

                    <input
                        required
                        autoComplete="off"
                        className="form__input"
                        name="motivation"
                        type="text"
                        value={motivation}
                        placeholder="So I can play basketball with my kids"
                        onChange={(e) => setMotivation(e.target.value)}
                    />
                </div>

                <div className="form__section">
                    <label className="form__label">
                        Should be updated Every
                    </label>

                    <input
                        required
                        className="form__input"
                        name="intervalNum"
                        type="number"
                        value={intervalNum}
                        onChange={(e) => setIntervalNum(e.target.value)}
                    />
                </div>

                <div className="form__section">
                    <label className="form__label">Pick time interval</label>

                    <select
                        required
                        className="form__select"
                        name="intervalUnit"
                        value={intervalUnit}
                        onChange={(e) => setIntervalUnit(e.target.value)}
                    >
                        <option value="seconds">Seconds</option>
                        <option value="minutes">Minutes</option>
                        <option value="hours">Hours</option>
                        <option value="days">Days</option>
                    </select>
                </div>

                <div className="form__section">
                    <label className="form__label">
                        End Streak once counter reaches:
                    </label>
                    <input
                        className="form__input"
                        name="intervalNum"
                        type="number"
                        value={goal}
                        onChange={(e) => setGoal(e.target.value)}
                    />
                </div>

                <div className="form__section">
                    <button
                        className="btn btn--small btn--success btn--light btn--uppercase"
                        type="submit"
                        value="Create"
                    >
                        Create
                    </button>
                </div>
            </form>
        </>
    )
}

export default CreateStreak
