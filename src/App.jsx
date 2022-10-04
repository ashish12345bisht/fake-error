import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Error from "./pages/Error";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Error />
    </div>
  );
}

export default App;
