import CountdownTimer from "../components/timer";
import backgroundHome from "../assets/backgroundHome.svg";
import Slash from "../assets/slash.svg";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function HomeMobile() {
  const registerationLink =
    "https://unstop.com/hackathons/genesis-iii-army-institute-of-technology-ait-pune-895235";
  const [scrollPosition, setScrollPosition] = useState(0);
  const screenHeight = window.innerHeight;
  const difference = 0;
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
  return (
    <>
      <div className="home relative  h-screen  flex-col justify-center overflow-hidden w-screen items-center  align-middle  text-white text-center ">
        <img
          src={backgroundHome}
          alt="background"
          className="absolute h-full scale-[1.3] md:scale-[1.2] md:top-0 -top-10 object-cover bg-gradient-to-b from-black via-black to-transparent"
        ></img>
        <div>
          <div className="md:h-10 h-5"></div>
          {scrollPosition < screenHeight - difference && (
            <div className="fixed">
              <div className="md:mt-12 relative mt-20 select-none genesis w-screen text-7xl md:text-9xl align-middle text-center  font-[Pricedown]">
                <img
                  className="absolute scale-75 md:scale-[0.6] md:-top-48 md:-left-10 -top-28  -left-16 -z-10 rotate-12 xl:-top-48"
                  src={Slash}
                  alt="slash"
                ></img>
                Genesis
              </div>
            </div>
          )}
        </div>
        <div className="md:h-44 h-40"></div>
        <div className="md:h-10 z-10"></div>
        <div className="w-full mt-20 mb-20 z-20 flex-col items-center justify-center">
          <div>
            <div
              onClick={() => {
                window.open(registerationLink, "_blank");
              }}
              className="register m-auto bg-red-600 mb-5 w-[150px] h-[50px]  text-3xl p-3  font-[BerlinSans] font-bold text-center"
            >
              <p> Register</p>
            </div>
          </div>
          <div className="w-full">
            <div
              className=" apply-button h-20 w-60"
              data-hackathon-slug="genesis-iii"
              data-button-theme="dark"
            ></div>
          </div>
        </div>
        <div className=" z-10 font-[Pricedown]"></div>
        <div className="z-20  relative underline drop-shadow-[0_1.6px_1.6px_rgba(0,0,0,0.8)] font-[BerlinSans] text-xl">
          COMMENCING IN
        </div>
        <CountdownTimer />
      </div>
    </>
  );
}
