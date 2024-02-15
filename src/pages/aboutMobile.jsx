import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function AboutMobile() {
  return (
    <>
      <div className="about relative w-screen h-screen select-none flex-col justify-center overflow-hidden items-center imgAboutMobile bg-black align-middle  text-white text-center">
        <div className="relative title text-center w-full xl:mt-20 ">
          <div className="absolute left-6 mt-20 text-white text-5xl xs:text-6xl Montserrat font-bold">
            About{" "}
            <span className="absolute top-8 left-20 font-[BerlinSans] font-extrabold text-red-600 z-20">
              GENESIS
            </span>
          </div>
          <div className="h-52"></div>
          <div className="p-10 w-full text-lg text-justify font-[BerlinSans]">
            Get ready to embark on the ultimate gaming adventure! Prepare to
            dive into a world where every move counts, every decision shapes
            your destiny, and every challenge brings you closer to victory!
            Welcome to GENESIS , where gamers unite, adrenaline runs high, and
            epic moments are born. Are you ready to unleash your gaming prowess
            and make history?
          </div>
        </div>
      </div>
    </>
  );
}
