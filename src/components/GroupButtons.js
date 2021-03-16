import React from "react";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import {useStyles} from "../style";


const GroupButtons = ({start, play, pause, pauseOn, reset, sec}) => {
    const classes = useStyles()

    return (
        <Grid container direction="row" justify="space-around" alignItems="flex-end">

            <Button onClick={start} disabled={play} variant="contained" color='primary'
                    className={classes.buttonGroup}>
                Start
            </Button>

            <Button onClick={pause} disabled={pauseOn} variant="contained" className={classes.buttonGroup}>
                Pause
            </Button>

            <Button onClick={reset} disabled={sec === 0} variant="contained" color='secondary'
                    className={classes.buttonGroup}>
                Reset
            </Button>
        </Grid>
    )
}
export default GroupButtons