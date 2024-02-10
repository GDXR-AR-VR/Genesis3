import React from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const arr = [
    {
      item: "MEMORIES",
      link: "memories",
    },
    {
      item: "TIMELINE",
      link: "timeline",
    },
    {
      item: "PRIZE",
      link: "prize",
    },
    {
      item: "GDXR",
      link: "gdxr",
    },

    {
      item: "ABOUT",
      link: "about",
    },
    {
      item: "SPONSORS",
      link: "sponsors",
    },
    {
      item: "FAQS",
      link: "faqs",
    },
  ];
  // "MEMORIES",
  // "TIMELINE",
  // "PRIZE",
  // "GDXR",
  // "ABOUT",
  // "SPONSORS",
  // "FAQS",

  return (
    <>
      <div className="w-screen flex absolute text-gray-400 xl:text-2xl text-xl font-[Inter]  z-20  justify-center bg-transparent">
        <motion.div
          className="w-2/3 xl:absolute xl:left-56 flex items-center justify-center align-middle gap-6"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {arr.map((obj, index) => {
            return (
              <motion.div
                key={index}
                className="w-1/7 text-center select-none"
                whileHover={{
                  scale: 1.2,
                  opacity: 1,
                  color: "white",
                  cursor: "pointer",
                }}
                onClick={() => {
                  window.location.href = `#${obj.link}`;
                }}
              >
                {obj.item}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </>
  );
}
