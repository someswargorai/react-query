"use client";

import Image from "next/image";
import Card from "../components/Card";
import TableComponent from "../components/TableComponent";
import { useAppSelector } from "../store/hooks/hooks";


function BookAClass() {

  const {auth}=useAppSelector(state=>state.auth);

  console.log("auth",auth);
  return (
    <div className="p-4 lg:p-6">
      <header className="flex justify-between items-center mb-6">
        <p className="text-[26px] font-bold">Customer Overview</p>

        <div className="flex gap-3 items-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-4 py-2 transition-all duration-300">
            Export
          </button>

          <div className="rounded-full border border-gray-400 overflow-hidden w-10 h-10">
            <Image
              src="/Hero1.png"
              alt="User Avatar"
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
          </div>
        </div>
      </header>

      {/* Cards Grid */}
      <section className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card />
          <Card />
          <Card />
        </div>
      </section>

      {/* table */}
      <TableComponent/>

    </div>
  );
}

export default BookAClass;
