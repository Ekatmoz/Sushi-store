const Search = ({setState}) => {
  return ( <div className="search">
    <input type="text" placeholder="Search" onChange={(e) => setState(e.target.value)}/>
  </div> );
}
 
export default Search;