import { useDispatch } from "react-redux";
//import { data } from "../../data";
import { removeItem } from "../../redux/cartSlice";


const CartItem = ({cartItem}) => {
  
  //const cartProducts = data.find(item => item.id === cartItem.productId);
  const dispatch = useDispatch();
  console.log(cartItem)

  return ( <div className="flex">
    <div className="cart-item">
      <img src={cartItem.image} alt="product" width="200px"/>
      <p>{cartItem.title}</p>
      <p>{cartItem.quantity} pcs</p>
      <p>Price:{cartItem.price * cartItem.quantity} Ft</p>
      <span onClick={() => dispatch(removeItem({cartItemId: cartItem.id}))}>
        <img className="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" alt="delete"/> 
      </span>
    </div>

  </div> );
}
 
export default CartItem;