import { useState } from "react";
import Buttons from "./Filters/Buttons";
import Footer from "./Footer/Footer";
import Header from "./Header";
import Products  from "./Products/Products"


const Home = () => {
  const [inputText, setInputText] = useState("");

  return ( <div>
    <Header/>
    <Buttons/>
    <div>
      <Products inputText={inputText}/>
    </div>
    <Footer/>
   
  </div> );
}
 
export default Home;