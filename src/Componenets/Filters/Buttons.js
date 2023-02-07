import Filter from "./Filter";

const Buttons = () => {
  return ( <div className="flex">
    <h2>Shop By Category</h2>
    {['Pasta', 'Sauce', 'Mochi', 'Nori', 'All'].map((category, index) =>
    <Filter category={category} key={index}/>)}
  </div> );
}
 
export default Buttons;