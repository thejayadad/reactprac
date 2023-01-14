import React, {useState} from 'react'
import "../components/app.css"

function App() {
    const [count, setCount ] = useState(0);

    function increase(){
        setCount(count + 1);
    }
    function decrease(){
        setCount(count - 1);
    }

  return (

    <div className='container'>
        <h2>Simple Counter UseState React</h2>
        <h3>{count}</h3>
        <div className="box">
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
        </div>
       </div>
  )
}

export default App