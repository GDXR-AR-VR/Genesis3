
import threepeople from "../assets/threepeople.png"

export default function Timeline() {
  const dropShadow = "drop-shadow-[0_0.2px_0.2px_rgba(0,0,0,0.8)]";
  return (
    <>
      <div
        id="Prize"
        className="about relative flex flex-col font-[BerlinSans] items-end align-middle text-white text-center lg:-mt-3 xl:mt-0"
      >
        <div className="bg-[#00022E] flex text-red-500 p-10 right-0 top-0 xl:text-8xl text-6xl w-[40%] rounded-tl-[40px] lg:h-36">
          <p className="font-weight-900">Timeline</p>
        </div>
        <div className="flex w-full h-[80vh] bg-[#00022E] justify-around items-center">
          <div className="w-[70%] flex items-center gap-20">
            <div className="imgContainer overflow-visible">
              <img src={threepeople} alt="" className="relative w-[200%]" />
            </div>
            <div className="text-content w-[50%] text-left text-2xl">
              <p>Rev your engines and fasten your seatbelts as the GDXR Club kick-starts the Third Edition of Genesis – your ticket to a gaming adventure that hits closer to home than ever! Returning after the 2022 Last Edition, this 2024 Genesis isn't just about pixels and coding; it's about bringing the spirit of gaming to life.</p>
            </div>
          </div>
        </div>
        <div className="w-full bg-[#00022E] h-[20vh] flex flex-col justify-center gap-0 items-center">
          <div className="top flex justify-center items-center gap-14">
            <div className="head text-xl text-red-500">
              <p>Registration Start</p>
            </div>
            <div className="head text-lg text-slate-300">
              <p>17 Feb 2024</p>
            </div>
            <div className="head text-xl text-red-500">
              <p>Round 1 Start</p>
            </div>
            <div className="head text-lg text-slate-300">
              <p>24 Feb 2024</p>
            </div>
            <div className="head text-xl text-red-500">
              <p>Round 2 Start</p>
            </div>
            <div className="head text-lg text-slate-300">
              <p>4 March 2024</p>
            </div>
          </div>
          <div className="middle flex justify-center items-center">
            <div className="smallbox w-4 h-12 rounded-sm bg-red-500 "></div>
            <div className="smallbox w-40 h-2 bg-red-500"></div>
            <div className="smallbox w-4 h-12 rounded-sm bg-red-500 "></div>
            <div className="smallbox w-40 h-2 bg-red-500"></div>
            <div className="smallbox w-4 h-12 rounded-sm bg-red-500 "></div>
            <div className="smallbox w-40 h-2 bg-slate-100"></div>
            <div className="smallbox w-4 h-12 rounded-sm bg-slate-100 "></div>
            <div className="smallbox w-40 h-2 bg-slate-100"></div>
            <div className="smallbox w-4 h-12 rounded-sm bg-slate-100 "></div>
            <div className="smallbox w-40 h-2 bg-slate-100"></div>
            <div className="smallbox w-4 h-12 rounded-sm bg-slate-100 "></div>
          </div>
          <div className="top flex justify-center items-center gap-14">
            <div className="head text-lg text-slate-300">
              <p>05 Feb 2024</p>
            </div>
            <div className="head text-xl text-red-500">
              <p>Registration End</p>
            </div>
            <div className="head text-lg text-slate-300">
              <p>17 Feb 2024</p>
            </div>
            <div className="head text-xl text-red-500">
              <p>Round 1 Results</p>
            </div>
            <div className="head text-lg text-slate-300">
              <p>02 March 2024</p>
            </div>
            <div className="head text-xl text-red-500">
              <p>Final Results</p>
            </div>
            
          </div>
          {/* <div className="one flex flex-col justify-center items-center">
            <p className="text-xl text-red-500">Registration start</p>
            <div className="smallbox w-4 h-12 rounded-sm bg-red-500 "></div>
            <p className="text-lg text-slate-300">05 Feb 2024</p>
          </div>
          <div className="two w-40 h-2 bg-red-500"></div>
          <div className="one flex flex-col justify-center items-center">
            <p className="text-lg text-slate-300">05 Feb 2024</p>
            <div className="smallbox w-4 h-12 rounded-sm bg-red-500 "></div>
            <p className="text-2xl text-red-500">Registration start</p>
          </div>
          <div className="two w-40 h-2 bg-red-500"></div>
          <div className="one flex flex-col justify-center items-center">
            <p className="text-2xl text-red-500">Registration start</p>
            <div className="smallbox w-4 h-12 rounded-sm bg-red-500 "></div>
            <p className="text-lg text-slate-300">05 Feb 2024</p>
          </div>
          <div className="two w-40 h-2 bg-slate-200"></div>
          <div className="one flex flex-col justify-center items-center">
            <p className="text-lg text-slate-300">05 Feb 2024</p>
            <div className="smallbox w-4 h-12 rounded-sm bg-slate-200 "></div>
            <p className="text-2xl text-red-500">Registration start</p>
          </div>
          <div className="two w-40 h-2 bg-slate-200"></div>
          <div className="one flex flex-col justify-center items-center">
            <p className="text-2xl text-red-500">Registration start</p>
            <div className="smallbox w-4 h-12 rounded-sm bg-slate-200 "></div>
            <p className="text-lg text-slate-300">05 Feb 2024</p>
          </div>
          <div className="two w-40 h-2 bg-slate-200"></div>
          <div className="one flex flex-col justify-center items-center">
            <p className="text-lg text-slate-300">05 Feb 2024</p>
            <div className="smallbox w-4 h-12 rounded-sm bg-slate-200 "></div>
            <p className="text-2xl text-red-500">Registration start</p>
          </div> */}
        </div>

      </div>
      </>
  );
}
