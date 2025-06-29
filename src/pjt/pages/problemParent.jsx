import React from "react";
import HomePageCarousal from "@pjt/components/problemset/HomePageCarousal";
import TopicFilter from "@pjt/components/problemSet/TopicFillter";

function ProblemParent() {
  return (
    <div className="flex h-full w-full bg-neutral-800 text-white">
      <div className="w-3/4 h-full">
        {/* upper ProblemParent */}
        <HomePageCarousal />

        {/* topic fillter  */}
        <TopicFilter />

        {/* // topic fillter with chips  */}
        <div className="h-10 border-1 flex justify-center items-center text-white">
          <p className="">topic fillter with chips</p>
        </div>
        {/* problem list ( search,sort, solved, rendom)} */}
        <div className="h-90 border-1 mt-2 flex justify-center items-center text-white">
          <p className="">Problem List</p>
        </div>
      </div>
      <div className="border-l-1 flex flex-col gap-1 f-full w-1/4">
        <div className="h-1/2 border-3 rounded border-indigo-500 mt-3">
          Calender
        </div>
        <div className="h-1/2 border-3 rounded border-indigo-500 ">
          Company filter
        </div>
      </div>
    </div>
  );
}

export default ProblemParent;
