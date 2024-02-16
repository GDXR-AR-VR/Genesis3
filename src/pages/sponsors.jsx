import beach from "../assets/beach.svg";
import thanos from "../assets/thanos.png";
import {goldSponsor, titleSponsor,bronzeSponsor} from "../components/sponsors";
import { motion } from "framer-motion";
export default function Sponsors() {

  return (
    <>
      <div
        id="sponsors"
        className=" relative sponsors flex-col bg-[#ECE8E1] overflow-hidden text-black imgSponsors "
      >
        <img
          src={beach}
          alt="beach"
          className="absolute right-3 -top-40 object-cover"
        ></img>
        <div className="xl:h-1  "></div>
        <div className="flex ">
          <div className="flex-col xl:w-9/12 w-9/12 p-4">
            <div className="relative title lg:text-5xl xl:text-7xl Montserrat font-bold lg:m-14">
              OUR{" "}
              <span className="absolute xl:text-8xl top-10 left-24 font-[BerlinSans] font-extrabold text-red-600 z-20">
                SPONSORS
              </span>
            </div>
            <div className="font-[BerlinSans] xl:text-4xl">
              <div>
                <p className="text-[#3E3E3E] ml-10">Title Sponsor</p>
              </div>
              <div className="flex ml-10 w-full flex-wrap">
                {titleSponsor.map((sponsor) => (
                  <div className="register w-[240px] h-[100px] border-2 items-center justify-center flex bg-red-500 mr-10">
                    <div className="register w-[230px] h-[90px] bg-white justify-center">
                      <img
                        src={sponsor.value}
                        alt={sponsor.alt}
                        className="w-full h-full  mt-2 aspect-scale-1/1"
                      ></img>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-[#3E3E3E] ml-10">Gold Sponsor</div>
              <div className="flex ml-10">
                {goldSponsor.map((sponsor) => (
                  <div className="register w-[240px] h-[100px] border-2 items-center justify-center flex bg-red-500 mr-10">
                    <div className="register w-[230px] h-[90px] bg-white justify-center">
                      <img
                        src={sponsor.value}
                        alt={sponsor.alt}
                        className="w-full h-full p-4 mt-2 aspect-scale-1/1"
                      ></img>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-[#3E3E3E] ml-10">Bronze Sponsor</div>
              <div className="flex ml-10">
                {bronzeSponsor.map((sponsor) => (
                  <div className="register w-[240px] h-[100px] border-2 items-center justify-center flex bg-red-500 mr-10">
                    <div className="register w-[230px] h-[90px] bg-white justify-center">
                      <img
                        src={sponsor.value}
                        alt={sponsor.alt}
                        className="w-full h-full p-4 mt-2 aspect-scale-1/1"
                      ></img>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="xl:w-5/12 w-5/12">
            <img src={thanos} alt="thanos" className="scale-75"></img>
          </div>
        </div>

        <motion.div
          whileHover={{ rotate: Math.random() * 3, scale: 1.1 }}
          onClick={() => {
            window.open("\\sponsorus", "_blank");
          }}
          className=" relative register select-none bg-red-500 m-auto text-white w-fit h-12 xl:h-16 xl:p-4 lg:text-4xl lg:p-4 text-xl md:text-2xl p-3 font-[BerlinSans] font-bold text-center z-30"
        >
          Sponsor Us
        </motion.div>
        <div className="h-20"></div>
      </div>
    </>
  );
}
