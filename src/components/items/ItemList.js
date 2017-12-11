import React from 'react';
import PropTypes from 'prop-types';

const ItemList =({items})=>{
  return(
    <div>
      <h2>Items:</h2>
        {items.map(item=><div key={item.title}>{item.title}</div>)}
      <hr />
    </div>
  );
}


ItemList.propTypes ={
  items:PropTypes.array.isRequired
}




export default ItemList;