import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function AboutMobile() {
  return (
    <>
      <div className="about relative h-screen select-none flex-col justify-center overflow-hidden items-center bg-blue-950 align-middle bg-gradient-to-b from-blue-950 via-blue-900 to-blue-700 text-white text-center"></div>
    </>
  );
}
