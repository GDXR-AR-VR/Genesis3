import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDown, faCircleUp } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
export default function Faqs() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentOpen] = useState(0);
  const optionArr = [
    { title: "Sponsor Us", link: "" },
    { title: "Contact Us", link: "#contactus" },
    {
      title: "Register",
      link: "https://unstop.com/hackathons/genesis-iii-army-institute-of-technology-ait-pune-895235",
    },
  ];
  const arr = [
    {
      question: "What is Genesis?",
      answer:
        "Rev your engines and fasten your seatbelts as the GDXR Club kick-starts the Third Edition of Genesis – your ticket to a gaming adventure that hits closer to home than ever! Returning after the 2022 Last Edition, this 2024 Genesis isn't just about pixels and coding; it's about bringing the spirit of gaming to life.",
    },
    {
      question: "What is GDXR?",
      answer:
        "GDXR is a student-run club at the Army Institute of Technology that aims to bring together students who share a passion for gaming and technology. Our goal is to provide a platform for students to connect, learn, and grow in the gaming industry.",
    },
  ];
  return (
    <>
      <div
        id="faqs"
        className="relative sponsors  select-none w-full flex-col bg-[#ECE8E1] overflow-hidden text-black imgSponsors justify-center items-center align-middle "
      >
        <div className="xl:h-20 lg:h-12"></div>
        <div className="font-[Montserrat] select-none font-bold text-9xl text-center">
          FAQs
        </div>
        <div className="xl:h-20 lg:h-12"></div>
        <div className="flex-col justify-center items-center align-center">
          {arr.map((item, index) => {
            return (
              <>
                <motion.div
                  className="relative w-8/12 font-[BerlinSans] font-medium text-black text-5xl p-5 border-b-2 m-auto  border-black"
                  key={index}
                >
                  {" "}
                  {item.question}
                  <FontAwesomeIcon
                    key={index + item.question}
                    className="font-normal right-16 absolute "
                    icon={
                      isOpen && index === currentIndex
                        ? faCircleUp
                        : faCircleDown
                    }
                    onClick={() => {
                      if (isOpen && index !== currentIndex) {
                        setCurrentOpen(index);
                        return;
                      } else {
                        setIsOpen(!isOpen);
                      }
                      setCurrentOpen(index);
                    }}
                  />
                  {isOpen && index === currentIndex && (
                    <motion.div
                      key={index + item.answer}
                      className="xl:text-2xl mt-5 bg-red-500 text-lg text-white p-5 select-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1 }}
                    >
                      {item.answer}
                    </motion.div>
                  )}
                </motion.div>{" "}
              </>
            );
          })}
        </div>
        <div className="flex w-8/12 m-auto justify-between mb-20">
          {optionArr.map((item, index) => {
            return (
              <>
                <motion.div
                  whileHover={{ rotate: Math.random() * 3, scale: 1.1 }}
                  onClick={() => {
                    window.open(item.link, "_blank");
                  }}
                  className=" relative register bg-red-500 m-auto text-white w-fit  xl:h-16 xl:p-4 lg:text-4xl lg:p-4  text-2xl p-0.5 mt-20 font-[BerlinSans] font-bold text-center z-30"
                >
                  {item.title}
                </motion.div>
              </>
            );
          })}
        </div>
        <div className="absolute bottom-20 w-full">
          <div className="absolute  right-0 rotate-[20deg] border-t-[50px] border-t-transparent border-r-[75px]  top-0 border-r-[#7561e3] border-b-[50px] border-b-transparent scale-[5] bg-transparent">
            <div className="absolute  border-t-[50px] border-t-transparent border-r-[75px] -top-[50px]   border-r-[#ffffff] border-b-[50px] border-b-transparent scale-[0.95] bg-transparent">
              <div className="absolute   border-t-[50px] border-t-transparent -top-[50px]  border-r-[75px]  border-r-[#7f85fe] border-b-[50px] border-b-transparent scale-[0.9]">
                <div className="absolute  border-t-[50px] border-t-transparent z-10 -top-[50px] border-r-[75px] border-r-[#7f82d3] border-b-[50px] border-b-transparent scale-[0.8]">
                  <div className="absolute  border-t-[50px] border-t-transparent z-20 left-[4px] -top-[50px] border-r-[75px] border-r-[#7e81a7] border-b-[50px] border-b-transparent scale-[0.6]">
                    <div className="absolute  border-t-[50px] border-t-transparent z-20 left-[4px] -top-[50px] border-r-[75px] border-r-[#7f7f7f] border-b-[50px] border-b-transparent scale-[0.4]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
