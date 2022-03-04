import React, { useState, useContext } from 'react';
import { Mode } from '../context/DarkMode';


export default function DateAndTime() {

    const { toggleMode } = useContext(Mode);


    const date = new Date().toDateString();

    const [currentTime, setCurrentTime] = useState(date);

    const ct = () => {
        const time = new Date().toLocaleTimeString();
        setCurrentTime(time);
    }

    setInterval(ct, 1000)

    return (
        <>
            <div className="form-check form-switch text-end"> 
            {`Date : ${date} | Time : ${currentTime}`}
                <input className="form-check-input " onClick={toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            </div>

        </>
    )
}
