import Assessment from "@assets/loginPageAssets/mock-assessment.png";
import mockInterview from "@assets/loginPageAssets/online-interview.png";
import { useRef, useState, useEffect } from "react";

export function InterviewDropDown({ isOpen, closeDropDown }) {
  const compRef = useRef(null);

  useEffect(() => {
    // open handle outSide click
    if (!isOpen) return;
    const handleOutSideClick = (event) => {
      if (compRef.current && !compRef.current.contains(event.target)) {
        closeDropDown();
      }
    };

    document.addEventListener("mousedown", handleOutSideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div>
      <ul
        ref={compRef}
        className="
        flex flex-col p-3 absolute 
        gap-3 top-full left-70
        mt-1 group-hover:block bg-white 
        shadow-md rounded-md
        "
      >
        <li className="text-gray-500 hover:text-gray-950 hover:bg-gray-100 cursor-pointer">
          <a className="flex gap-3 justify-center" href="/login">
            <img className="w-[30px] h-[30px]" src={mockInterview} />
            Online Interview
          </a>
        </li>
        <li className="flextext-gray-500 hover:text-gray-950 hover:bg-gray-100 cursor-pointer">
          <a className="flex gap-3" href="/login">
            <img className="w-[30px] h-[30px]" src={Assessment} />
            Assessment
          </a>
        </li>
      </ul>
    </div>
  );
}
