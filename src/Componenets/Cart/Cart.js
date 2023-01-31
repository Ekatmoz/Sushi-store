import { useSelector } from "react-redux";
import { getCartItems } from "../../redux/cartSlice";
import CartItem from "./CartItem";

const Cart = () => {

  const cartItems = useSelector(getCartItems);
  return ( <div>
    {cartItems.map((cartItem, index) => <CartItem cartItem={cartItem} key={index}/>)}
    
  </div> );
}
 
export default Cart;