import { useDispatch } from "react-redux";
import { data } from "../../data";
import { removeItem } from "../../redux/cartSlice";

const CartItem = ({cartItem}) => {
  
  const cartProducts = data.find(item => item.id === cartItem.productId);
  const dispatch = useDispatch();

  return ( <div className="flex">
    <div className="product-card">
      <img src={cartProducts.image} alt="product" width="200px"/>
      <p>{cartProducts.title}</p>
      <p>{cartItem.quantity} pcs</p>
      <p>Price:{cartProducts.price * cartItem.quantity} Ft</p>
      <span onClick={() => dispatch(removeItem({cartItemId: cartItem.id}))}>
        <img className="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" alt="delete"/> 
      </span>
    </div>

  </div> );
}
 
export default CartItem;