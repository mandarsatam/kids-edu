import React, { useRef, useEffect } from 'react';
import io from 'socket.io-client';
// import {SocketContextProvider} from '../../../src/context/SocketContext';
import styles from '../../styles/Board.module.css';
import { useContext } from 'react';
import useSocketContext from '../../../src/context/SocketContext'
import { Button } from "@material-ui/core";
import Image from 'next/image'


const Board = ({ name }) => {
  const canvasRef = useRef(null);
  const colorsRef = useRef(null);
  const [currColor, setCurrColor] = React.useState("blue");

  const socket = useSocketContext();

  let imgUrl = "";
  if (typeof window !== "undefined") {
    imgUrl = localStorage.getItem(name);
    console.log(imgUrl);
  }


  useEffect(() => {

    // --------------- getContext() method returns a drawing context on the canvas-----

    let canvas = canvasRef.current;
    const test = colorsRef.current;
    let context = canvas.getContext('2d');


    // ----------------------- Colors --------------------------------------------------

    // const colors = document.getElementsByClassName('color');
    // // set the current color
    const current = {
      color: "black",
    };

    const colors = document.querySelectorAll('.color');

    console.log(colors);

    // helper that will update the current color
    const onColorUpdate = (e) => {
      console.log("lcick");
      current.color = e.target.value;
      console.log(current.color);
    };

    // loop through the color elements and add the click event listeners
    for (let i = 0; i < colors.length; i++) {
      colors[i].addEventListener('click', onColorUpdate, false);
    }
    let drawing = false;

    // ------------------------------- create the drawing ----------------------------

    const drawLine = (x0, y0, x1, y1, color, emit) => {
      context.beginPath();
      context.moveTo(x0, y0);
      context.lineTo(x1, y1);
      context.strokeStyle = color;
      context.lineWidth = 2;
      context.stroke();
      context.closePath();

      if (!emit) { return; }
      const w = canvas.width;
      const h = canvas.height;

      socket.emit('drawing', {
        x0: x0 / w,
        y0: y0 / h,
        x1: x1 / w,
        y1: y1 / h,
        color,
      });
    };

    // ---------------- mouse movement --------------------------------------

    const onMouseDown = (e) => {
      drawing = true;
      current.x = e.clientX || e.touches[0].clientX;
      current.y = e.clientY || e.touches[0].clientY;
    };

    const onMouseMove = (e) => {
      if (!drawing) { return; }
      drawLine(current.x, current.y, e.clientX || e.touches[0].clientX, e.clientY || e.touches[0].clientY, current.color, true);
      current.x = e.clientX || e.touches[0].clientX;
      current.y = e.clientY || e.touches[0].clientY;
    };

    const onMouseUp = (e) => {
      if (!drawing) { return; }
      drawing = false;
      drawLine(current.x, current.y, e.clientX || e.touches[0].clientX, e.clientY || e.touches[0].clientY, current.color, true);
    };

    // ----------- limit the number of events per second -----------------------

    const throttle = (callback, delay) => {
      let previousCall = new Date().getTime();
      return function () {
        const time = new Date().getTime();

        if ((time - previousCall) >= delay) {
          previousCall = time;
          callback.apply(null, arguments);
        }
      };
    };

    // -----------------add event listeners to our canvas ----------------------

    canvas.addEventListener('mousedown', onMouseDown, false);
    canvas.addEventListener('mouseup', onMouseUp, false);
    canvas.addEventListener('mouseout', onMouseUp, false);
    canvas.addEventListener('mousemove', throttle(onMouseMove, 10), false);

    // Touch support for mobile devices
    canvas.addEventListener('touchstart', onMouseDown, false);
    canvas.addEventListener('touchend', onMouseUp, false);
    canvas.addEventListener('touchcancel', onMouseUp, false);
    canvas.addEventListener('touchmove', throttle(onMouseMove, 10), false);

    // -------------- make the canvas fill its parent component -----------------

    const onResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', onResize, false);
    onResize();

    // ----------------------- socket.io connection ----------------------------
    const onDrawingEvent = (data) => {
      const w = canvas.width;
      const h = canvas.height;
      drawLine(data.x0 * w, data.y0 * h, data.x1 * w, data.y1 * h, data.color);
    }
    console.log(socket);

    // socketRef.current = io.connect('http://localhost:8080');
    socket.on('drawing', onDrawingEvent);
  }, []);

  // ------------- The Canvas and color elements --------------------------

  const saveBoard = () => {
    let imgurl = canvasRef.current.toDataURL("image/jpeg");
    localStorage.setItem(name, JSON.stringify(imgurl));
  }

  return (
    <>
    <div className={styles.canvasMain}>
      {imgUrl === "" ? <canvas ref={canvasRef} className={styles.whiteboard} name="whiteBoard"/>
      : <canvas ref={canvasRef} className={styles.whiteboard} name="whiteBoard"  style={{backgroundImage: "url(" + imgUrl + ")"}}/>}
      
      <div ref={colorsRef} className={styles.colors}>
        <button value="black" class="color" style={{width: "50px", height: "50px", backgroundColor:"black"}}/>
        <button value="red"  class="color" style={{width: "50px", height: "50px", backgroundColor:"red"}}/>
        <button value="green" class="color" style={{width: "50px", height: "50px", backgroundColor:"green"}}/>
        <button value="blue" class="color" style={{width: "50px", height: "50px", backgroundColor:"blue"}}/>
        <button value="yellow" class="color" style={{width: "50px", height: "50px", backgroundColor:"yellow"}}/>
      </div>
    </div>
      <Button variant="contained" color="primary" onClick={saveBoard}>Submit Answer</Button>
      {/* {imgUrl && <Image src={imgUrl}  width="100" height="100"/>} */}
      
      {/* <div>
        Select Brush Color : &nbsp;
        <input type="color" value={currColor} onChange={(e) => setCurrColor(e.target.value)} />
        </div>
      
        <div>
        Select Brush Size : &nbsp;
        <select value={size} onChange={(e) => setSize(e.targ.value)}>
        <option> 5 </option>
        <option> 10 </option>
        <option> 15 </option>
        <option> 20 </option>
        <option> 25 </option>
        <option> 30 </option>
        </select>
      </div> */}
    </>


  );
};

export { Board };