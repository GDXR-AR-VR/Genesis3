import threepeople from "../assets/threepeople.png";
import TimelineComponent from "../components/timeline";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function Timeline() {
  useEffect(() => {
    gsap.to(".timeline", {
      scrollTrigger: {
        trigger: ".timeline",
        start: "top 90%",
        end: "top 40%",
        scrub: 1,
        toggleActions: "restart pause reset pause",
      },
      x: 0,
      duration: 2,
    });
    gsap.to(".hello", {
      scrollTrigger: {
        trigger: ".hello",
        start: "top 90%",
        end: "top 40%",
        scrub: 1,
        toggleActions: "restart pause reset pause",
      },
      x: 0,
      duration: 2,
    });
  }, []);
  return (
    <>
      <div
        id="timeline"
        className="about relative flex-col justify-center font-[Pricedown] bg-[#00022E] items-center imgAbout align-middle text-white text-center lg:-mt-3 xl:mt-0"
      >
        <div className="flex w-full xl:h-screen bg-white">
          <div className="relative flex-col w-1/2 bg-[#00022E] ">
            <div className="bg-white flex relative text-red-500 p-4  top-0 xl:text-8xl text-6xl w-full align-middle justify-center items-center rounded-br-[40px] lg:h-36"></div>
            <img src={threepeople} alt="threepeople" className="absolute top-10"></img>
          </div>
          <div className="  relative bg-[#00022E] w-1/2  right-0 rounded-tl-[90px] flex-col h-full justify-center align-middle items-center">
            <div className="timeline translate-x-[400px] lg:text-7xl  xl:text-9xl mt-10 font-extrabold flex w-full  justify-center items-center font-[BerlinSans] text-red-500">
              TIMELINE
            </div>
            <div className="xl:h-20 lg:h-20 "></div>
            <div className="font-[BerlinSans] text-3xl text-justify w-10/12 m-auto">
              Rev your engines and fasten your seatbelts as the GDXR Club
              kick-starts the Third Edition of Genesis – your ticket to a gaming
              adventure that hits closer to home than ever! Returning after the
              2022 Last Edition, this 2024 Genesis isn't just about pixels and
              coding; it's about bringing the spirit of gaming to life.
            </div>
          </div>
        </div>
        <div className="lg:h-10 xl:h-0"></div>
        {/* <TimelineComponent /> */}
      </div>
    </>
  );
}
