import React, {useState} from 'react'
import "../Time/time.css"

function Time(){
    const presentTime = new Date().toLocaleTimeString();
    const [time, setTime] = useState(presentTime);

    function currentTime(){
        const newTime = new Date().toLocaleTimeString();
        setTime(newTime);
    }
return (
    <div className="container">
        <h2>How to Display Local Time</h2>
        <p>{time}</p>
        <button onClick={currentTime}>Current Time</button>
     </div>
)
}

export default Time;