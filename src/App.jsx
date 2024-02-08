import { useState } from "react";
import About from "./pages/about";
import "./App.css";
import Home from "./pages/home";
import Prizes from "./pages/prizes";
import Navbar from "./components/navbar";
import Sponsors from "./pages/sponsors";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex-col">
        <Navbar />
        <Home />

        <About />
        <Prizes />
        <Sponsors />
        <div></div>
      </div>
    </>
  );
}

export default App;
