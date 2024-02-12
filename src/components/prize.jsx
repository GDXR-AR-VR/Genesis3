export default function PrizeComponent({
  prize,
  prizeAmount,
  color,
  width,
  height,
  text,
}) {
  return (
    <>
      <div
        className={`font-[Pricedown] rounded-[30px]  ${width} ${height} ${color} flex-col items-center justify-center align-middle mt-5 m-auto drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]`}
      >
        <div className="text-black md:text-5xl  p-2 text-3xl xs:text-4xl m-auto">
          {prize}
          <span className=" align-super text-3xl md:text-4xl"> st</span> Prize
        </div>
        <div className="m-auto h-1 w-5/6 bg-black"></div>
        <div className="text-white text-3xl xs:text-5xl md:text-6xl lg:text-5xl  m-auto flex-col ">
          <p className="drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,1)]">
            Rs {prizeAmount}
          </p>
          <div
            className={`text-gray-800 w-full text-center md:text-lg ${text} font-[BerlinSans] p-2`}
          >
            +Goodies +Certificate
          </div>
        </div>
      </div>
    </>
  );
}
