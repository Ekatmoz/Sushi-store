import Filter from "./Filter";

const Buttons = () => {
  return ( <div className="flex">
    {['Pasta', 'Sauce', 'Mochi', 'Nori', 'All'].map((category, index) =>
    <Filter category={category} key={index}/>)}
  </div> );
}
 
export default Buttons;