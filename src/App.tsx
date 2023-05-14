import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  let color = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
  ];

  const [alertVisible, setAlertVisiblility] = useState(false);

  const handleSelectedItem = (item: string) => {
    console.log(item);
  };

  const handleClick = () => {
    setAlertVisiblility(!alertVisible);
  };

  return (
    // <div>
    //   <ListGroup
    //     items={items}
    //     heading="Cities"
    //     onSelectItem={handleSelectedItem}
    //   />
    // </div>
    // <div>
    //   <Alert>
    //     Hello <span>World</span>
    //   </Alert>
    // </div>
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisiblility(false)}>Alert!</Alert>
      )}
      <Button onClick={() => handleClick()} color={color}>
        Hello World!
      </Button>
    </div>
  );
}

export default App;
