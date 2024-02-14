import CountdownTimer from "../components/timer";
import background from "../assets/background.svg";
import Slash from "../assets/slash.svg";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function HomeMobile() {
  const registerationLink =
    "https://unstop.com/hackathons/genesis-iii-army-institute-of-technology-ait-pune-895235";
  useEffect(() => {
    gsap.to(".genesis", {
      scrollTrigger: {
        trigger: ".genesis",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        toggleActions: "restart pause reset pause",
        // markers: true,
      },
      y: 200,
      transitionDuration: 0.1,

      duration: 60,
    });
  }, []);
  return (
    <>
      <div className="home relative  h-screen select-none flex-col justify-center overflow-hidden imgHomeMobile items-center bg-blue-950 align-middle bg-gradient-to-b from-blue-950  to-blue-700 text-white text-center">
        <div className="md:mt-12 relative mt-20 select-none genesis w-screen text-7xl md:text-9xl align-middle text-center  font-[Pricedown]">
          <img
            className="absolute scale-75 md:scale-[0.6] md:-top-48 md:-left-10 -top-28  -left-16 -z-10 rotate-12 xl:-top-48"
            src={Slash}
          ></img>
          Genesis
        </div>
        <div className="md:h-10 z-10"></div>
        <div
          onTouchEnd={() => {
            window.open(registerationLink, "_blank");
          }

          }
          onClick={() => {
            window.open(registerationLink, "_blank");
          }}
          className="relative register mb-10 bg-red-600 m-auto  w-[150px] h-[50px] text-3xl p-3 mt-20 font-[BerlinSans] font-bold text-center z-30"
        >
          Register
        </div>
        <div className=" z-10 font-[Pricedown]"></div>
        <div className="z-20  relative underline drop-shadow-[0_1.6px_1.6px_rgba(0,0,0,0.8)] font-[BerlinSans] text-xl">
          COMMENSING IN
        </div>
        <CountdownTimer />
      </div>
    </>
  );
}
