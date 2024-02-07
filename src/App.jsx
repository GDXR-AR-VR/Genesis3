import { useState } from "react";
import About from "./pages/about";
import "./App.css";
import Home from "./pages/home";
import Prizes from "./pages/prizes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex-col">
        <Home />

        <About />
        <Prizes />
        <div></div>
      </div>
    </>
  );
}

export default App;
