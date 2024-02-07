import React from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const arr = [
    "Memories",
    "Timeline",
    "Prize",
    "GDXR",
    "About",
    "Sponsors",
    "FAQs",
  ];
  return (
    <>
      <div className="w-screen flex absolute text-gray-400 text-3xl font-[Inter]  z-20  justify-center bg-transparent">
        <motion.div
          className="w-2/3 xl:absolute xl:left-56 flex items-center justify-center align-middle gap-6"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {arr.map((item, index) => {
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
                  window.location.href = `#${item}`;
                }}
              >
                {item}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </>
  );
}
