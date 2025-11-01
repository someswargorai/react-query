"use client";

import { useState } from "react";
import { IoFootball } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

const items: { id: number; name: string }[] = [
  { id: 1, name: "How it works" },
  { id: 2, name: "Features" },
  { id: 3, name: "Stats & Reviews" },
  { id: 4, name: "Download" },
];

function Navbar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(true);
  return (
    <div className="p-[25px] sticky top-0 bg-black">
      {/* For Bigger Screens */}
      <div className="hidden md:flex justify-between ">
        <div className="flex gap-2 items-center">
          <IoFootball size={25} className="cursor-pointer"/>
          <span className="text-white text-[20px] font-bold cursor-pointer">Fitness Pro</span>
        </div>

        <div className="flex gap-6 text-gray-400 cursor-pointer">
          <p>How it works</p>
          <p>Features</p>
          <p>Stats & Reviews</p>
          <p>Download</p>
        </div>

        <div className="flex">
          <p className="text-gray-400 cursor-pointer">Theme</p>
        </div>
      </div>

      {/* For Smaller Screens */}
      <div className="md:hidden">
        {hamburgerOpen && (

           <div className="flex gap-2 items-center justify-between"> 
            <GiHamburgerMenu
                size={20}
                className="text-white cursor-pointer"
                onClick={() => setHamburgerOpen(false)}
            />

             <div className="flex gap-2 items-center">
                <IoFootball size={25} />
                <span className="text-white text-[20px] font-bold cursor-pointer">Fitness Pro</span>
            </div>
          </div>
        )}

        {!hamburgerOpen && (
          <div className="relative "> 
         
            <RxCross1 size={25} className="absolute right-4 cursor-pointer" onClick={()=>setHamburgerOpen(true)}/> 

            <div className="flex flex-col gap-10 w-full justify-center items-center min-h-[calc(100vh-50px)]">
                
                {items.map((item: { id: number; name: string }) => (
                <p key={item.id} className="text-xl font-bold hover:text-blue-300 cursor-pointer">{item.name}</p> 
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
