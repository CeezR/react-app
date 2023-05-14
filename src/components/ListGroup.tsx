import { useState } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  // items = [];
  // let selectedIndex = 0; // This variable is local to this function component, react is not aware of it!
  // To solve this people we need to tell React that his component is going to have data or state that
  // is going to change over time which is done using hooks.

  // Hook
  // useState() returns an array with a variable & updater function
  // useSate(-1) returns an array with a var initialize with the value of -1 $ updater
  const arr = useState(-1);
  arr[0]; // variable (selectedIndex)
  arr[1]; // updater function
  // Using the updater function we can update the variable, which in addition to updating
  // the variable notifies React of the state change. React knowing the state has changed
  // will intern rerender the componentes equating to the DOM being updated.

  // Use variable when you don't need to specify parameters
  const message = items.length === 0 ? <p>No item found</p> : null;

  // Use functions when you are in need of specifining parameters
  const getMessage = () => {
    return items.length === 0 ? <p>No item found</p> : null;
  };

  // Empty angle brackets tells react to use a fragment to all its children!
  // React requires that all child items have a unique key, in this case
  // the strings are all unique however normaly you would have a dedicated
  // id field for the item object you are creating.
  return (
    <>
      <h1>List Group</h1>
      {items.length === 0 && <p>No Item Found!</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              arr[0] === index ? "list-group-item active" : "list-group-item"
            }
            key={item}
            onClick={() => arr[1](index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
  // {items.length === 0 && <p>No Item Found!</p>}
  // If the first condition is true than the second condition is
  // automaticaly returned. This means that you can use the implementation
  // above to achive the same result as making a ternery operator with
  // null
}

export default ListGroup;
