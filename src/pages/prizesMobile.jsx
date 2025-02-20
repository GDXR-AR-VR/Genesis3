import michael2 from "../assets/michael2.svg";
import gta6 from "../assets/background2.png";
import PrizeComponent from "../components/prize";
export default function PrizesMobile() {
  return (
    <>
      <div className="home relative w-screen select-none flex-col justify-center overflow-hidden bg-white items-center align-middle text-black text-center">
        <div className="w-full flex">
          <div className="h-20 w-8/12 relative bg-black rounded-br-[30px] items-center align-middle justify-center">
            <div className=" h-full prize flex w-full justify-center items-center font-extrabold font-[BerlinSans] text-red-500 text-5xl text-center">
              PRIZE
              <div className="xs:ml-8 ml-2 md:w-3/5 w-1/3 h-1 bg-red-500"></div>
            </div>
            <PrizeComponent
              color={"bg-yellow-400"}
              prize={1}
              prizeAmount={"17,500"}
              width={"w-11/12"}
              height={"h-44"}
              text={"text-2xl 2xs:text-md md:text-3xl"}
            />
          </div>
          <div className="bg-black w-1/3">
            {" "}
            <div className="relative h-80 md:h-96  w-full bg-white rounded-tl-[30px]">
              <div className="absolute top-1 left-1 border-2 z-10 bg-black overflow-hidden imgPrize rounded-[30px] h-60 md:h-full flex items-center align-middle justify-center">
                <img
                  src={gta6}
                  alt="gta"
                  className="absolute bottom-10 scale-150 clear-both object-fill"
                ></img>
                <img
                  src={michael2}
                  alt="michael"
                  className="rounded-2xl  mr-10 mb-1 z-10 michael scale-150 custom2:scale-100 mt-10 xs:scale-110  object-cover"
                ></img>
              </div>
            </div>
          </div>
        </div>
        <p className="absolute top-1/2 mt-5 text-5xl text-nowrap  -left-[200px] w-screen  text-white  font-extrabold Montserrat drop-shadow-[0_0.5px_0.5px_rgba(0,0,0,0.8)]">
          PRIZE . PRIZE . PRIZE . PRIZE . PRIZE . PRIZE . PRIZE . PRIZE .
        </p>
        <div className="flex w-full justify-evenly">
          <PrizeComponent
            color={"bg-gray-400"}
            prize={2}
            prizeAmount={"15,000"}
            width={"w-[45%]"}
            height={"xs:h-44 h-36"}
            text={"text-lg md:text-2xl hidden custom:block"}
          />
          <PrizeComponent
            color={"bg-red-500"}
            prize={3}
            prizeAmount={"12,500"}
            width={"w-[45%]"}
            height={"xs:h-44 h-36"}
            text={"text-lg md:text-2xl hidden custom:block"}
          />
        </div>
        <div className=" w-full flex select-none md:mt-2 text-gray-500 font-bold font-[BerlinSans] text-center text-lg md:text-2xl">
          *Remaining Participants will get Participation Certificates.
        </div>
      </div>
    </>
  );
}
