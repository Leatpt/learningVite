import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          {" "}
          Failid on otsas{" "}
        </Alert>
      )}
      <Button color="danger" onClick={() => setAlertVisibility(false)}>
        Eelmine
      </Button>
      <Button color="danger" onClick={() => setAlertVisibility(true)}>
        Järgmine
      </Button>
    </div>
  );
}

export default App;
