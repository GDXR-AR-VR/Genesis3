import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
export default function Footer() {
  return (
    <>
      <div
        id="contactus"
        className="flex-col bg-black text-white font-[BerlinSans] text-center"
      >
        <div className="h-7"></div>
        <div className="mb-7">PRESENTED BY</div>
        <div className="flex justify-center items-center">
          <div className="h-0.5 bg-white w-1/4"></div>
          <div className="text-5xl font-extrabold pl-4 pr-4">GDXR</div>
          <div className="h-0.5 bg-white w-1/4"></div>
        </div>
        <div className="flex justify-evenly mt-10">
          <div className="w-1/3">
            <p className="text-2xl md:text-3xl underline">Venue</p>
            <p>Army Institute of Technology</p>
            <p>Pune, 411015</p>
          </div>
          <div className=" w-1/3">
            <div className="text-2xl md:text-3xl underline mb-10">
              Follow Us
            </div>
            <div className="flex w-5/12 text-3xl m-auto justify-evenly">
              <motion.div
                whileTap={{ color: "red", scale: 1.1 }}
                whileHover={{ scale: 1.1, color: "red" }}
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  onClick={() => {
                    window.open("https://www.facebook.com/GDXR.AIT", "_blank");
                  }}
                />
              </motion.div>
              <motion.div
                whileTap={{ color: "red", scale: 1.1 }}
                whileHover={{ scale: 1.1, color: "red" }}
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  onClick={() => {
                    window.open(
                      "https://www.instagram.com/gdxr_ait/",
                      "_blank"
                    );
                  }}
                />
              </motion.div>
              <motion.div
                whileTap={{ color: "red", scale: 1.1 }}
                whileHover={{ scale: 1.1, color: "red" }}
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  onClick={() => {
                    window.open(
                      "https://www.linkedin.com/company/ait-gdxr-club/",
                      "_blank"
                    );
                  }}
                />
              </motion.div>
            </div>
          </div>
          <div className="text-lg w-1/3">
            <p className="text-2xl md:text-3xl underline">Contact Us</p>
            <motion.div
              className="cursor-pointer w-fit m-auto"
              whileTap={{ color: "red", scale: 1.1 }}
              whileHover={{ scale: 1.1, color: "red" }}
              onClick={() => {
                navigator.clipboard.writeText("8303087844");

                console.log("copied");
              }}
            >
              Manas Yadav
            </motion.div>
            <motion.div
              whileTap={{ color: "red", scale: 1.1 }}
              className="cursor-pointer w-fit m-auto"
              whileHover={{ scale: 1.1, color: "red" }}
              onClick={() => {
                navigator.clipboard.writeText("6267479632");

                console.log("copied");
              }}
            >
              Reema Singh
            </motion.div>
          </div>
        </div>

        <div className="h-10"></div>
      </div>
    </>
  );
}
