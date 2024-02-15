import beach from "../assets/beach.svg";
import thanos from "../assets/thanos.png";
import polygon from "../assets/polygon.svg";
import devfolio from "../assets/devfolio.svg";
import ethindia from "../assets/ethindia.svg";
import maidaan from "../assets/maidaan.svg";
export default function Sponsors() {
  const goldSponsor = [polygon, devfolio, ethindia];
  const titleSponsor = [maidaan];
  return (
    <>
      <div
        id="sponsors"
        className=" relative sponsors h-screen flex-col bg-[#ECE8E1] overflow-hidden text-black imgSponsors "
      >
        <img
          src={beach}
          alt="beach"
          className="absolute right-3 -top-40 object-cover"
        ></img>
        <div className="xl:h-1"></div>
        <div className="flex">
          <div className="flex-col xl:w-9/12 w-9/12 p-4">
            <div className="relative title lg:text-5xl   xl:text-7xl Montserrat font-bold  lg:m-14">
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
                      alt="sponsor"
                        src={sponsor}
                        className="w-full h-full p-4 mt-2 aspect-scale-1/1"
                      ></img>
                    </div>
                  </div>
                ))}
              </div>
              <div>Platinum Sponsor</div>
              <div>Gold Sponsor</div>
              <div className="flex m-10">
                {goldSponsor.map((sponsor) => (
                  <div className="register w-[240px] h-[100px] border-2 items-center justify-center flex bg-red-500 mr-10">
                    <div className="register w-[230px] h-[90px] bg-white justify-center">
                      <img
                        src={sponsor}
                        alt="sponsor"
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

        <div className="w-full h-40 z-10 relative">
          <div className="register absolute xl:-top-32 xl:left-[660px] lg:w-[220px] lg:h-[70px] lg:top-10 lg:left-[400px] xl:w-[240px] w-52 h-52 bg-red-500 font-[BerlinSans] text-white xl:h-[90px] xl:text-5xl select-none xl:p-3 lg:p-10 items-center text-center align-middle justify-center flex lg:text-3xl">
            Sponsor Us
          </div>
        </div>
      </div>
    </>
  );
}
