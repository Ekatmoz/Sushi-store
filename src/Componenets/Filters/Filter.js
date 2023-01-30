import { useDispatch, useSelector } from "react-redux";
import { filterCategory, getSelectedCategory } from "../../redux/filterSlice";

const Filter = ({category}) => {
  
  const dispatch = useDispatch();
  const selectedCategory = useSelector(getSelectedCategory);

  return ( <div className="filterButtons">
    <button className={selectedCategory === category ? "categoryButtonSelected cta categoryButton" : "categoryButton cta"} onClick={() => {dispatch(filterCategory(category))}}>{category}</button>
  </div> );
}
 
export default Filter;

