import React from "react";

import {Paper} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

import {useStyles} from "../style";


const Clock = ({sec, min, hour}) => {
    const classes = useStyles()

    return (
            <Grid>
                <Paper elevation={3} className={classes.timerWrapper}>
                    <div className={classes.timerBox}>
                        <Grid container direction="row" justify="space-around" alignItems="flex-end">
                            <div>{hour >= 10 ? hour : `0${hour}`}</div>
                            <b>:</b>
                            <div>{min >= 10 ? min : `0${min}`}</div>
                            <b>:</b>
                            <div>{sec >= 10 ? sec : `0${sec}`}</div>
                        </Grid>
                    </div>
                </Paper>
            </Grid>
    )
}
export default Clock