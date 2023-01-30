import { data } from "../../data";
import Product from "./Product";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../redux/filterSlice";

const Products = () => {
  const selectedCategory = useSelector(getSelectedCategory);
  
  return ( <div className="products">
    {data.filter(product => {
      if (selectedCategory === "All") return true;
      return selectedCategory === product.category;
    }
      )
      .map(product => <Product product={product} key={product.id}/>)}
  </div> );
}
 
export default Products;