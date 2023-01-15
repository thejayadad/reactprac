import React, {useState} from 'react'
import "../Name/name.css"

function Name(){
    const [isMoveOver, setMouseOver] = useState(false);
    function handleChange(){

    }


    function changeColor(){
        setMouseOver(true);
    }

    function changeBack(){
        setMouseOver(false);
    }

    return (
        <div className="container">
            <h3>Please Enter Your Name</h3>
            <input type="text" placeholder="Whats your name?" />
            <button
            onMouseOver={changeColor}
            onMouseOut={changeBack}
            style={{backgroundColor: isMoveOver ? "black" : "orange"}}
            onChange={handleChange}
            >Submit</button>
        </div>
    )
}

export default Name;