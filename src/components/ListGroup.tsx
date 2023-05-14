function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  items = [];

  // Empty angle brackets tells react to use a fragment to all its children!
  // React requires that all child items have a unique key, in this case
  // the strings are all unique however normaly you would have a dedicated
  // id field for the item object you are creating.
  return (
    <>
      <h1>List Group</h1>
      {items.length === 0 ? <p>No item found</p> : null}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
