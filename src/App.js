
import './App.css';
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

function App() {
  const menuItem = [
    {text: 'Home', link: 'home-page'},
    {text: 'Products', link: 'home-page2'},
    {text: 'Price', link: 'home-page3'},
    {text: 'Home4', link: 'home-page4'},
  ]


  const menuFooter = [
    [{text: 'HomeF', link: 'home-page', link2: 'home-page', },
    {text: 'ProductsF', link: 'home-page2', link2: 'home-page',}],
    [{text: 'PriceF', link: 'home-page3', link2: 'home-page',},
    {text: 'Home4F', link: 'home-page4', link2: 'home-page',}]

  ]

  const  textFooter = 'FooterText';

  const buttonClicked = (name) => {
    console.log("Clicked!" + name)
  }

  return (
    <div className="App">
      <Header items={menuItem}/>
        <Content bc={buttonClicked}/>
        <Footer items={menuFooter} textFooter={textFooter}/>

    </div>
  );
}

export default App;
