import React, {useState,useEffect, useRef, useContext} from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import AuthContext from './auth-context'

export default function FilterableProductTable (props) {

  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const myButton = useRef(null);

  useEffect(() => {
    console.log('print this every render the filterText changes');
  },[filterText]);

  useEffect(() => {
    console.log('print this every render no matter what');
  });

  useEffect(() => {
    console.log('print this only on first mount');
  },[]);

  const handleFilterTextChange = (filterText) => {
    setFilterText(filterText);
  };

  const handleInStockChange = (inStockOnly) => {
    setInStockOnly(inStockOnly);
  };

  const handleLogin = () => {
    setAuthenticated(!authenticated);
    console.log(myButton.current);
  };

  return (
    <div>
      <AuthContext.Provider value={{authenticated : authenticated, login : handleLogin }}>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={handleFilterTextChange}
        onInStockChange={handleInStockChange}
      />
      <ProductTable
        products={props.products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
      <p>
      <button ref={myButton} onClick={handleLogin}>{authenticated ? 'Logout' : 'Login'}</button>
      </p>
      </AuthContext.Provider>
    </div>
  );

}




