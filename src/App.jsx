import { useState } from "react";
import reactLogo from "./assets/react.svg";
import background from "./assets/background.svg";
import viteLogo from "/vite.svg";
import Slash from "./assets/slash.svg";
import "./App.css";

import CountdownTimer from "./components/timer";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="home h-screen flex-col justify-center items-center align-middle text-white text-center img">
        <img
          src={background}
          className="w-full absolute -top-10 drop-shadow-[0_0.2px_0.2px_rgba(0,0,0,0.8)] z-10"
        ></img>
        <div className=" xl:mt-28  mt-20 fixed m-auto w-screen text-7xl sm:text-xl md:text-[100px] lg:text-[150px] xl:text-[200px] parallax align-middle text-center font-[Pricedown] ">
          <img className= "absolute xl:scale-100 lg:scale-75 lg:-top-48 md:scale-75 md:left-20 md:-top-48 -top-20 xl:left-56 -z-10 rotate-12 xl:-top-32"  src={Slash}></img>
          Genesis
        </div>
        <div className="xl:h-64 lg:h-40 z-10"></div>
        <div className="relative register bg-red-600 m-auto lg:w-44 lg:h-20 lg:text-4xl lg:p-6 w-28 h-8 text-2xl p-0.5 mt-20 font-[BerlinSans] font-bold text-center z-30">
          Register
        </div>
        <div className="lg:h-16 z-10 font-[Pricedown]"></div> 
        <div className="z-20  relative underline drop-shadow-[0_1.6px_1.6px_rgba(0,0,0,0.8)] font-[BerlinSans] text-2xl">COMMENSING IN</div>
        <CountdownTimer />
      </div>
    </>
  );
}

export default App;
