import leftSideSliderIcon from "@assets/problemSet/leftSideSliderIcon.svg";

export default function LeftSideSection() {
  return (
    <div className="bg-neutral-800 p-4 transition-transform md:static md:translate-x-0 hidden md:block border-red-100">
      <div className="flex flex-col gap-1">
        <div className="h-10 rounded select-none text-lg hover:bg-neutral-500 font-semibold py-2">
          Library
        </div>
        <div className="h-10 rounded select-none text-lg hover:bg-neutral-500 font-semibold py-2">
          Study Plan
        </div>
        <div className="border-b-1 border-stone-50 opacity-50 my-1 h-[1px] w-full mt-5" />
        <div className="">My List</div>
      </div>
      <div className="group absolute -right-1 top-0 h-full w-3">
        <div className="flex h-full items-center justify-center transition-all w-full !cursor-ew-resize">
          <div className="h-full w-1 group-hover:bg-blue-400 "></div>
        </div>
        <div className="bg-white hover:bg-blue-400 absolute -left-1 top-6 scale-0 transform cursor-pointer rounded-full border p-1 opacity-0 transition-all duration-300 ease-in-out group-hover:scale-100 group-hover:opacity-100">
          <div className="relative w-3">
            <img className="w-3" src={leftSideSliderIcon} />
          </div>
        </div>
        {/* <div className="relative cursor-pointer rounded-full ">*</div> */}
      </div>
    </div>
  );
}
