import React from 'react'
import { useRouter } from 'next/router'
import styles from '../src/styles/createclass.module.css';
const joinclass = () => {
    const[name,Setname]=React.useState("")
    const router = useRouter()
    
    



    return (
        <div className={styles.joinclass}>
            <h1> Join Calssroom</h1>
            <input placeholder="Enter your name" onChange={(e)=>Setname(e.target.value)}></input><br/>
            <input placeholder="Enter the link"></input><br/>
            <button className={styles.createbtn}>join class</button>
        </div>
    )


}

export default joinclass
