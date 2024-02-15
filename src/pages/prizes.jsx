import michael2 from "../assets/michael2.svg";
import gta6 from "../assets/background2.png";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default function Prizes() {
  useEffect(() => {
    gsap.to(".michael", {
      scrollTrigger: {
        trigger: ".michael",
        start: "top 90%",
        end: "top 40%",
        scrub: 1,
        toggleActions: "restart pause reset pause",
      },
      x: 0,
      duration: 2,
    });
    gsap.to(".prize", {
      scrollTrigger: {
        trigger: ".prize",
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
        id="prize"
        className="about relative flex h-screen justify-center font-[Pricedown] bg-black items-center imgAbout align-middle text-white text-center lg:-mt-3 xl:mt-0"
      >
        <div className="flex w-full h-screen bg-black">
          <div className="flex-col w-10/12 bg-white ">
            <div className="bg-black flex relative text-red-500 p-4  top-0 xl:text-8xl text-6xl w-full align-middle justify-center items-center rounded-br-[40px] lg:h-36">
              <div className="-translate-x-[400px] prize flex w-full justify-center items-center">
                PRIZE
                <div className="ml-8 w-2/3 xl:h-1 lg:h-2 h-1 bg-red-500"></div>
              </div>
            </div>
            <div className="rounded-[30px] xl:w-10/12 w-10/12 xl:h-32 lg:h-32 h-28 bg-yellow-400 flex items-center justify-center align-middle xl:mt-24 mt-20 m-auto drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]">
              <div className="text-black md:text-5xl lg:text-6xl p-2 xl:text-7xl ml-10">
                1<span className=" align-super text-3xl"> st</span> Prize
              </div>
              <div className="m-auto h-5/6 w-1 bg-black"></div>
              <div className="text-white xl:text-7xl lg:text-5xl md:text-4xl m-auto drop-shadow-2xl flex-col">
                Rs 15,000
                <div className=" xl:text-2xl w-full text-center md:text-lg lg:text-xl font-light font-[BerlinSans] p-2">
                  Goodies and Certificate
                </div>
              </div>
            </div>
            <div className="flex w-full justify-center ">
              <div className="xl:w-10/12 w-10/12 flex  font-[Pricedown] items-center align-middle justify-between mt-20">
                <div className="rounded-[30px] xl:w-6/12 lg:w-2/3 w-1/2 z-10 h-40 bg-gray-400 flex-col items-center  mr-10 drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]">
                  <div className="text-black md:text-4xl lg:text-5xl p-2 xl:text-5xl">
                    11<span className=" align-super text-3xl"> nd</span> Prize
                  </div>
                  <div className="m-auto w-11/12 flex-col items-center align-middle justify-center h-1 bg-black"></div>
                  <div className="text-white xl:text-5xl lg:text-5xl md:text-4xl  drop-shadow-2xl flex-col">
                    Rs 12,500
                    <div className=" xl:text-2xl md:text-lg lg:text-xl font-light font-[BerlinSans] p-2">
                      Goodies and Certificate
                    </div>
                  </div>
                </div>
                <div className="rounded-[30px] xl:w-6/12 lg:w-2/3 z-10 w-1/2 h-40 bg-red-500 flex-col items-center drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]">
                  <p className="text-black md:text-4xl p-2 xl:text-5xl lg:text-5xl">
                    111<span className=" align-super text-3xl"> rd</span> Prize
                  </p>
                  <div className="m-auto w-11/12  h-1 bg-black"></div>
                  <div className="text-white xl:text-5xl md:text-4xl lg:text-5xl drop-shadow-2xl flex-col">
                    Rs 10,000
                    <div className=" xl:text-2xl md:text-lg lg:text-xl font-light font-[BerlinSans] p-2">
                      Goodies and Certificate
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:w-10/12 w-10/12 flex lg:text-xl xl:text-3xl lg:mt-16 select-none z-20 text-gray-500 font-bold font-[BerlinSans] items-center align-middle justify-center">
              *Remaining Participants will get Participation Certificates.
            </div>
          </div>
          <div className="relative bg-white xl:w-5/12 w-1/2  right-0 rounded-tl-[90px] flex justify-center align-middle items-center">
            <div className="absolute  top-4 left-4 border-2 z-10 bg-black overflow-hidden imgPrize rounded-[90px] lg:w-11/12 w-10/12 h-11/12 flex items-center align-middle justify-center">
              <img
                src={gta6}
                alt="gta6"
                className="absolute bottom-10 scale-150 clear-both object-fill"
              ></img>
              <img
                src={michael2}
                alt="michael"
                className="rounded-2xl xl:w-[400px] mr-10 mb-1 z-10 translate-x-[600px] michael"
              ></img>
            </div>
            <p className="absolute text-3xl bottom-10 mt-10  text-nowrap -left-[1000px] w-screen lg:text-7xl lg:bottom-10 xl:text-8xl  text-white xl:bottom-4 font-extrabold Montserrat drop-shadow-[0_0.5px_0.5px_rgba(0,0,0,0.8)]">
              PRIZE . PRIZE . PRIZE . PRIZE . PRIZE . PRIZE . PRIZE . PRIZE .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
