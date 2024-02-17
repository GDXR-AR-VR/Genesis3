import beach from "../assets/beach.svg";
import thanos from "../assets/thanos.png";
import {goldSponsor, titleSponsor,bronzeSponsor} from "../components/sponsors";
export default function SponsorsMobile() {

  return (
    <div className="relative sponsorsMobile w-screen h-screen flex-col bg-[#ECE8E1] overflow-hidden text-black ">
      <img
        src={beach}
        alt="beach"
        className="absolute scale-[2] right-40 bottom-40 md:scale-[1.5]"
      ></img>
      <div className="relative title text-5xl mt-6 ml-8  md:text-7xl Montserrat font-bold  lg:m-14">
        OUR{" "}
        <span className="absolute md:top-10 md:left-24 top-8 left-10 font-[BerlinSans] font-[1000] text-red-600 z-20">
          SPONSORS
        </span>
      </div>
      <div className="h-10"></div>
      <div>
        <div className="font-[BerlinSans] text-2xl">
          <div>
            <p className="text-[#3E3E3E] ml-10">Title Sponsor</p>
          </div>
          <div className="flex ml-5 w-full flex-wrap justify-center">
            {titleSponsor.map((sponsor) => (
              <div className="register w-[160px] h-[70px]  items-center justify-center flex bg-red-500 mr-10">
                <div className="register w-[150px] h-[60px] bg-white justify-center">
                  <img
                    src={sponsor.value}
                    alt="sponsor"
                    className="w-full h-full mt-2 aspect-scale-1/1"
                  ></img>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-[#3E3E3E] ml-10">Gold Sponsor</div>
          <div className="flex ml-5 w-full flex-wrap justify-center">
            {goldSponsor.map((sponsor) => (
              <div className="register w-[160px] h-[70px]  items-center justify-center align-middle flex bg-red-500 mr-10">
                <div className="register w-[150px] h-[60px] bg-white justify-center">
                  <img
                    src={sponsor.value}
                    alt="sponsor"
                    className="w-full h-full p-4 mt-2 aspect-scale-1/1"
                  ></img>
                </div>
              </div>
            ))}
          </div>
          <div className="text-[#3E3E3E] ml-10">Bronze Sponsor</div>
          <div className="flex ml-5 w-full flex-wrap justify-center">
            {bronzeSponsor.map((sponsor) => (
              <div className="register w-[160px] h-[70px]  items-center justify-center align-middle flex bg-red-500 mr-10">
                <div className="register w-[150px] h-[60px] bg-white justify-center">
                  <img
                    src={sponsor.value}
                    alt="sponsor"
                    className="w-full h-full p-4 mt-2 aspect-scale-1/1"
                  ></img>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </div>
  );
}
