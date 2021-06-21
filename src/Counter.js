import './App.css';
import React from "react";

function Counter(props) {


    return (
        <div>
            {props.counter.name}

            <button onClick={() => props.countDecrease(props.counter.id)}>-</button>

            {props.counter.count}
            <button onClick={() => props.countIncrease(props.counter.id)}>+</button>
            <button onClick={() => props.countReset(props.counter.id)}>Reset</button>
            <button onClick={() => props.countRemove(props.counter.id)}>Remove</button>

        </div>
    );
}

export default Counter;
