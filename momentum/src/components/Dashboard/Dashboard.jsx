import { Route } from "react-router-dom"

// pages:
import Home from "../../pages/Home"
import Streaks from "../../pages/Streaks"
import Challenge from "../../pages/Challenge"

export const Dashboard = () => {
    return (
        <>
            <Route path="/streaks">
                <Streaks />
            </Route>

            <Route path="/challenge">
                <Challenge />
            </Route>

            <Route path="/" exact>
                <Home />
            </Route>
        </>
    )
}

export default Dashboard
