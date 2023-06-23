import React from "react";
import { IoCreateOutline, IoPersonAddSharp } from "react-icons/io5";

const header = () => {
  return (
    <div className="flex justify-between mt-1 px-3 py-1 border-b-2 shadow-lg  ">
      <div className="flex">
        <img
          src="./assets/image/headerImage.jfif"
          alt="headerImage"
          height={1}
          width={50}
        />
        <img
          src="./assets/image/headerImage1.png"
          alt="headerImage1"
          width={100}
          height={50}
          className=""
        />
      </div>

      <div className="flex items-center gap-3">
        <button class="bg-blue-500 hover:bg-blue-700 text-[8px] sm:text-[8px] md:text-[8px] lg:text-[12px]   text-white  py-2 px-4 rounded-full ">
          <span className="hidden sm:block">CREATE POST</span>
          <IoCreateOutline className="sm:hidden text-sm" />
        </button>
        <button class="bg-white hover:bg-gray-200 border-[1px] text-[8px] sm:text-[8px]  md:text-[8px] lg:text-[12px] text-gray-500   py-2 px-4 rounded-full">
          <span className="hidden sm:block">SIGN IN</span>{" "}
          <IoPersonAddSharp className="sm:hidden text-sm" />
        </button>

        <img
          src="./assets/image/headerImage2.png"
          alt="headerImage2"
          width={50}
          height={30}
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default header;
