import { NavLink } from "react-router-dom"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import DirectionsRun from "@material-ui/icons/DirectionsRun"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    header: {
        marginBottom: theme.spacing(7),
    },
    title: {
        flexGrow: 1,
        textAlign: "center",
        [theme.breakpoints.up("md")]: {
            textAlign: "left",
        },
    },
}))

const TopBar = () => {
    const classes = useStyles()
    return (
        <header className={classes.header}>
            <AppBar position="fixed">
                <Toolbar>
                    <Grid container>
                        <Grid item xs={12} lg={10}>
                            <Button
                                startIcon={<DirectionsRun />}
                                color="inherit"
                                noWrap
                            >
                                <NavLink to="/">Momentum</NavLink>
                            </Button>
                        </Grid>

                        <Grid item xs={12} lg={1}>
                            <Button color="inherit">
                                <NavLink to="/streaks">Streaks</NavLink>
                            </Button>
                        </Grid>

                        <Grid item xs={12} lg={1}>
                            <Button color="inherit">
                                <NavLink to="/challenge">Challenge</NavLink>
                            </Button>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </header>
    )
}

export default TopBar
