import { motion } from "framer-motion";
import sponsorUs from "../assets/sponsorUs.png";
export default function SponsorUs() {
  const submit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <>
      <div className="sponsors relative flex-col h-screen w-screen bg-[#ECE8E1] font-[BerlinSans] overflow-hidden  ">
        <img
          className="absolute scale-[3.4] xs:scale-[3] top-52 xs:top-48 md:top-0 md:scale-[1.8] lg:scale-[1.2] xl:scale-[1] object-contain"
          src={sponsorUs}
        ></img>
        <div className="h-16"></div>
        <div className="relative title md:text-7xl text-5xl xs:text-6xl xl:text-8xl mb-3 text-white font-extrabold text-center ">
          SPONSOR US
        </div>
        <div className=" glass rounded-3xl border-[1px] p-4 justify-center select-none items-center align-middle m-auto w-9/12 md:w-[400px] z-20 flex-col gap-4">
          <p className="text-white">Name of Organisation</p>
          <input
            // name="name "
            type="text"
            className="h-8 rounded-xl w-full z-20 p-2"
          ></input>

          <p className="text-white">E-mail</p>
          <input
            name="email"
            type="email"
            className="h-8 w-full rounded-xl p-2"
          ></input>
          <p className="text-white">Description</p>
          <input
            name="desc"
            type="text"
            className="h-8 w-full rounded-xl p-2"
          ></input>
          <p className="text-white">How do you want to contribute</p>
          <textarea
            name="contribution"
            type="text"
            className="h-12 w-full rounded-xl p-2"
          ></textarea>
          <p className="text-white">What do you expect from us</p>
          <textarea
            name="expectation"
            type="text"
            className="h-12 w-full rounded-xl p-2"
          ></textarea>
          <br />
          <div className="w-full md:mt-10 justify-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              type="submit"
              onClick={() => {
                submit(e);
              }}
              className="w-fit text-2xl p-3 font-bold font-[BerlinSans] select-none h-12 text-white text-center m-auto register bg-red-500 "
            >
              Submit
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
