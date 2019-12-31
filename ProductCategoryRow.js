import React from 'react';

export default function ProductCategoryRow (props) {

  const category = props.category;
  return (
    <tr>
      <td colSpan="2">
        <b>{category}</b>
      </td>
    </tr>
  );
}

