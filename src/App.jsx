import { useState } from "react";
import About from "./pages/about";
import "./App.css";
import Home from "./pages/home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <div className="flex-col">
      <Home />
      <About/>
      <div></div>
      </div>
    </>
  );
}

export default App;
