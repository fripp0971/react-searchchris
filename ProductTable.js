import React,{useContext} from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';
import AuthContext from './auth-context'

export default function ProductTable (props) {
  
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
        <div>
        <ProductCategoryRow
          category={product.category}
          key={product.category} />
          <br/>
        </div>
      );
    }
    rows.push(
      <div>
      <ProductRow
        product={product}
        key={product.name}
      />
      <br/>
      </div>
    );
    lastCategory = product.category;
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td><h3>Name</h3></td>
            <td><h3>Price</h3></td>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
      <p>{`Product table Logged In: ${authContext.authenticated}`}</p>  
    </div>
  ); 
}







