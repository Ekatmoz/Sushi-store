import { useState } from "react";

const Products = ({products}) => {
const [showText, setShowText] = useState(false);

const showTextClick = (product) => {
  product.showMore = !product.showMore
  setShowText(!showText)
}

  return ( <div className="products">
    {products.map(product => {
      const {id, title, price, currency, image, description, showMore} = product;
      return (
        <div className="product-card" key={id}>
          <img src={image} alt="item" width="100px"/>
          <h3>{title}</h3>
          <p>{showMore ? description : description.substring(0, 170) + "..."}
          <button onClick={() => showTextClick(product)}>{showMore? "show less" : "show more"}</button>
          </p>
          <h6 className="price">{price}{currency}</h6>
        </div>
      )
     })}
  </div> );
}
 
export default Products;