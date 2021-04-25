import { Board } from "../src/components/Board/Board"
import styles from "../src/styles/Dashboard.module.css"
import React, {useContext} from 'react';
import useSocketContext from '../src/context/SocketContext'
import Link from 'next/link';
import useSocketContext from '../context/SocketContext'
import { Button } from "@material-ui/core";

const studentsDeck = () => {  
    
    const socket = useSocketContext();

    const goToBoard = (e) => {
        e.preventDefault();
        socket.emit("endSession", {name: "teacher", group});
        router.push(`/teachersDeck`)
    }
    
    return (
        <div>
            <h1>Ms Jane's class</h1>
            <Board/>
            <Button variant="contained" color="primary" onClick={goToBoard}>Go back</Button>
        </div>
    )
}

export default studentsDeck;
