import { useFormik } from "formik"
import { nanoid } from "nanoid"

import { useStreaks } from "../../context/StreakProvider"

// schema
import StreakSchema from "./StreakSchema"

const CreateStreak = () => {
    const { addStreak } = useStreaks()

    const formik = useFormik({
        initialValues: {
            title: "",
            motivation: "",
            intervalNum: 1,
            intervalUnit: "days",
            goal: null,
            deadline: null,
            count: 0,
            isActive: false,
            message: "",
        },
        validationSchema: StreakSchema,
        onSubmit: (values) => {
            addStreak({ ...values, id: nanoid(10) })
        },
    })

    return (
        <form onSubmit={formik.handleSubmit} className="form">
            <h3 className="form__title">Create New Streak</h3>
            <div className="form__section">
                <label className="form__label">Name your streak:</label>

                <input
                    autoComplete="off"
                    required
                    className="form__input"
                    name="title"
                    type="text"
                    placeholder="I quit smoking!"
                    value={formik.values.title}
                    onChange={formik.handleChange}
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
                    placeholder="So I can play basketball with my kids"
                    value={formik.values.motivation}
                    onChange={formik.handleChange}
                />
            </div>

            <div className="form__section">
                <label className="form__label">Should be updated Every</label>

                <input
                    required
                    className="form__input"
                    name="intervalNum"
                    type="number"
                    value={formik.values.intervalNum}
                    onChange={formik.handleChange}
                />
            </div>

            <div className="form__section">
                <label className="form__label">Pick time interval</label>

                <select
                    required
                    className="form__select"
                    name="intervalUnit"
                    value={formik.values.intervalUnit}
                    onChange={formik.handleChange}
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
                    name="goal"
                    type="number"
                    value={formik.values.goal}
                    onChange={formik.handleChange}
                />
            </div>

            <div className="form__section">
                <button
                    type="submit"
                    className="btn btn--small btn--success btn--light btn--uppercase"
                >
                    Create
                </button>
            </div>
        </form>
    )
}

export default CreateStreak
