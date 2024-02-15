import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function AboutMobile() {
  return (
    <>
      <div className="about relative w-screen select-none flex-col justify-center overflow-hidden items-center imgAboutMobile bg-black align-middle  text-white text-center">
        <div className="relative title text-center w-full xl:mt-20 ">
          <div className="absolute left-6  text-white text-5xl xs:text-6xl Montserrat font-bold">
            About{" "}
            <span className="absolute top-8 left-20 font-[BerlinSans] font-extrabold text-red-600 z-20">
              GENESIS
            </span>
          </div>
          <div className="h-20"></div>
          <div className="p-10 w-full  text-justify font-[BerlinSans]">
            Rev your engines and fasten your seatbelts as the GDXR Club
            kick-starts the Third Edition of Genesis – your ticket to a gaming
            adventure that hits closer to home than ever! Returning after the
            2022 Last Edition, this 2024 Genesis isn't just about pixels and
            coding; it's about bringing the spirit of gaming to life.<br></br>{" "}
            Picture this: two action-packed stages spread over 15 thrilling days
            – the Online Game Jam Round and the mysterious Offline Surprise
            Element Round. It's like tackling missions, but instead of evading
            virtual cops, you're navigating through unexpected challenges.
            <br></br> But that's not all! Alongside the coding frenzy, enjoy
            interactive challenges that'll have you hooked, just like trying to
            complete a heist without a hitch. Top it off with wisdom from
            industry pros during engaging speaker sessions.<br></br> So fire up
            your gaming rigs, and get ready to dive into the virtual streets of
            Genesis. In this gaming universe, every line of code is a twisty
            turn down the neighborhood, and your creativity is the turbo boost.
            The clock's ticking, and the joystick beckons – let's make these
            virtual streets ours!
          </div>
        </div>
      </div>
    </>
  );
}
