import threepeople from "../assets/threepeople.png";
import TimelineMobileComponent from "../components/timelineMobile";
export default function TimelineMobile() {
  return (
    <>
      <div className="timeline relative  select-none flex-col justify-center overflow-hidden bg-[#00022E] items-center align-middle  text-center">
        {/* Title */}
        <div className="flex bg-white">
          <div className="w-2/3 bg-white ">
            <div className="w-full rounded-tr-[30px] bg-[#00022E] h-20 font-extrabold font-[BerlinSans]  text-red-500  text-5xl flex items-center">
              <p className="m-auto">TIMELINE</p>
            </div>
          </div>
          <div className="w-1/3 bg-[#00022E]">
            <div className="w-full rounded-bl-[30px] bg-white h-20 "></div>
          </div>
        </div>
        {/* Main Content */}
        <div className="flex-col w-full">
          <img src={threepeople} className="md:w-1/2 m-auto"></img>
          <div className="w-full text-md text-white p-10 text-justify font-[BerlinSans]">
            Rev your engines and fasten your seatbelts as the GDXR Club
            kick-starts the Third Edition of Genesis – your ticket to a gaming
            adventure that hits closer to home than ever! Returning after the
            2022 Last Edition, this 2024 Genesis isn't just about pixels and
            coding; it's about bringing the spirit of gaming to life.
          </div>
          <TimelineMobileComponent />
        </div>
      </div>
    </>
  );
}
