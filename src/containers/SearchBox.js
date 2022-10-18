
const SearchBox = (props) =>{
  const {SearchChange} = props;
  return (
    <div className="pa3 searchBox">
      <input className="pa3 ba b--green bg-light-green"
      style={{outline : "none", border : "none"}}
      type="search" 
      placeholder="Search robots"
      onChange={SearchChange} />  
    </div>
  )
}

export default SearchBox;