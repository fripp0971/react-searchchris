import React,{useContext} from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';
import AuthContext from './auth-context'

export default (props) => {
  
  const filterText = props.filterText;
  const inStockOnly = props.inStockOnly;
  const authContext = useContext(AuthContext);  
  const rows = [];
  let lastCategory = null;

  props.products.map((product) => {

    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category} />
      );
    }
    rows.push(
      <ProductRow
        product={product}
        key={product.name}
      />
    );
    lastCategory = product.category;
  });


  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
      <p>{`Product table Logged In: ${authContext.authenticated}`}</p>  
    </div>
  ); 
}




