import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChangeQuantity from "../Cart/ChangeQuantity";
import {addItemToCart, getCartItems, updateQuantity} from "../../redux/cartSlice";

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
          <button onClick={handleClick} className="bascket">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" fill="currentColor" className="bi bi-cart-plus" viewBox="0 0 16 16">
              <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
              <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
            </svg>
          </button>
        </div>
      </div>
  </div> );
}
 
export default Product; 