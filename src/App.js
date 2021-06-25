import { VStack, Textarea, Button } from "@chakra-ui/react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Carved in Eternity</h1>
      <VStack>
        <Textarea />
        <Button>Submit</Button>
      </VStack>
    </div>
  );
}

export default App;
