import { useSelector } from "react-redux"
import { getCartItems } from "../../redux/cartSlice";

const CartTotal = () => {

  const cart = useSelector(getCartItems)
  
  const getTotalQuantity = () => {
    let total = 0
    cart.forEach(item => {
      total += item.quantity
    })
  return total
}

  return ( <div>
    <p>{getTotalQuantity() || 0}</p>
  </div> );
}
 
export default CartTotal;