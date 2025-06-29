import { useRef, useState, useEffect } from "react";

export function StoreDropDown({ isOpen, closeDropDown }) {
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
          flex flex-col p-4 absolute 
          gap-3 top-full left-100
          mt-1 group-hover:block bg-white 
          shadow-md rounded-md
        "
      >
        <li className="text-orange-300 hover:text-orange-400 cursor-pointer">
          <a className="flex gap-3" href="store">
            Redeem
          </a>
        </li>
        <li className="text-orange-300 hover:text-orange-400 cursor-pointer">
          <a className="flex gap-3" href="premium">
            Premium
          </a>
        </li>
      </ul>
    </div>
  );
}
