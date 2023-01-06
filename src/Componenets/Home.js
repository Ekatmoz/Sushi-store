import { useState } from "react";
import { data } from "../data";
import Buttons from "./Buttons";
import Header from "./Header";
import Products  from "./Products"

const Home = () => {
  const [products, setProducts] = useState(data);
 
  const chosenProducts = (searchTerm) => {
    const newProducts = data.filter(product => product.searchTerm === searchTerm);
    setProducts(newProducts);
    console.log(newProducts)
  }
  return ( <div>
    <Header/>
    <Buttons filteredProducts = {chosenProducts}/>
    <div>
      <Products products = {products}/>
    </div>
   
  </div> );
}
 
export default Home;