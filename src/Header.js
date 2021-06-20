
import './App.css';
import Logo from "./Logo";
import Menu from "./Menu";

function Header(props) {



    return (
    <div className="Header">
      <Logo/>
      <Menu items={props.items}/>


    </div>
  );
}

export default Header;
