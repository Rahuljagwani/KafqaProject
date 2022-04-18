import React, { useState } from "react";
function Counter() {

    var [value, setValue] = useState(0);

    const increment = () => {
        setValue(value + 1);
    }
    const decrement = () => {
        setValue(value - 1);
    }
    if (value >= 5 && value <= 100) {
        document.getElementById('count').style.backgroundColor = "blue";
    }
    else if (value > 100)
        document.getElementById('count').style.backgroundColor = "green";


    return (
        <>
        <br></br >
            <h1>Incrementor Deccrementor</h1>
            
            <h3>Value{'<'}5 ={'>'}  Colour:red</h3>
           
            <h3>5{'<'}=Value{'<'}=100 ={'>'} Colour:blue</h3>
            
            <h3>Value{'>'}100 ={'>'} Colour:green </h3>
           <br></br >
            <div className="container-counter">
                <button onClick={increment} className="btn1">+</button>
                <div className="counter-value" id="count">{value}</div>
                <button onClick={decrement} className="btn1">-</button>
            </div>
        </>
    )
}
export default Counter;