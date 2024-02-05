import micheal from "../assets/micheal.png";

export default function About() {
  return (
    <div className="about h-screen flex justify-center bg-gradient-to-t from-black to-transparent items-center align-middle text-white text-center bg-black imgAbout z-10 lg:-mt-3 xl:mt-52">
      <div className="w-2/5 bg-gradient-to-t from-black-20% via-transparent to-transparent">
        <img
          src={micheal}
          className="lg:w-4/5  md:w-4/5  "
        />
      </div>
      <div>
        <div className="relative text-center">
          <div className=" text-while text-9xl  Montserrat font-bold xl:mb-20">
            About{" "}
            <span className="absolute top-12 left-64 font-[BerlinSans] font-extrabold text-red-600 z-20">
              Genesis
            </span>
          </div>
          <div className="text-xl text-justify xl:w-[750px]">
            Rev your engines and fasten your seatbelts as the GDXR Club kick-starts the Third Edition of Genesis - your ticket to a gaming adventure that hits closer to home than ever! Returning after the 2022 Last Edition, this 2024 Genesis isn't just about pixels and coding; it's about bringing the spirit of gaming to life.
Picture this: two action-packed stages spread over 15 thrilling days - the Online Game Jam Round and the mysterious Offline Surprise Element Round.<br/> It's like tackling missions, but instead of evading virtual cops, you're navigating through unexpected challenges.
But that's not all! Alongside the coding frenzy, enjoy interactive challenges that'll have you hooked, just like trying to complete a heist without a hitch. Top it off with wisdom from industry pros during engaging speaker sessions.
So fire up your gaming rigs, and get ready to dive into the virtual streets of Genesis. In this gaming universe, every line of code is a twisty turn down the neighborhood, and your creativity is the turbo boost. The clock's ticking, and the joystick beckons - let's make these virtual streets ours!
          </div>
        </div>
      </div>
    </div>
  );
}
