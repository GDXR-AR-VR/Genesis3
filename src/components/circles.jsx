export default function Circles() {
  return (
    <>
      <div className="m-auto rounded-[100%] border-[10px] border-pink-400 w-[400px] h-[400px] flex justify-center align-middle items-center">
        <div className="rounded-[100%] w-[320px] h-[320px] bg-pink-200 flex justify-center align-middle items-center ">
          <div className="rounded-[100%] w-[290px] h-[290px] bg-pink-300 flex justify-center align-middle items-center">
            <div className="rounded-full w-[260px] h-[260px] bg-pink-400 flex justify-center align-middle items-center">
              <div className="rounded-full w-[230px] h-[230px] bg-pink-500"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
