import useSocketContext from '../src/context/SocketContext'
import { useRouter } from 'next/router'


const middlePage = () => {  
    const router = useRouter()
    const socket = useSocketContext();
    const name = "Alex";
    const group = "AlexGroup"

    const joinSession =(e) => {
        e.preventDefault();
        socket.emit("joinSession", {name, group});
        router.push(`/studentDeck/${name}`)
    }
    
    return (
        <div>
            <button onClick={(e) => joinSession(e)}>Join</button>
        </div>
    )
}

export default middlePage;
