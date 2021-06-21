import './App.css';
import React, {useState} from "react";

function NewCounter(props) {

    const [name, setName] = useState("--")
    const [count, setCount] = useState("22")

    const changeName = (e) =>{
        const newName = e.target.value;
        setName(newName)
    }

    const changeCount = (e) =>{
        const newCount = e.target.value;
        setCount(newCount)
    }

    const countAdd = () =>{
        props.countAdd(name, count);
        setName('');
        setCount('')
    }


    return (
        <div>
            CounterName
            <input type="text" name="name" value={name} id="" onChange={changeName}/>
            Count
            <input type="text" name="count" value={count} id="" onChange={changeCount}/>
            <button onClick={() => countAdd(name,count)}>Add</button>

        </div>
    );
}

export default NewCounter;
