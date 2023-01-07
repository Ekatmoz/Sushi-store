import { useState } from "react";
import { data } from "../data";
import Buttons from "./Buttons";
import Header from "./Header";
import Products  from "./Products"
import Search from "./Search";

const Home = () => {
  const [products, setProducts] = useState(data);
  const [inputText, setInputText] = useState("");

  const chosenProducts = (searchTerm) => {
    const newProducts = data.filter(product => product.searchTerm === searchTerm);
    setProducts(newProducts);
    console.log(newProducts)
  }
  return ( <div>
    <Header/>
    <Buttons filteredProducts = {chosenProducts}/>
    <Search setState={setInputText}/>
    <div>
      <Products products = {products} inputText = {inputText}/>
    </div>
   
  </div> );
}
 
export default Home;