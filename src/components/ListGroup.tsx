function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  items = [];

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
        {items.map((item) => (
          <li key={item} className="list-group-item">
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
