import React from "react";
import HomePageCarousal from "@pjt/components/problemset/HomePageCarousal";
import TopicFilter from "@pjt/components/problemSet/TopicFillter";
import { Chips } from "../components/problemSet/chips";
import LeftSideSection from "@pjt/components/problemSet/LeftSideSection";
import { ProblemList } from "@pjt/components/problemSet/ProblemList";

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
        <Chips />
        <div className="border-b-[0.5px] border-neutral-200 opacity-50"></div>

        {/* problem list ( search,sort, solved, rendom)} */}
        <ProblemList />
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
