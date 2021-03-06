import Participants from "../src/components/Participants";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from "../src/styles/Dashboard.module.css"
import React, {useContext} from 'react';
import useSocketContext from '../src/context/SocketContext'
import {useRouter} from "next/router"

const teachersDeck = () => {
    const participants= ["John", "Jane", "Doe", "Alex"];
    const socket = useSocketContext();
    const router=useRouter()

    
    return (
        <div>
            <h1>Your class</h1>
            <TextField id="standard-basic" placeholder="Enter a question" />
            <Button variant="contained" color="primary">
                Send
            </Button>
            <div className={styles.partCont}>
                <h2>
                    Participants
                </h2>
                {
                    participants.map(part=>(
                        <Participants name={part}/>
                    ))
                }
            </div>
        </div>
    )
}

export default teachersDeck
