import { useState } from "react";
import { data } from "../data";
import Buttons from "./Filters/Buttons";
import Header from "./Header";
import Products  from "./Products"
import Search from "./Search";

const Home = () => {
  const [products, setProducts] = useState(data);
  const [inputText, setInputText] = useState("");

  return ( <div>
    <Header/>
    <Buttons/>
    <Search setState={setInputText}/>
    <div>
      <Products 
        products={products} 
        inputText={inputText}
        setProducts={setProducts}/>
    </div>
   
  </div> );
}
 
export default Home;