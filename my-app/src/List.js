import React, { useState } from 'react';
import _ from 'lodash';

function List(props) {
  const [list, setList] = useState(props.menuitems);

  console.log(list)

  function handleRemove(index) {
    const newList = list.filter((_, i) => i !== index);
    setList(newList);
  }


  const listItems = list.sort().map((name, index) => (
    
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
