
import './App.css';
import Counter from "./Counter";
import React, {useState} from "react";
import NewCounter from "./NewCounter";
import ConfirmDeleteCounter from "./ConfirmDeleteCounter";

function App() {


  const startCounters = [
    {id: 1, name: 'Counter 1', count: 1},
    {id: 2, name: 'Counter 2', count: 2},
    {id: 3, name: 'Counter 3', count: 3},
    {id: 4, name: 'Counter 4', count: 5},
  ]


  const [counters, setTotalCount] = useState(startCounters)

  const countIncrease= (id) => {
    console.log(id)
    const newCounter = counters.map(el => (el.id===id)? {...el, count: el.count + 1}: el)
    setTotalCount(newCounter)
  }
    const countDecrease= (id) => {
      const newCounter = counters.map(el => (el.id===id)? {...el, count: el.count - 1}: el)
      setTotalCount(newCounter)
    }

    const resetTotalCount = () =>{
      const newCounter = counters.map(el => ({...el, count:0}))
      setTotalCount(newCounter)
    }

    const countReset = (id) =>{
      const newCounter = counters.map(el => (el.id===id)? {...el, count: 0}: el)
      setTotalCount(newCounter)
    }

  const countRemove = (id) =>{
    const newCounter = counters.filter(el => el.id !== id)
    setTotalCount(newCounter)
  }

  const countAdd= (name, count) =>{

    const newCounter = [...counters, {
      id: Math.random(),
      name:name,
      count: Number(count),
    }]
    setTotalCount(newCounter);
  }

  return (
    <div className="container">
      Total: {counters.reduce((acc, cur) => acc + cur.count, 0)}
      <button onClick={resetTotalCount}>Reset</button>
        {counters.map(el=><Counter key={el.id}
                                   counter={el}
                                   countIncrease={countIncrease}
                                   countDecrease={countDecrease}
                                   countReset={countReset}
                                   countRemove={countRemove}/>
            )}
      <NewCounter countAdd={countAdd}/>
      {/*<ConfirmDeleteCounter/>*/}
    </div>
  );
}

export default App;
