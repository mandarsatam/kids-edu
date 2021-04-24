import { useState } from 'react';
import Board from '../board/Board';

import './style.css';

const Container = () =>
{
    const [color, setColor] = useState("#000000");
    const [size, setSize] = useState("5");

    const changeColor = (e) => {
        setColor(e.target.value)
    }

    const changeSize = (e) => {
        setSize(e.target.value)
    }

    return (
        <div className="container">
            <div class="tools-section">
                <div className="color-picker-container">
                    Select Brush Color : &nbsp; 
                    <input type="color" value={color} onChange={(e) => changeColor(e)}/>
                </div>

                <div className="brushsize-container">
                    Select Brush Size : &nbsp; 
                    <select value={size} onChange={(e) => changeSize(e)}>
                        <option> 5 </option>
                        <option> 10 </option>
                        <option> 15 </option>
                        <option> 20 </option>
                        <option> 25 </option>
                        <option> 30 </option>
                    </select>
                </div>

            </div>

            <div class="board-container">
                <Board color={this.state.color} size={this.state.size}></Board>
            </div>
        </div>
    )
}

export default Container