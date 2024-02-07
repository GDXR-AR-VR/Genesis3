import micheal2 from "../assets/micheal2.svg";
export default function Prizes() {
  return (
    <>
      <div className="about relative flex justify-center bg-black items-center text-center imgAbout align-middle text-white text-center  z-10 lg:-mt-3 xl:mt-0">
        <div className="bg-black flex font-[Pricedown] text-red-500 p-4 absolute top-0 xl:text-8xl text-6xl w-7/12 left-0 xl:w-7/12 align-middle justify-center items-center rounded-br-[40px]">
          <p>PRIZE</p>
          <div className="ml-8 w-2/3 h-1 bg-red-500"></div>
        </div>
        <div className=" flex w-full h-full">
          <div className="flex-col w-full h-full bg-white">
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
          <div className="absolute bg-white xl:w-5/12 w-5/12 h-screen right-0 rounded-tl-[60px] flex justify-center align-middle items-center">
            <div className=" border-2 bg-black imgPrize rounded-[60px]  w-7/12 h-7/12 flex items-center align-middle justify-center">
              <img
                src={micheal2}
                className="rounded-2xl xl:w-[400px] mr-10 mb-2"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
