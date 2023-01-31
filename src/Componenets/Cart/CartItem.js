import { data } from "../../data";

const CartItem = ({cartItem}) => {
  
  const cartProducts = data.find(item => item.id === cartItem.productId);

  return ( <div>
    <p>{cartProducts.title}</p>
    <p>{cartItem.quantity} pcs</p>
  </div> );
}
 
export default CartItem;