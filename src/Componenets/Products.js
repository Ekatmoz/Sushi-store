import { useState } from "react";

const Products = ({products, inputText}) => {

const [showText, setShowText] = useState(false);

const showTextClick = (product) => {
  product.showMore = !product.showMore
  setShowText(!showText)
}

  return ( <div className="products">
    {products.filter(product => product.title.toLowerCase().includes(inputText)).map(product => {
      const {id, title, price, currency, image, description, showMore} = product;
      return (
        <div className="product-card" id="products" key={id}>
          <img src={image} alt="item" width="100px"/>
          <h3>{title}</h3>
          <p>{showMore ? description : description.substring(0, 170) + "..."}
          <button onClick={() => showTextClick(product)}>{showMore? "show less" : "show more"}</button>
          </p>
          <div className="card-price">
            <h6 className="price">{price}{currency}</h6>
            <button className="bascket">
              <svg xmlns="http://www.w3.org/2000/svg" 
                   width="16" 
                   height="16" 
                   fill="white" 
                   className="bi bi-bag" 
                   viewBox="0 0 16 16">
                   <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
              </svg>
              </button>
          </div>
          
        </div>
      )
     })}
  </div> );
}
 
export default Products;