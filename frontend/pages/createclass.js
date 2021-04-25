import React from 'react'
import { useRouter } from 'next/router'
import styles from '../src/styles/createclass.module.css';
const createclass = () => {
    const[classname,Setclassname]=React.useState("")
    
    const router = useRouter()
    
      const startClass=()=>{
          router.push(`/teachersDeck`)
      }
    return (
        <div className={styles.createclass}>
            <h1> Create Calssroom</h1>
            <input placeholder="Enter the classname" onChange={(e)=>Setclassname(e.target.value)}></input><br></br>
            <button className={styles.createbtn} onClick={startClass}>Start Class</button>
        </div>
    )


}

export default createclass
