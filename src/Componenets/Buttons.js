const Buttons = ({filteredProducts}) => {
  return ( <div className="filterButtons">
    <button className="cta" onClick={() => filteredProducts("sauce")}>Sauces</button>
    <button className="cta" onClick={() => filteredProducts("pasta")}>Pasta</button>
  </div> );
}
 
export default Buttons;