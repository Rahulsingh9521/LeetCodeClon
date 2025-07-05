import allTopics from "@assets/problemSet/allTopicsIcon.svg";
import algorith from "@assets/problemSet/algorithms.svg";
import database from "@assets/problemSet/database.svg";
export function Chips() {
  return (
    <div className="flex flex-wrap gap-2 p-2 justify-center">
      <div className="bg-white w-30 rounded-full text-center">
        <img src={allTopics} alt="All Topics" className="inline-block" />
        <span className="text-black">All Topics</span>
      </div>
      <div className="bg-neutral-700 w-30 text-white rounded-full text-center">
        <img src={algorith} alt="Algorithms" className="inline-block" />
        Algorith
      </div>
      <div className="bg-neutral-700 w-30 text-white rounded-full text-center">
        <img src={database} alt="Database" className="inline-block" />
        Database
      </div>
      <div className="bg-neutral-700 w-30 text-white rounded-full text-center">
        Shell
      </div>
      <div className="bg-neutral-700 w-30 text-white rounded-full text-center">
        Concurrency
      </div>
      <div className="bg-neutral-700 w-30 text-white rounded-full text-center">
        JavaScript
      </div>
    </div>
  );
}
