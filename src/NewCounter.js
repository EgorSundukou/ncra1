import './App.css';
import React, {useState} from "react";
import ConfirmDeleteCounter from "./ConfirmDeleteCounter";

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
            <div className="row">
                <div className="col">

            CounterName
            <input type="text"  class="form-control" name="name" value={name} id="" onChange={changeName}/>
                </div>
                <div className="col">
            Count
            <input type="text"  class="form-control" name="count" value={count} id="" onChange={changeCount}/>
                </div>
                <div className="col">
            <button class="btn btn-outline-secondary" onClick={() => countAdd(name,count)}>Add</button>

                </div>


            </div>
        </div>
    );
}

export default NewCounter;
