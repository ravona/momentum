import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(7, 0),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
}))

const Hero = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Container maxWidth="md">
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="textPrimary"
                    gutterBottom
                >
                    Hi there!
                </Typography>
                <Typography
                    variant="h5"
                    align="center"
                    color="textSecondary"
                    paragraph
                >
                    Momentum is a habit forming app built with React.
                    <br />
                    Get rid of bad habits and develop good ones through positive
                    reinforcement.
                    <br />
                </Typography>
                <div className={classes.heroButtons}>
                    <Grid container spacing={2} justifyContent="center">
                        <Grid item>
                            <Button variant="contained" color="secondary">
                                Get Started
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant="outlined" color="primary">
                                Sign In
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>
    )
}

export default Hero
