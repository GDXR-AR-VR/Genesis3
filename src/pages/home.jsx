import CountdownTimer from "../components/timer";
import background from "../assets/background.svg";
import Slash from "../assets/slash.svg";
import { useEffect, useState, Suspense } from "react";
import { motion } from "framer-motion";
import Loading from "../components/loading";
export default function Home() {
  const registerationLink =
    "https://unstop.com/hackathons/genesis-iii-army-institute-of-technology-ait-pune-895235";
  const [scrollPosition, setScrollPosition] = useState(0);
  const screenHeight = window.innerHeight;
  const difference = screenHeight < 900 ? 500 : 300;
  console.log(screenHeight);
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      // console.log(position);
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
      className="home h-screen select-none flex-col justify-center items-center overflow-hidden align-middle text-white text-center imgHome"
    >
      <Suspense fallback={Loading}>
        <img
          src={background}
          alt="background"
          className="w-full absolute -top-10 drop-shadow-[0_0.2px_0.2px_rgba(0,0,0,0.8)] z-10 object-cover"
        ></img>
      </Suspense>
      {scrollPosition < screenHeight - difference && (
        <div className=" xl:mt-28  mt-20 select-none fixed m-auto w-screen text-7xl lg:text-[120px] xl:text-[200px] align-middle text-center font-[Pricedown]">
          <img
            className="absolute xl:scale-100 lg:scale-50 lg:-top-52 lg:left-32 -top-20 xl:left-64 -z-10 rotate-12 xl:-top-32"
            src={Slash}
            alt="slash"
          ></img>
          Genesis
        </div>
      )}
      <div className="xl:h-64 lg:h-40 z-10 flex"></div>
      <motion.div
        whileHover={{ rotate: Math.random() * 3, scale: 1.1 }}
        onClick={() => {
          window.open(registerationLink, "_blank");
        }}
        className=" relative register bg-red-600 m-auto lg:w-40 lg:h-16 xl:h-16 xl:p-4 lg:text-4xl lg:p-4 w-28 h-8 text-2xl p-0.5 mt-20 font-[BerlinSans] font-bold text-center z-30"
      >
        Register
      </motion.div>
      <div
        data-hackathon-slug="genesis-iii"
        data-button-theme="light"
        style={{ height: "44px", width: "312px", border: "2px" }}
        className="apply-button"
        // className="apply-button relative border-2  m-auto lg:w-40 lg:h-16 xl:h-16 xl:p-4 lg:text-4xl lg:p-4 w-28 h-8 text-2xl p-0.5 mt-5 font-[BerlinSans] font-bold text-center z-30"
      ></div>

      <div className="w-full"></div>
      <div className="lg:h-16 z-10 font-[Pricedown]"></div>
      <div className="z-20  relative underline drop-shadow-[0_1.6px_1.6px_rgba(0,0,0,0.8)] font-[BerlinSans] text-2xl">
        COMMENCING IN
      </div>
      <CountdownTimer />
    </div>
  );
}
