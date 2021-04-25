import Participants from "../src/components/Participants";
import { Board } from "../src/components/Board/Board"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from "../src/styles/teachers.module.css"
import React, {useContext, useState} from 'react';
import useSocketContext from '../src/context/SocketContext'


const teachersDeck = () => {
    const participants= ["John", "Jane", "Doe", "Alex"];
    const socket = useSocketContext();

    const [ques, setQues] = useState("");

    const submitQuestion = (e) => {
        e.preventDefault();
        socket.emit("submitQuestion", ques)
    }
    
    return (
        <div className={styles.teachersCont}>
            <div className={styles.teachersLeft}>

            </div>
            <h1>Your class</h1>
            <TextField id="standard-basic" placeholder="Enter a question" value={ques} onChange={(e) => setQues(e.target.value)}/>
            <Button variant="contained" color="primary" onClick={(e) =>submitQuestion(e)}>
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
            <button onClick={() => joinSession()}>Join</button>
        </div>
    )
}

export default teachersDeck
