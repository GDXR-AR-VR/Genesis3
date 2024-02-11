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
        className="about flex h-1/2 justify-center  items-center align-middle text-white text-center bg-black"
      >
        <div className="flex w-40 mt-20 mb-10 justify-between items-center align-middle text-3xl">
          <motion.div
            whileHover={{ scale: 1.2, color: "red" }}
            onClick={() => {
              window.open("https://www.facebook.com/GDXR.AIT", "_blank");
            }}
          >
            <FontAwesomeIcon icon={faFacebook} />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2, color: "red" }}
            onClick={() => {
              window.open("https://www.instagram.com/gdxr_ait/", "_blank");
            }}
          >
            <FontAwesomeIcon icon={faInstagram} />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2, color: "red" }}
            onClick={() => {
              window.open("https://www.linkedin.com/company/ait-gdxr-club/", "_blank");
            }}
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </motion.div>
        </div>
      </div>
    </>
  );
}
