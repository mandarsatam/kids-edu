import styles from "../styles/Participants.module.css"
import Image from 'next/image'
import Button from '@material-ui/core/Button';
import { useRouter } from 'next/router'
import useSocketContext from '../context/SocketContext'


const Participants = ({name}) => {
    const router = useRouter();
    let group = name+"Group";

    const socket = useSocketContext();

    const goToBoard = (e) => {
        e.preventDefault();
        socket.emit("joinSession", {name: "teacher", group});
        router.push(`/studentDeck/${name}`)
    }

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
            <Button variant="contained" color="primary" onClick={(e)=>goToBoard(e)}>
                Go to Whiteboard
            </Button>
        </div>
    )
}

export default Participants
