import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/router'
import styles from '../src/styles/createclass.module.css';
const createclass = () => {
    const[classname,Setclassname]=React.useState("")
    const router = useRouter()
    const createClass = ()=>{
        const uid = uuidv4()
        router.push(`/${uid}`);
      }

    return (
        <div className={styles.createclass}>
            <h1> Create Calssroom</h1>
            <input placeholder="Enter the classname" onChange={(e)=>Setclassname(e.target.value)}></input><br></br>
            <button className={styles.createbtn} onClick={createClass}>Create New Class</button>
        </div>
    )


}

export default createclass
