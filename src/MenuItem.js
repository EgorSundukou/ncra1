
import './App.css';

function MenuItem(props) {
  return (
    <div className="MenuItem">
        <a href={props.menuItem.link}>{props.menuItem.text}</a>
    </div>
  );
}

export default MenuItem;
