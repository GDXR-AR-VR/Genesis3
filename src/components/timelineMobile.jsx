const check = (num) => {
  const currentDate = new Date();
  const regStartDate = new Date("2024-02-07");
  const regEndDate = new Date("2024-02-21");
  const round1StartDate = new Date("2024-02-21");
  const round1EndDate = new Date("2024-03-01");
  const round2StartDate = new Date("2024-03-09");
  const round2EndDate = new Date("2024-03-10");
  const result1Date = new Date("2024-03-02");
  const result2Date = new Date("2024-03-10");
  let red = "";
  switch (num) {
    case 1:
      red = "border-t-red-500";
      break;
    case 2:
      red = "border-r-red-500 border-t-red-500 border-b-red-500";
      break;
    case 3:
      red = "border-t-red-500";
      break;
    case 4:
      red = "border-l-red-500";
      break;
    case 5:
      red = "border-b-red-500";
      break;
    default:
      red = "";
  }
  switch (num) {
    case 1:
      return currentDate < regEndDate ? "" : red;
    case 2:
      return currentDate < round1StartDate ? "" : red;
    case 3:
      return currentDate < result1Date ? "" : red;
    case 4:
      return currentDate < round2StartDate ? "" : red;
    case 5:
      return currentDate < result2Date ? "" : red;
    default:
      return "border-blue-500";
  }
};

export default function TimeLineMobileComponent() {
  return (
    <>
      <div className="2xs:h-10 xs:hidden md:h-10 md:block"></div>
      <div className=" md:w-5/12 w-8/12  md:h-96 h-80 justify-center items-center flex-col m-auto font-[BerlinSans]">
        <div
          className={`relative border-white translate-x-6 border-t-4 border-b-4 md:h-32 h-28 ${check(
            1
          )} ${check(2)} border-r-4 rounded-r-full `}
        >
          <p className="text-red-500 absolute xs:-left-2 -left-16 top-3 w-20 text-left font-bold">
            REGISTRATIONS START
          </p>
          <p className="text-red-500 absolute right-7 top-3 text-right font-bold w-28">
            REGISTRATIONS END
          </p>
          <p className="text-white absolute -left-10 -top-10  text-left opacity-80">
            05 FEB 2024
          </p>
          <p className="text-white absolute right-2 -top-10  text-left opacity-80">
            17 FEB 2024
          </p>
          <div className="absolute w-3 h-7 bg-red-500 rounded-sm -top-4"></div>
          <div className="absolute w-3 h-7 bg-red-500 rounded-sm -top-1 right-2 rotate-[40deg]"></div>
        </div>
        <div
          className={`relative -translate-x-8 ${check(5)} ${check(4)} ${check(
            3
          )}  border-white  border-b-4 md:h-32 h-28  border-t-4 -mt-1  border-l-4 rounded-l-full `}
        >
          <p className="text-red-500 absolute left-8 top-1 w-20 text-left font-bold">
            ROUND 1 RESULTS
          </p>
          <p className="text-red-500 absolute -right-8 top-1 text-right font-bold w-28">
            ROUND 1 STARTS
          </p>
          <p className="text-white absolute xs:-left-8 -top-8  text-left  opacity-80">
            02 MAR 2024
          </p>
          <p className="text-white absolute -right-2 -top-10  text-left opacity-80">
            21 FEB 2024
          </p>
          <div className="absolute w-3 h-7 bg-red-500 rounded-sm -bottom-1 left-2 rotate-[50deg]"></div>
          <div className="absolute w-3 h-7 bg-red-500 rounded-sm -top-1 left-2 rotate-[-50deg]"></div>
          <div className="absolute w-3 h-7 bg-red-500 rounded-sm -top-7 -right-8 rotate-[-50deg]"></div>
          <div className="absolute w-3 h-7 bg-red-500 rounded-sm -bottom-4 -right-1"></div>
        </div>
        <p className="text-red-500 absolute md:left-44 left-8  w-20 text-left font-bold">
          ROUND 2 STARTS
        </p>
        <p className="text-red-500 absolute right-24 md:right-60 md:bottom-16 bottom-10 text-right font-bold w-20">
          FINAL RESULTS
        </p>
        <p className="text-white absolute xs:left-20 md:left-56 md:bottom-36 bottom-28 text-left opacity-80">
          09 MAR 2024
        </p>
        <p className="text-white absolute right-16 md:right-60 md:bottom-36 bottom-28 text-left opacity-80">
          10 MAR 2024
        </p>
      </div>
    </>
  );
}
