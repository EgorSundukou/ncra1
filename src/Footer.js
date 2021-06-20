
import './App.css';
import Logo from "./Logo";
import Menu from "./Menu";

function Footer(props) {
  return (
    <div className="Footer">
      <Logo/>
        {props.items.map(el => <Menu items={el}/>)}
        {props.textFooter}
    </div>
  );
}

export default Footer;
