import React, {useEffect, useState} from "react";

import Container from '@material-ui/core/Container';

import Clock from "./components/Сlock";
import Header from "./components/Header";
import GroupButtons from "./components/GroupButtons";
import Footer from "./components/Footer";


const Timer = () => {
    const [sec, setSec] = useState(0)
    const [min, setMin] = useState(0)
    const [hour, setHour] = useState(0)

    const [intervalId, setIntervalId] = useState()

    const [play, setPlay] = useState(false)
    const [pauseOn, setPauseOn] = useState(true)


    const start = () => {
        setPlay(true)
        setPauseOn(false)
    }

    const pause = () => {
        clearInterval(intervalId)
        setPlay(false)
        setPauseOn(true)
    }

    const reset = () => {
        setSec(0)
        setMin(0)
        setHour(0)
    }

    if (sec >= 60) {
        setMin((min) => min + 1)
        setSec(0)
    } else if (min >= 60) {
        setHour((hour) => hour + 1)
        setSec(0)
        setMin(0)
    } else if (hour >= 60) {
        reset()
    }

    const step = 1000

    useEffect(() => {
        if (play) {
            const id = setInterval(() => {
                setSec((sec) => sec + 1)
            }, step)
            setIntervalId(id)
        }
    }, [play])

    return (
        <Container component="main" maxWidth="xs">
            <Header/>
            <Clock sec={sec} min={min} hour={hour}/>
            <br/>
            <GroupButtons pause={pause} pauseOn={pauseOn} play={play} reset={reset} sec={sec} start={start}/>
            <Footer/>
        </Container>
    )
}
export default Timer