import React, { useState } from 'react';

const ListGroup = () => {
  let items = ['abc', 'sdjncjdsn', 'sdncjnsd', 'ncjnjc', 'iuhiuh'];
  // items = [];
  const [SelectedIndxe, setSelectedInde] = useState(-1);

  const getmessage = () => {
    return items.length === 0 && <p>No Items Found</p>;
  };

  return (
    <>
      <h1>List Group</h1>

      {getmessage()}

      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              SelectedIndxe === index
                ? 'list-group-item active'
                : 'list-group-item'
            }
            key={item}
            onClick={() => {
              setSelectedInde(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
