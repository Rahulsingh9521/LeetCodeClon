import { problems } from "@pjt/components/utilits/problemList";

export function ProblemList() {
  return (
    <div className="flex flex-col gap-3">
      {problems.map((problem) => (
        <a
          key={problem.id}
          className="flex flex-col px-1 rounded-lg even:bg-neutral-700"
          href={`/problem/${problem.id}`}
        >
          <div className="flex h-[44px] items-center">
            <div className="px-2">✅</div>
            <div className="relative flex h-full w-full cursor-pointer items-center">
              <div className="px-2">{problem.id}.</div>
              <p className="flex flex-1 w-0 font-bold">{problem.title}</p>
              <div className="flex w-[70px] items-center justify-center opacity-70">
                {problem.acceptance}
              </div>
              <div
                className={` mx-0 px-2 py-1
                ${problem.difficulty == "Med." ? "text-orange-300" : ""}
                ${problem.difficulty == "Hard" ? "text-red-500" : ""}
                ${problem.difficulty == "Easy" ? "text-green-500" : ""}
                `}
              >
                {problem.difficulty}
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
