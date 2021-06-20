import './App.css';
import MenuItem from "./MenuItem";

function Menu(props) {



    return (
        <div className="Menu">
            {props.items.map(el => <MenuItem key={el.text} menuItem={el}/>)}

        </div>
    );
}

export default Menu;
