function ListGroup() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  items.map((item) => <li className="list-group-item">{item}</li>);

  // Empty angle brackets tells react to use a fragment to all its children!
  return (
    <>
      <h1>List Group</h1>
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
