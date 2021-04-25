import Link from 'next/link';
import { withRouter,useRouter } from 'next/router';
import Image from 'next/image';

import styles from '../src/styles/index.module.css';
const IndexPage = (props) =>{
    const router=useRouter()
    const gotoClass=()=>{
        router.push("/teachersDeck")
    }

    const joinClass=()=>{
        router.push("/middlePage")
    }

    return (
        <>
            <style jsx>
                {`
                    .icecream-container {
                        width: 500px;
                        margin: 32px auto;
                    }
                `}
            </style>
            <h1 className={styles.heading}>Index Page</h1>
            <div className={styles.linksContainer}>
                <button className={styles.teacher} onClick={gotoClass}>I am a Teacher</button>
                <button className={styles.student} onClick={joinClass}>I am a Student</button>
            </div>
        </>
    );
}
 


export default withRouter(IndexPage);