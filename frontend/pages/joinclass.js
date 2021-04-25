import React from 'react'
import { useRouter } from 'next/router'
import styles from '../src/styles/createclass.module.css';
const joinclass = () => {
    const[name,Setname]=React.useState("")
    const router = useRouter()
    
    const joinclass=()=>{
        router.push(`/studentDeck/${name}`)
    }



    return (
        <div className={styles.joinclass}>
            <h1> Join Calssroom</h1>
            <input placeholder="Enter your name" onChange={(e)=>Setname(e.target.value)}></input><br/>
            <button className={styles.createbtn} onClick={joinclass}>join class</button>
        </div>
    )


}

export default joinclass
