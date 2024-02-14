import beach from "../assets/beach.svg";
import thanos from "../assets/thanos.png";
import ShapedButton, { SponsorButton } from "../components/shapedButton";
export default function SponsorsMobile() {
  return (
    <div className="relative sponsorsMobile h-screen flex-col bg-[#ECE8E1] overflow-hidden text-black ">
      <img
        src={beach}
        className="absolute scale-[2] right-40 bottom-40 md:scale-[1.5]"
      ></img>
      <div className="relative title text-5xl mt-8 ml-4  md:text-7xl Montserrat font-bold  lg:m-14">
        OUR{" "}
        <span className="absolute md:top-10 md:left-24 top-6 left-8 font-[BerlinSans] font-[1000] text-red-600 z-20">
          SPONSORS
        </span>
      </div>
      <div className="h-10"></div>
      <div>
        <div className="font-[BerlinSans] text-2xl">
          <div>
            <p className="text-[#3E3E3E] ml-10">Title Sponsor</p>
          </div>
          <div className="flex">
            <SponsorButton text="Register" />
          </div>
          <div>Platinum Sponsor</div>
          <div>Premium Sponsor</div>
        </div>
      </div>
    </div>
  );
}
