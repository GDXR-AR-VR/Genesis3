import React, { useRef, useEffect } from "react";
import michael from "../assets/michael.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import Circles from "../components/circles";

export default function About() {
  const boxRef = useRef(null);
  useEffect(() => {
    gsap.to(".box", {
      scrollTrigger: {
        trigger: ".box",
        start: "top 90%",
        end: "top 40%",
        scrub: 1,

        toggleActions: "restart pause reset pause",
      },
      x: 40,
      duration: 1.6,
    });
    gsap.to(".title", {
      scrollTrigger: {
        trigger: ".box",
        start: "top 90%",
        end: "top 40%",
        scrub: 1,
        toggleActions: "restart pause reset pause",
      },
      x: 0,
      duration: 1.6,
    });
  }, []);
  return (
    <div
      id="about"
      className="about flex h-screen justify-center bg-gradient-to-t from-black to-transparent items-center align-middle text-white text-center bg-black imgAbout z-50 md:-mt-4 lg:-mt-12 2xl:mt-52 xl:mt-40"
    >
      <div ref={boxRef} className=" w-1/2 relative flex justify-center ">
        <div className="absolute box -translate-x-[800px] lg:w-4/5 md:w-4/5 xl:w-[470px] xl:h-[550px] overflow-hidden">
          <img alt="michael" src={michael} className="object-fill" />
        </div>
        <Circles />
      </div>
      <div>
        <div className="relative title text-center w-1/2 xl:mt-20 translate-x-[600px]">
          <div className=" text-while lg:text-7xl lg:mb-16 xl:text-9xl Montserrat font-bold xl:mb-20 lg:m-14 ">
            About{" "}
            <span className="absolute top-12 left-64 font-[BerlinSans] font-[700] text-red-600 z-20">
              Genesis
            </span>
          </div>
          <div className="text-lg text-justify xl:w-[760px] lg:w-[500px] lg:text-[18px] lg:p-4 xl:mr-6 font-[BerlinSans] xl:mb-20">
            Get ready to embark on the ultimate gaming adventure! Prepare to
            dive into a world where every move counts, every decision shapes
            your destiny, and every challenge brings you closer to victory!
            Welcome to GENESIS , where gamers unite, adrenaline runs high, and
            epic moments are born. Are you ready to unleash your gaming prowess
            and make history?
          </div>
        </div>
      </div>
    </div>
  );
}
