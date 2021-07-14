import React from 'react'
import './HomePage.scss'

export const HomePage = () => {
    return (
        <div className="HomePage">
            <h1 className="HomePage__title">
                Momentum is a habit forming app built with React
            </h1>
            <h2 className="HomePage__subtitle">
                Get rid of bad habits or develop good ones through positive
                reinforcement
            </h2>

            <div className="HomePage__cta">
                <button className="btn btn--medium btn--success btn--light">
                    Get Started
                </button>

                <button className="btn btn--medium btn--secondary btn--light">
                    Log-in
                </button>
            </div>
        </div>
    )
}
