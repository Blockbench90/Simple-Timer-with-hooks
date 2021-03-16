import React, {memo} from "react";
import Avatar from "@material-ui/core/Avatar";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import Typography from "@material-ui/core/Typography";

import {useStyles} from "../style";


const Header = memo(() => {
    const classes = useStyles()

    return (
        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
                <AccessTimeIcon/>
            </Avatar>
            <Typography component="h1" variant="h5">
                Timer
            </Typography>
        </div>
    )
})
export default Header