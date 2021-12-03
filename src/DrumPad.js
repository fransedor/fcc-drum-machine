import React, { useEffect } from 'react';
import './DrumPad.css'

function DrumPad({name, source, keyTrigger, handler, power}) {
    // useEffect(() => {
    //     let pressedPad = document.getElementById(keyTrigger);
    //     window.addEventListener("keydown", (e) => {
    //         if (e.key === keyTrigger.toLowerCase()) {
    //             let audio = document.getElementById(name);
    //             audio.play();
    //             handler(name);
    //             pressedPad.style.backgroundColor = "orange";
    //         }
    //     });
    //     window.addEventListener("keyup", (e) => {
    //         if (e.key === keyTrigger.toLowerCase()) {
    //             pressedPad.style.backgroundColor = "lightgrey";
    //         }
    //     })
    // },[])
    const keydownHandler = (e) => {
        if (e.key === keyTrigger.toLowerCase()) {
            let audio = document.getElementById(name);
            audio.play();
            handler(name);
            document.getElementById(keyTrigger).style.backgroundColor = "orange";
        }
    }
    const keyupHandler = (e) => {
        if (e.key === keyTrigger.toLowerCase()) {
            document.getElementById(keyTrigger).style.backgroundColor = "lightgrey";
        }
    }
    useEffect(() => {
        if (power === true) {
            window.addEventListener("keydown", keydownHandler);
            window.addEventListener("keyup", keyupHandler)
        } return () => {
            window.removeEventListener("keydown", keydownHandler);
            window.removeEventListener("keyup", keyupHandler);
        }
    },[power]);
    console.log(power);
    
    
    return (
        <div className="drum-pad">
            <p id={keyTrigger}>{keyTrigger}</p>
            <audio id={name} src={source} ></audio>
        </div>
    )
}

export default DrumPad
