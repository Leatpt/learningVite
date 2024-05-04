import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  return (
    <div>
      <Alert>
        Hello World
      </Alert>
      <Button onClick={() => console.log('clicked')}>Järgmine</Button>
    </div>
  );
}

export default App;
