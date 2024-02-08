import CountdownTimer from "../components/timer";
import background from "../assets/background.svg";
import Slash from "../assets/slash.svg";
import { useEffect, useState } from "react";
export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const screenHeight = window.innerHeight;
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      id="home"
      className="home h-screen flex-col justify-center items-center align-middle text-white text-center imgHome "
    >
      <img
        src={background}
        className="w-full absolute -top-10 drop-shadow-[0_0.2px_0.2px_rgba(0,0,0,0.8)] z-10"
      ></img>
      {scrollPosition < screenHeight - 300 && (
        <div className=" xl:mt-48  mt-20 fixed m-auto w-screen text-7xl sm:text-xl md:text-[100px] lg:text-[150px] xl:text-[200px] parallax align-middle text-center font-[Pricedown]">
          <img
            className="absolute xl:scale-100 lg:scale-75 lg:-top-52 md:scale-75 md:left-20 md:-top-48 -top-20 xl:left-56 -z-10 rotate-12 xl:-top-48"
            src={Slash}
          ></img>
          Genesis
        </div>
      )}
      <div className="xl:h-64 lg:h-40 z-10"></div>
      <div className="relative register bg-red-600 m-auto lg:w-40 lg:h-16 xl:h-16 xl:p-4 lg:text-4xl lg:p-4 w-28 h-8 text-2xl p-0.5 mt-20 font-[BerlinSans] font-bold text-center z-30">
        Register
      </div>
      <div className="lg:h-16 z-10 font-[Pricedown]"></div>
      <div className="z-20  relative underline drop-shadow-[0_1.6px_1.6px_rgba(0,0,0,0.8)] font-[BerlinSans] text-2xl">
        COMMENSING IN
      </div>
      <CountdownTimer />
    </div>
  );
}
