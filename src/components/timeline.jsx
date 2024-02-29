export const check = (num) => {
  const currentDate = new Date();
  const regStartDate = new Date("2024-02-07");
  const regEndDate = new Date("2024-02-21");
  const round1StartDate = new Date("2024-02-21");
  const round1EndDate = new Date("2024-03-01");
  const round2StartDate = new Date("2024-03-09");
  const round2EndDate = new Date("2024-03-10");
  const result1Date = new Date("2024-03-02");
  const result2Date = new Date("2024-03-10");
  const red = "bg-red-500";
  const white = "bg-slate-100";
  switch (num) {
    case 1:
      return currentDate > regStartDate && currentDate < regEndDate
        ? white
        : red;
    case 2:
      return currentDate < round1EndDate ? white : red;
    case 3:
      return currentDate < round2EndDate ? white : red;
    case 4:
      return currentDate < result1Date ? white : red;
    case 5:
      return currentDate < result2Date ? white : red;
    default:
      return white;
  }
};
export default function TimelineComponent() {
  return (
    <div className="w-full bg-[#00022E] h-[20vh] xl:h-60 lg:h-40 xl:scale-150  font-light xl:-mt-20  z-20 flex flex-col justify-center gap-0 items-center">
      <div className="top flex justify-center items-center w-full gap-14 ">
        <div className="head text-xl text-red-500">
          <p>Registration Start</p>
        </div>
        <div className="head text-lg text-slate-300">
          <p>21 Feb 2024</p>
        </div>
        <div className="head text-xl text-red-500">
          <p>Registration End</p>
        </div>
        <div className="head text-lg text-slate-300">
          <p>02 Mar 2024</p>
        </div>
        <div className="head text-xl text-red-500">
          <p>Round 2 Start</p>
        </div>
        <div className="head text-lg text-slate-300">
          <p>10 March 2024</p>
        </div>
      </div>
      <div className="middle flex justify-center items-center">
        <div
          className="smallbox w-2 h-8
         rounded-sm bg-red-500 "
        ></div>
        <div className={`smallbox w-40 h-2 ${check(1)}`}></div>
        <div className="smallbox w-2 h-8 rounded-sm bg-red-500 "></div>
        <div className={`smallbox w-40 h-2 ${check(2)}`}></div>
        <div className="smallbox w-2 h-8 rounded-sm bg-red-500 "></div>
        <div className={`smallbox w-40 h-2 ${check(3)}`}></div>
        <div className="smallbox w-2 h-8 rounded-sm bg-slate-100 "></div>
        <div className={`smallbox w-40 h-2 ${check(4)}`}></div>
        <div className="smallbox w-2 h-8 rounded-sm bg-slate-100 "></div>
        <div className={`smallbox w-40 h-2 ${check(5)}`}></div>
        <div className="smallbox w-2 h-8 rounded-sm bg-slate-100 "></div>
      </div>
      <div className="top flex justify-center items-center gap-14">
        <div className="head text-lg text-slate-300">
          <p>07 Feb 2024</p>
        </div>
        <div className="head text-xl text-red-500">
          <p>Round 1 Start</p>
        </div>
        <div className="head text-lg text-slate-300">
          <p>01 Mar 2024</p>
        </div>
        <div className="head text-xl text-red-500">
          <p>Round 1 Results</p>
        </div>
        <div className="head text-lg text-slate-300">
          <p>09 March 2024</p>
        </div>
        <div className="head text-xl text-red-500">
          <p>Final Results</p>
        </div>
      </div>
    </div>
  );
}
