import { useState } from "react";

function ListGroup() {
  let items = ["New York", "California", "Tallinn", "London", "Paris"];
  // Hook is a function that allows us to tap into built-in features in react
  // This is a State Hook, we tell react that we have a function which state
  // changes over time.
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // variable   arr[0]
  // updater function, this function will update our variable  arr[1]

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
