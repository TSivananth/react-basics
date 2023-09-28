import React, { useState } from 'react';

function List(props) {
  const [list, setList] = useState(props.menuitems);

  // Function to handle removal of an item by its index
  function handleRemove(index) {
    const newList = list.filter((_, i) => i !== index);
    setList(newList);
  }

  // Map through the list and create an array of elements
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
