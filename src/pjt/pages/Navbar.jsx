import { useState } from "react";
import { InterviewDropDown } from "../components/popUps/InterviewDropDown";
import leetCodeLogo from "@assets/loginPageAssets/leetCode.svg";
import dropDownIcon from "@assets/loginPageAssets/dropDown.svg";
import { StoreDropDown } from "../components/popUps/StoreDropDown";

const Navbar = () => {
  const [isInteviewOpen, setisInteviewOpen] = useState(false);
  const [isStoreOpen, setisStoreOpen] = useState(false);

  const closeIntDropDown = () => {
    setisInteviewOpen(false);
  };

  const closeStoreDropDown = () => {
    setisStoreOpen(false);
  };

  const interviewClick = () => {
    setisInteviewOpen(!isInteviewOpen);
  };

  const storeClick = () => {
    setisStoreOpen(!isInteviewOpen);
  };

  return (
    <div className="bg-white sticky top-0 flex w-full h-[50px] items-center justify-center">
      <a href="/login" className="flex items-center cursor-pointer">
        <img className="w-[30px]" src={leetCodeLogo} />
        <p className="pl-2 font-mono font-bold">Clone</p>
      </a>
      <ul className="relative flex h-full items-center gap-8 ml-10 ">
        <li className="style text-gray-500 hover:text-gray-950 cursor-pointer">
          <a href="/problemset"> Problem </a>
        </li>
        <li className="style text-gray-500 hover:text-gray-950 cursor-pointer">
          Content
        </li>
        <li className="style text-gray-500 hover:text-gray-950 cursor-pointer">
          Discussion
        </li>
        <li className="style text-gray-500 hover:text-gray-950">
          <button
            className="flex gap-1 cursor-pointer"
            onClick={interviewClick}
          >
            Interview
            <img src={dropDownIcon} />
          </button>
          <InterviewDropDown
            isOpen={isInteviewOpen}
            closeDropDown={closeIntDropDown}
          />
        </li>
        <li className="style">
          <button
            onClick={storeClick}
            className="flex gap-1 text-orange-300 hover:text-orange-400 cursor-pointer "
          >
            Store
            <img src={dropDownIcon} />
          </button>
          <StoreDropDown
            isOpen={isStoreOpen}
            closeDropDown={closeStoreDropDown}
          />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
