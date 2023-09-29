import React, { useState } from 'react';
import _ from 'lodash';

function List(props) {
  const [list, setList] = useState(props.menuitems);

  function handleRemove(index) {
    const newList = list.filter((_, i) => i !== index);
    setList(newList);
  }


  let listOrder = _.orderBy(list, ['name'], ['asc']);


  const listItems = list.map((name, index) => (
    
    <li key={index} className='li'>
      {name}
      
      <button type="button" onClick={() => handleRemove(index)}>
        Remove
      </button>
      
    </li>
  ));
  
 

  return (
    <ol>
      {listItems}
    </ol>
  );
}

export default List;
