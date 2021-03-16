import React, {memo} from "react";

import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";

const Footer = memo(() => {

    return (
        <Box mt={12}>
            <Typography variant="body2" color="textSecondary" align="center">
                <Link color="inherit" href="https://koitechs.com" target="_blank">
                    Koitechs
                </Link>{' '}{new Date().getFullYear()}
            </Typography>
        </Box>
    )
})
export default Footer