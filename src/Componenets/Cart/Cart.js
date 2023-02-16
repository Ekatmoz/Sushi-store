import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from "../../redux/cartSlice";
import CartItem from "./CartItem";

const Cart = () => {
  const cartItems = useSelector(getCartItems);
  const totalPrice = useSelector(getTotalPrice)

  return ( <div>
   
    {cartItems.map((cartItem, index) => <CartItem cartItem={cartItem} key={index}/>)}
    <p>TOTAL: {totalPrice} Ft</p>
  </div> );
}
 
export default Cart;