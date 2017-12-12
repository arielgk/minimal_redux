import React from 'react';
import PropTypes from 'prop-types';
import Episodes from '../episodes/episodes';


const ItemRow =( {id, title,episodes  })=>{

return (
  <div className="season-row">{ title} 
  <br />
 <Episodes parentId={id}/>
  </div>
 

)
}

ItemRow.propTypes ={
  id:PropTypes.number.isRequired,
  title:PropTypes.string.isRequired,
  episodes:PropTypes.array.isRequired

}


export default ItemRow;