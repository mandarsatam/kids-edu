import { useState } from "react"
import Participants from "../src/components/Participants";
import { Board } from "../src/components/Board/Board"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from "../src/styles/Dashboard.module.css"
// import {SocketContextProvider} from '../src/context/SocketContext';
import React, {useContext} from 'react';
import socket from 'socket.io-client';
import useSocketContext from '../src/context/SocketContext'



const dashboard = () => {
    // const[open, setOpen] = useState(true);
    const participants= ["John", "Jane", "Doe", "Alex"];
    // const socket = useContext(SocketContextProvider);
    const socket = useSocketContext();

    const joinSession = () => {
        console.log("something");
        // participants.map(part => {
        //     socket.emit("joinSession", part);
        // })

        socket.emit("joinSession", "John");
    }
    
    return (
        <div>
            <h1>Ms Jane's class</h1>
            {/* <TextField id="standard-basic" placeholder="Enter a question" />
            <Button variant="contained" color="primary">
                Send
            </Button> */}
            <Board/>
            {/* <div className={styles.partCont}>
                <h2>
                    Participants
                </h2>
                {
                    participants.map(part=>(
                        <Participants name={part}/>
                    ))
                }
            </div> */}
            <button onClick={() => joinSession()}>Join</button>
        </div>
    )
}

export default dashboard
