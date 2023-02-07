import { useState } from "react";
import { useDispatch } from "react-redux";
import ChangeQuantity from "../Cart/ChangeQuantity";
import {addItemToCart} from "../../redux/cartSlice";

const Product = ({product}) => {
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  return ( 
    <div className="product-card">
      
      <div>
        <img src={product.image} alt="item" width="250px"/>
      </div>
      
      <h3>{product.title}</h3>
      
      <div className="card-price">
        <h6 className="price">{product.price}{product.currency}</h6>
        <div className="cart-button">
          <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
          <button onClick={() => {dispatch(addItemToCart({product, quantity}))}} className="bascket">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
              <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
              <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
            </svg>
          </button>
        </div>
      </div>
  </div> );
}
 
export default Product; 