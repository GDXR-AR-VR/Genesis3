import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDown, faCircleUp } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import maidaan from "../assets/maidaan.svg";
import ShapedButton from "../components/shapedButton";
export default function SponsorStatement() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentOpen] = useState(0);
  const optionArr = [
    { title: "Sponsor Us", link: "\\sponsorus" },
    { title: "Contact Us", link: "#footer" },
    {
      title: "Register",
      // link: "https://unstop.com/hackathons/genesis-iii-army-institute-of-technology-ait-pune-895235",
      link: "https://linktr.ee/GenesisIII",
    },
  ];
  const arr = [
    {
      question: "Problem Statement",
      answer:
        "Lack of good quality online-activities for school children to do with friends, resulting in them spending time watching TikTok / Reels, which eventually parents block. ",
    },
    {
      question: "Solution Needed",
      answer: `Multiplayer games that build critical skills for children and provide good quality peer to peer 
      engagement. 
      Make something that is easy to understand and hard to master with potential virality. `,
    },
    {
      question: "Tech Specs",
      answer: ` 
• Game must be web-based and written in ReactJS (only) <br/>
• No installation should be needed.  <br/>
• Feel free to use external components and open-source libraries. `,
    },
    {
      question: "The Rewards",
      answer: `Up to 2 teams can win prize money of 5000 INR.<br/>
      • Chance to work closely with our tech team and get your game production ready with an 
      internship certificate. <br/>
      • A unique opportunity to get 7-day live usage data on your game from our production 
      environment. `,
    },
  ];
  return (
    <>
      <div
        id="faqs"
        className="relative sponsors mb-40  select-none w-full flex-col bg-[#ECE8E1]  text-black imgSponsors justify-center items-center align-middle "
      >
        <div className=""></div>
        <div className="font-[Montserrat] select-none font-bold text-5xl md:text-7xl lg:text-7xl text-center">
          <span className="text-red-500">Maidaan's</span>
          <br /> Problem Statement
        </div>
        <div className="xl:h-20 lg:h-12 h-16"></div>
        <div className="flex-col justify-center items-center align-center">
          {arr.map((item, index) => {
            return (
              <>
                <motion.div
                  className="relative w-9/12 font-[BerlinSans] font-medium text-black text-2xl md:text-3xl lg:text-5xl p-3 lg:p-5 border-b-2 m-auto  border-black"
                  key={index}
                  onClick={() => {
                    console.log("clicked");
                    if (isOpen && index !== currentIndex) {
                      setCurrentOpen(index);
                      return;
                    } else {
                      setIsOpen(!isOpen);
                    }
                    setCurrentOpen(index);
                  }}
                >
                  {" "}
                  {item.question}
                  <FontAwesomeIcon
                    key={index + item.question}
                    className="font-normal lg:right-16 right-2 absolute z-10"
                    icon={
                      isOpen && index === currentIndex
                        ? faCircleUp
                        : faCircleDown
                    }
                  />
                  {isOpen && index === currentIndex && (
                    <motion.div
                      key={index + item.answer}
                      className="xl:text-2xl mt-5 bg-red-500 text-sm md:text-lg  text-white p-2 md:p-4 lg:p-5 select-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1 }}
                      dangerouslySetInnerHTML={{ __html: item.answer }}
                    >
                      {/* {item.answer} */}
                    </motion.div>
                  )}
                </motion.div>{" "}
              </>
            );
          })}
        </div>
        {/* <div className="flex flex-wrap w-10/12 h-32 md:w-8/12 m-auto justify-between mb-20">
          {optionArr.map((item, index) => {
            return (
              <>
                <motion.div
                  whileHover={{ rotate: Math.random() * 3, scale: 1.1 }}
                  onClick={() => {
                    if (item.title !== "Contact Us") {
                      window.open(item.link, "_blank");
                    } else window.location.href = "#contactus";
                  }}
                  className=" relative register mt-10 bg-red-500 m-auto text-white w-fit h-12 xl:h-16 xl:p-4 lg:text-4xl lg:p-4 text-xl md:text-2xl p-3 md:mt-20 font-[BerlinSans] font-bold text-center z-30"
                >
                  {item.title}
                </motion.div>
              </>
            );
          })}
        </div> */}
        <div className="absolute -bottom-20 md:w-full md:scale-100 scale-75 right-0">
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
