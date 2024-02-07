import micheal2 from "../assets/micheal2.svg";
import gta6 from "../assets/background2.png";
export default function Prizes() {
  const dropShadow = "drop-shadow-[0_0.2px_0.2px_rgba(0,0,0,0.8)]";
  return (
    <>
      <div className="about relative flex justify-center font-[Pricedown] bg-black items-center imgAbout align-middle text-white text-center lg:-mt-3 xl:mt-0">
        <div className="flex w-full h-screen bg-black">
          <div className="flex-col w-10/12 bg-white ">
            <div className="bg-black flex  text-red-500 p-4  top-0 xl:text-8xl text-6xl w-full align-middle justify-center items-center rounded-br-[40px] lg:h-36">
              <p>PRIZE</p>
              <div className="ml-8 w-2/3 xl:h-1 lg:h-2 h-1 bg-red-500"></div>
            </div>
            <div className="rounded-[30px] xl:w-10/12 w-10/12 xl:h-32 lg:h-32 h-28 bg-yellow-400 flex items-center justify-center align-middle xl:mt-24 mt-20 m-auto drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]">
              <p className="text-black md:text-5xl lg:text-6xl p-2 xl:text-7xl ml-10">
                1<span className=" align-super text-3xl"> st</span> Prize
              </p>
              <div className="m-auto h-5/6 w-1 bg-black"></div>
              <p className="text-white xl:text-7xl lg:text-5xl md:text-4xl m-auto drop-shadow-2xl flex-col">
                Rs 17,500
                <div className=" xl:text-2xl w-full text-center md:text-lg lg:text-xl font-light font-[BerlinSans] p-2">
                  Goodies and Certificate
                </div>
              </p>
            </div>
            <div className="flex w-full justify-center ">
              <div className="xl:w-11/12 w-11/12 flex  font-[Pricedown] items-center align-middle justify-center mt-20">
                <div className="rounded-[30px] xl:w-5/12 lg:w-2/3 w-1/2 z-10 h-40 bg-gray-400 flex-col items-center  mr-10 drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]">
                  <p className="text-black md:text-4xl lg:text-5xl p-2 xl:text-5xl">
                    11<span className=" align-super text-3xl"> nd</span> Prize
                  </p>
                  <div className="m-auto w-11/12 flex-col items-center align-middle justify-center h-1 bg-black"></div>
                  <p className="text-white xl:text-5xl lg:text-5xl md:text-4xl  drop-shadow-2xl flex-col">
                    Rs 15,000
                    <div className=" xl:text-2xl md:text-lg lg:text-xl font-light font-[BerlinSans] p-2">
                      Goodies and Certificate
                    </div>
                  </p>
                </div>
                <div className="rounded-[30px] xl:w-5/12 lg:w-2/3 z-10 w-1/2 h-40 bg-red-500 flex-col items-center drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]">
                  <p className="text-black md:text-4xl p-2 xl:text-5xl lg:text-5xl">
                    111<span className=" align-super text-3xl"> rd</span> Prize
                  </p>
                  <div className="m-auto w-11/12  h-1 bg-black"></div>
                  <p className="text-white xl:text-5xl md:text-4xl lg:text-5xl drop-shadow-2xl flex-col">
                    Rs 12,500
                    <div className=" xl:text-2xl md:text-lg lg:text-xl font-light font-[BerlinSans] p-2">
                      Goodies and Certificate
                    </div>
                  </p>
                </div>
              </div>
            </div>
            <div className="xl:w-10/12 w-10/12 flex lg:text-xl xl:text-3xl lg:mt-16 select-none z-20 text-gray-500 font-bold font-[BerlinSans] items-center align-middle justify-center">
              *Remaining Participants will get Participation Certificates.
            </div>
          </div>
          <div className="relative bg-white xl:w-5/12 w-1/2  right-0 rounded-tl-[90px] flex justify-center align-middle items-center">
            <div className="absolute top-4 left-4 border-2 z-10 bg-black overflow-hidden imgPrize rounded-[90px] lg:w-11/12 w-10/12 h-11/12 flex items-center align-middle justify-center">
              <img
                src={gta6}
                className="absolute bottom-10 scale-150 clear-both object-fill"
              ></img>
              <img
                src={micheal2}
                className="rounded-2xl xl:w-[400px] mr-10 mb-1 z-10"
              ></img>
            </div>
            <p className="absolute text-3xl text-nowrap -left-[1000px] w-screen lg:text-7xl lg:bottom-10 xl:text-8xl  text-white xl:bottom-4 font-extrabold Montserrat drop-shadow-[0_0.5px_0.5px_rgba(0,0,0,0.8)]">
              PRIZE . PRIZE . PRIZE . PRIZE . PRIZE . PRIZE . PRIZE . PRIZE .
            </p>
          </div>
        </div>
      </div>

      {/* <div className="about relative flex justify-center bg-black items-center imgAbout align-middle text-white text-center  z-10 lg:-mt-3 xl:mt-0">
        <div className="bg-black flex font-[Pricedown] text-red-500 p-4 absolute top-0 xl:text-8xl text-6xl w-7/12 left-0 xl:w-7/12 align-middle justify-center items-center rounded-br-[40px]">
          <p>PRIZE</p>
          <div className="ml-8 w-2/3 h-1 bg-red-500"></div>
        </div>
        <div className=" flex w-full h-full bg-black">
          <div className="flex-col w-full h-full ">
            <div className="bg-white">
              <div className="xl:w-7/12 w-7/12  font-[Pricedown] items-center flex align-middle justify-center ">
                <div className="rounded-[30px] xl:w-10/12 h-28 bg-yellow-400 flex items-center xl:mt-60">
                  <p className="text-black md:text-4xl p-2 xl:text-5xl ml-10">
                    1<span className=" align-super text-3xl"> st</span> Prize
                  </p>
                  <div className="m-auto h-5/6 w-1 bg-black"></div>
                  <p className="text-white xl:text-5xl md:text-4xl mr-10 drop-shadow-2xl flex-col">
                    Rs 17,500
                    <div className=" xl:text-2xl md:text-lg font-light font-[BerlinSans] p-2">
                      Goodies and Certificate
                    </div>
                  </p>
                </div>
              </div>
            </div>
            <div className="xl:w-7/12 w-7/12 flex  font-[Pricedown] items-center align-middle justify-center -mt-40">
              <div className="rounded-[30px] xl:w-5/12 h-40 bg-gray-400 flex-col items-center xl:mt-60 mr-20">
                <p className="text-black md:text-4xl p-2 xl:text-5xl ml-10">
                  2<span className=" align-super text-3xl"> nd</span> Prize
                </p>
                <div className="m-auto w-11/12  h-1 bg-black"></div>
                <p className="text-white xl:text-5xl md:text-4xl mr-10 drop-shadow-2xl flex-col">
                  Rs 15,000
                  <div className=" xl:text-2xl md:text-lg font-light font-[BerlinSans] p-2">
                    Goodies and Certificate
                  </div>
                </p>
              </div>
              <div className="rounded-[30px] xl:w-5/12 h-40 bg-red-500 flex-col items-center jus xl:mt-60">
                <p className="text-black md:text-4xl p-2 xl:text-5xl ml-10">
                  3<span className=" align-super text-3xl"> rd</span> Prize
                </p>
                <div className="m-auto w-11/12  h-1 bg-black"></div>
                <p className="text-white xl:text-5xl md:text-4xl mr-10 drop-shadow-2xl flex-col">
                  Rs 12,500
                  <div className=" xl:text-2xl md:text-lg font-light font-[BerlinSans] p-2">
                    Goodies and Certificate
                  </div>
                </p>
              </div>
            </div>
          </div>
          <div className="absolute bg-red-500 xl:w-5/12 w-5/12 h-screen right-0 rounded-tl-[60px] flex justify-center align-middle items-center">
            <div className=" border-2 bg-black imgPrize rounded-[60px]  w-7/12 h-7/12 flex items-center align-middle justify-center">
              <img
                src={micheal2}
                className="rounded-2xl xl:w-[400px] mr-10 mb-2"
              ></img>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
