import { useDispatch } from "react-redux";
import { removeItem } from "../../redux/cartSlice";

const CartItem = ({cartItem}) => {
  
  const dispatch = useDispatch();

  return ( <div className="flex">
    <div className="cart-item">
      <img src={cartItem.image} alt="product" width="200px"/>
      <div className="cart">
        <p>{cartItem.title}</p>
        <p>{cartItem.description}</p>
        <p>{cartItem.quantity} pcs</p>
        <p>Price:{cartItem.price * cartItem.quantity} Ft</p>
      </div>
        <span onClick={() => dispatch(removeItem({cartItemId: cartItem.id}))}>
          <img className="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" alt="delete"/> 
        </span>
     
    </div>

  </div> );
}
 
export default CartItem;