import React from "react";
import HomePageCarousal from "@pjt/components/problemset/HomePageCarousal";
import TopicFilter from "@pjt/components/problemSet/TopicFillter";
import { Chips } from "../components/problemSet/chips";
import LeftSideSection from "@pjt/components/problemSet/LeftSideSection";

function ProblemParent() {
  return (
    <div className="grid grid-cols-[minmax(0,1fr)] md:grid-cols-[200px_1fr] lg:grid-cols-[200px_1fr_260px] h-full overflow-hidden bg-neutral-900 text-white">
      <LeftSideSection />
      <div className="overflow-y-auto p-6">
        {/* upper ProblemParent */}
        <HomePageCarousal />

        {/* topic fillter  */}
        <TopicFilter />

        {/* // topic fillter with chips  */}
        <div className="h-10 flex justify-center items-center text-white">
          <Chips />
        </div>

        <hr />

        {/* problem list ( search,sort, solved, rendom)} */}
        <div className="h-90 border-1 mt-2 flex justify-center items-center text-white">
          <p className="">Problem List</p>
        </div>
      </div>
      <div className="hidden lg:block  bg-neutral-800 p-4">
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
