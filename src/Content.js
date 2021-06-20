import './App.css';

function Content(props) {
    let name="";

    const clickButtonHandler = (value) => {
        console.log("Clicked" + value)
        props.bc(name)
    }

    const inputHandler = (e) => {
        name = e.target.value
        console.log(e.target.value)
    }

  return (
    <div className="Content">
      <p>content</p>

        <input type="text" onChange={inputHandler}/>
        <button onClick={() => clickButtonHandler(1)}>Add one</button>
        <button onClick={() => clickButtonHandler(2)}>Add two</button>

    </div>
  );
}

export default Content;
