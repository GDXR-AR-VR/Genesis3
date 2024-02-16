import { motion } from "framer-motion";
import sponsorUs from "../assets/sponsorUs.png";
import { useEffect, useRef, useState } from "react";
import newRecord from "../components/firebaseConfig";
export default function SponsorUs() {
  const [prompt, setPrompt] = useState("Submit");
  const name = useRef(null);
  const desc = useRef(null);
  const phone = useRef(null);
  const email = useRef(null);
  const contribution = useRef(null);
  const expectation = useRef(null);
  const submit = async () => {
    const sponsorInfo = {
      name: name.current.value,
      phone: phone.current.value,
      email: email.current.value,
      description: desc.current.value,
      contribution: contribution.current.value,
      expectation: expectation.current.value,
    };
    if (
      sponsorInfo.name === "" ||
      sponsorInfo.phone === "" ||
      sponsorInfo.email === "" ||
      sponsorInfo.contribution === "" ||
      sponsorInfo.expectation === ""
    ) {
      setPrompt("Try Again");
      return;
    }
    const response = await newRecord(sponsorInfo);
    if (response === "success") {
      setPrompt("Success");
      name.current.value = "";
      email.current.value = "";
      phone.current.value = "";
      email.current.value = "";
      desc.current.value = "";
      contribution.current.value = "";
      expectation.current.value = "";
    } else {
      setPrompt("Try again");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setPrompt("Submit");
    }, 4000);
  }, [prompt]);
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
            required={true}
            ref={name}
            type="text"
            className="h-8 rounded-xl w-full z-20 p-2"
          ></input>
          <p className="text-white">Phone no.</p>
          <input
            required={true}
            ref={phone}
            type="number"
            className="h-8 rounded-xl w-full z-20 p-2"
          ></input>

          <p className="text-white">E-mail</p>
          <input
            required={true}
            ref={email}
            name="email"
            type="email"
            className="h-8 w-full rounded-xl p-2"
          ></input>
          <p className="text-white">Description</p>
          <input
            ref={desc}
            name="desc"
            type="text"
            className="h-8 w-full rounded-xl p-2"
          ></input>
          <p className="text-white">How do you want to contribute</p>
          <textarea
            required={true}
            ref={contribution}
            name="contribution"
            type="text"
            className="h-12 w-full rounded-xl p-2"
          ></textarea>
          <p className="text-white">What do you expect from us</p>
          <textarea
            required={true}
            ref={expectation}
            name="expectation"
            type="text"
            className="h-12 w-full rounded-xl p-2"
          ></textarea>
          <br />
          <div className="w-full md:mt-10 justify-center">
            <div className="m-auto w-fit">
              <motion.button
                onClick={() => {
                  submit();
                }}
                whileHover={{ scale: 1.1 }}
                className={`w-fit text-2xl p-3 font-bold font-[BerlinSans] select-none h-12 text-white text-center m-auto register ${
                  prompt === "Submit"
                    ? "bg-red-500"
                    : prompt === "Success"
                    ? "bg-green-500"
                    : "bg-black"
                }`}
              >
                {prompt}
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
