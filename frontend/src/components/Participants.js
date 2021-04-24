import styles from "../styles/Participants.module.css"
import Image from 'next/image'

const Participants = ({name}) => {
    return (
        <div className={styles.partCont}>
            <div className={styles.partTop}>
                <Image
                    src="/userImg.png"
                    alt="Picture of the author"
                    width={50}
                    height={50}
                />
                <h2 style={{marginLeft:"1em"}}>{name}</h2>
            </div>
            <button>View Answers</button>
        </div>
    )
}

export default Participants
