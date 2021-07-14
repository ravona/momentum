import React from "react"

// material-ui:
import Container from "@material-ui/core/Container"
import { createTheme, ThemeProvider } from "@material-ui/core/styles"

const colors = {
    primary: "#173f5f",
    secondary: "#20639b",
    error: "#db3f28",
    warning: "#720e07",
    info: "#ffcd00",
    success: "#78be20",
}

const momentumTheme = createTheme({
    typography: {
        fontFamily: "Fredoka One, Arial, sans-serif",
    },
    palette: {
        primary: {
            main: colors.primary,
        },
        secondary: {
            main: colors.secondary,
        },
        error: {
            main: colors.error,
        },
        warning: {
            main: colors.warning,
        },
        info: {
            main: colors.info,
        },
        success: {
            main: colors.success,
        },
    },
})

// components:
import TopBar from "./components/TopBar"
import Dashboard from "./components/Dashboard/Dashboard"

// style:
import "./App.scss"
import { StreakProvider } from "./context/StreakProvider"

function App() {
    return (
        <div className="App">
            <ThemeProvider theme={momentumTheme}>
                <Container maxWidth="lg">
                    <StreakProvider>
                        <TopBar />
                        <Dashboard />
                    </StreakProvider>
                </Container>
            </ThemeProvider>
        </div>
    )
}

export default App
