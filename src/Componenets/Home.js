import { useState } from "react";
import Buttons from "./Filters/Buttons";
import Header from "./Header";
import Products  from "./Products/Products"
import Search from "./Search";

const Home = () => {
  const [inputText, setInputText] = useState("");

  return ( <div>
    <Header/>
    <Buttons/>
    <Search setState={setInputText}/>
    <div>
      <Products inputText={inputText}/>
    </div>
   
  </div> );
}
 
export default Home;