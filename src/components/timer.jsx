import { useEffect, useState } from "react";

const calculateTimeLeft = () => {
  let year = 2024;
  let month = 3;
  let day = 2;

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
      <div className="relative flex justify-center font-[BerlinSans] w-screen z-20 2xs:h-80 md:h-auto md:mb-10">
        <div className="md:flex grid grid-cols-2  m-auto lg:gap-10 xl:gap-16 md:gap-8 gap-10">
          {arr.map((item, index) => {
            return (
              <>
                <div
                  key={index}
                  className="relative flex-col justify-center items-center align-middle text-center w-36 lg:w-52 mt-5 lg:mt-20 md:mt-16 drop-shadow-[0_1.6px_1.6px_rgba(0,0,0,0.8)]"
                >
                  <div
                    key={index + item.value}
                    className="absolute xl:-top-20 md:-top-16 w-28 left-4 lg:left-10 lg:-top-20 xl:left-10  lg:w-32  md:left-4 text-8xl lg:text-9xl xl:text-9xl z-20 text-red-600"
                  >
                    {item.value}
                  </div>

                  <div
                    key={index + item.title}
                    className=" w-full text-4xl lg:text-5xl items-center"
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
