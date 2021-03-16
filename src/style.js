import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
    },
    timerWrapper: {
        marginButton: '20px',
    },
    timerBox: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '20px 40px',
        border: '25px solid darkgrey',
        color: 'black',
        '& div': {
            fontSize: '60px',
            fontWeight: 700,
            color: 'black',
        },
        '& b': {
            // fontSize: '50px'
        }
    },
    buttonGroup: {
        padding: "8px 20px"
    }
}));
