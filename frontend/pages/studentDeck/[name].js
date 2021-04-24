import { Board } from "../../src/components/Board/Board"
import styles from "../../src/styles/Dashboard.module.css"
import React, {useContext} from 'react';
import useSocketContext from '../../src/context/SocketContext'
import Link from 'next/link';
import { useRouter } from 'next/router'



const studentsDeck = () => {    
    
    return (
        <div>
            <h1>Ms Jane's class</h1>
            <Board/>
        </div>
    )
}

export default studentsDeck;
