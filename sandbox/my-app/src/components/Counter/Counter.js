import React, {useState} from "react";

const Counter = () => {
    const [number, setNumber] = useState(0);
    const decrement = () => {
        setNumber(number - 1);
    }

    return (<div>
        <p>{number}</p>
        <button onClick={() => setNumber(number+1)}>Increment</button>
        <button onClick={decrement}>Decrease</button>
    </div>);
}


export default Counter;