import { Board } from "../../src/components/Board/Board"
import React, { useContext, useEffect } from 'react';
import useSocketContext from '../../src/context/SocketContext'
import Link from 'next/link';
import { useRouter } from 'next/router'
import { Button } from "@material-ui/core";
import styles from "../../src/styles/studentsDeck.module.css";
import { mdiArrowLeftCircle } from '@mdi/js';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@mdi/react'


const studentsDeck = () => {
    const socket = useSocketContext();
    const router = useRouter();
    const { name } = router.query;
    const [currQues, setCurrQues] = React.useState("");

    useEffect(() => {
        socket.on("question", (question) => {
            setCurrQues(question);
        })
    }, [])

    const goToBoard = (e) => {
        e.preventDefault();
        socket.emit("endSession", { name: "teacher", group: name + "Group" });
        router.push(`/teachersDeck`)
    }

    return (
        <div className={styles.studDeckCont}>
            <div className={styles.studHead}>
                <Icon path={mdiArrowLeftCircle} size={2} onClick={goToBoard} color="white" style={{marginTop:"0.7em"}}/>
                {/* <Button variant="contained" color="primary" >Go back</Button> */}
                <h1>Ms Jane's class</h1>
            </div>
            <h2>Q. {currQues}</h2>
            <Board name={name} />
        </div>
    )
}

export default studentsDeck;
