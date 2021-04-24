import { useState } from "react"
import Participants from "../src/components/Participants";
import {Board} from "../src/components/Board/Board"

const dashboard = () => {
    // const[open, setOpen] = useState(true);
    // const participants= ["John", "Jane", "Doe", "Alex"];

    return (
        <div>
            <h1>Ms Jane's class</h1>
            {/* <div>
                <h2>
                    Participants
                </h2>
                {
                    participants.map(part=>(
                        <Participants name={part}/>
                    ))
                }
            </div> */}
            <Board/>
        </div>
    )
}

export default dashboard
