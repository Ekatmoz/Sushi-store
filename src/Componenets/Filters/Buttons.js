import Filter from "./Filter";

const Buttons = () => {
  return ( <div className="d-flex flex-column align-items-center">
    <h2>Shop By Category</h2>
    <h4>Visit our Store to see and Buy amazing products</h4>
    <div className="filters">
      {['Pasta', 'Sauce', 'Mochi', 'Nori', 'Frozen', 'All'].map((category, index) =>
      <Filter category={category} key={index}/>)}
    </div>
  </div> );
}
 
export default Buttons;