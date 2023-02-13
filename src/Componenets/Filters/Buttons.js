import Filter from "./Filter";

const Buttons = () => {
  return ( <div className="d-flex flex-column align-items-center">
    <h2>Shop By Category</h2>
    <div className="flex">
      {['Pasta', 'Sauce', 'Mochi', 'Nori', 'All'].map((category, index) =>
      <Filter category={category} key={index}/>)}
    </div>
  </div> );
}
 
export default Buttons;