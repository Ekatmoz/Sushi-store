import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChangeQuantity from "../Cart/ChangeQuantity";
import {addItemToCart, getCartItems, updateQuantity} from "../../redux/cartSlice";
import { ShoppingCartOutlined } from "@mui/icons-material";

const Product = ({product}) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  
  const cartItems = useSelector(getCartItems);
  const cartProducts = cartItems.some(item => item.id === product.id);
  const handleClick = () => {
    cartProducts ? dispatch(updateQuantity ({product, quantity})) : dispatch(addItemToCart ({product, quantity})) ;
  }


  return ( 
    <div className="product-card"  id="products">
      
      <div>
        <img src={product.image} alt="item" width="200px"/>
      </div>
    
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      
      <div className="card-price">
        <h6 className="price">{product.price}{product.currency}</h6>
        <div className="cart-button">
          <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
          <button onClick={handleClick} className="basket">
            <ShoppingCartOutlined/>
          </button>
        </div>
      </div>
  </div> );
}
 
export default Product; 