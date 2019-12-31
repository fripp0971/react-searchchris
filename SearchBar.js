import React,{useContext} from 'react';
import AuthContext from './auth-context'

export default function SearchBar (props) {
  
  const authContext = useContext(AuthContext);

  const handleFilterTextChange = (e) =>{
    props.onFilterTextChange(e.target.value);
  }
  
  const handleInStockChange = (e) => {
    props.onInStockChange(e.target.checked);
  }

  return (

    <form>
        <input
          type="text"
          placeholder="Search"
          value={props.filterText}
          onChange={handleFilterTextChange}
        />
        <p>{`Searchbar Logged In: ${authContext.authenticated}`}</p>  
        <p>
          <input
            type="checkbox"
            checked={props.inStockOnly}
            onChange={handleInStockChange}
          />
          {' '}
          Only show products in stock
        </p>
      </form>
  ); 
}





