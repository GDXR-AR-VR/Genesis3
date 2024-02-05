import { useEffect, useState } from "react";

const calculateTimeLeft = () => {
  let year = 2024;
  let month = 2;
  let day = 15;

  const difference = +new Date(`${year}-${month}-${day}`) - +new Date();

  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

export default function Counter() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const arr = [
    { value: timeLeft.days, title: "Days" },
    { value: timeLeft.hours, title: "Hours" },
    { value: timeLeft.minutes, title: "Minutes" },
    { value: timeLeft.seconds, title: "Seconds" },
  ];
  useEffect(() => {
    setTimeout(() => setTimeLeft(calculateTimeLeft()), 1000);
  }, [timeLeft]);

  return (
    <>
      <div className="relative flex justify-center font-[BerlinSans] w-screen z-20">
        <div className="flex m-auto lg:gap-10 xl:gap-16 gap-8">
          {arr.map((item, index) => {
            return (
              <>
                <div
                  key={index}
                  className="flex-col text-center w-30 lg:w-52 h-40 drop-shadow-[0_1.6px_1.6px_rgba(0,0,0,0.8)]"
                >
                  <div
                    key={index + item.value}
                    className=" text-5xl lg:text-7xl xl:text-8xl z-10 text-red-600 "
                  >
                    {item.value}
                  </div>

                  <div
                    key={index + item.title}
                    className="text-3xl lg:text-5xl top-24 items-center"
                  >
                    {item.title}
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
