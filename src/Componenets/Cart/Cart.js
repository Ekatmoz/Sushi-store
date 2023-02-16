import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from "../../redux/cartSlice";
import Footer from "../Footer/Footer";
import CartItem from "./CartItem";

const Cart = () => {
  const cartItems = useSelector(getCartItems);
  const totalPrice = useSelector(getTotalPrice)

  return ( 
    <div>
      <div className="cart-page">
        <h2 className="d-flex justify-content-center">Shopping cart</h2>
        {cartItems.map((cartItem, index) => <CartItem cartItem={cartItem} key={index}/>)}
        <p className="d-flex justify-content-end">TOTAL: {totalPrice} Ft</p>
      </div>
      <Footer/>
  </div> );
}
 
export default Cart;