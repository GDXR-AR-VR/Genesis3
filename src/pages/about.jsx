import React, { useRef, useEffect } from "react";
import micheal from "../assets/micheal.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Circles from "../components/circles";
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  return (
    <div className="about flex justify-center bg-gradient-to-t from-black to-transparent items-center align-middle text-white text-center bg-black imgAbout z-10 lg:-mt-3 2xl:mt-52 xl:mt-0">
      <div className=" w-1/2 relative flex justify-center">
        <img
          src={micheal}
          className="absolute lg:w-4/5 md:w-4/5 xl:w-[470px] xl:-top-10 2xl:2/5"
        />
        <Circles />
      </div>
      <div>
        <div className="relative text-center w-1/2 xl:mt-20">
          <div className="title text-while lg:text-7xl lg:mb-16 xl:text-9xl Montserrat font-bold xl:mb-20 lg:m-14">
            About{" "}
            <span className="absolute top-12 left-64 font-[BerlinSans] font-[700] text-red-600 z-20">
              Genesis
            </span>
          </div>
          <div className="text-lg text-justify xl:w-[760px] lg:w-[500px] lg:text-[18px] lg:p-4 xl:mr-6 font-[BerlinSans]">
            Rev your engines and fasten your seatbelts as the GDXR Club
            kick-starts the Third Edition of Genesis - your ticket to a gaming
            adventure that hits closer to home than ever! Returning after the
            2022 Last Edition, this 2024 Genesis isn't just about pixels and
            coding; it's about bringing the spirit of gaming to life.
            <br />
            <br /> Picture this: two action-packed stages spread over 15
            thrilling days - the Online Game Jam Round and the mysterious
            Offline Surprise Element Round. It's like tackling missions, but
            instead of evading virtual cops, you're navigating through
            unexpected challenges.
            <br /> <br />
            But that's not all! Alongside the coding frenzy, enjoy interactive
            challenges that'll have you hooked, just like trying to complete a
            heist without a hitch. Top it off with wisdom from industry pros
            during engaging speaker sessions.
            <br />
            <br /> So fire up your gaming rigs, and get ready to dive into the
            virtual streets of Genesis. In this gaming universe, every line of
            code is a twisty turn down the neighborhood, and your creativity is
            the turbo boost. The clock's ticking, and the joystick beckons -
            let's make these virtual streets ours!
          </div>
        </div>
      </div>
    </div>
  );
}
