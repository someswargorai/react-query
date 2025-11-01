import React from "react";
import { BsCash } from "react-icons/bs";
import { HiOutlineDotsVertical } from "react-icons/hi";

function Card() {
  return (
    <div className="w-80 lg:w-94 border border-gray-500 p-4 rounded-md h-40 shadow-md hover:shadow-lg transition-all duration-300">
      <div className="flex flex-col justify-between h-full">
        {/* Top icons */}
        <div className="flex justify-between items-center text-gray-400">
          <div className="flex justify-center items-center w-[30px] h-[30px] bg-blue-200 rounded-full">
          <BsCash size={20} className="violet-400"/>
          </div>
          <HiOutlineDotsVertical size={20} />
        </div>

        <div>
          <p className="text-gray-400 text-sm mb-1">Total Customers</p>
          <div className="flex justify-between items-center">
            <p className="text-[28px] font-bold">21,877</p>
            <p className="text-green-500 text-sm">+18% <span className="text-white">vs last month</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
