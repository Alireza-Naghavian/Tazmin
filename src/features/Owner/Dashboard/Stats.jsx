import React from "react";
import { IoDocument } from "react-icons/io5";
import { MdOutlineHandshake } from "react-icons/md";
import { ImNewspaper } from "react-icons/im";
import useGetAllOwnerProjects from "../hooks/useGetAllOwnerProjects";
function Stats() {
  const {projects}= useGetAllOwnerProjects()
  const numberOfProjects = projects.length;
  const numbOfAcceptedProject  =  projects.filter((item)=> item.status === "OPEN").length
  console.log(numbOfAcceptedProject);
 const numOfProposals =  projects.reduce((acc,curr)=> curr.proposals.length + acc ,0)
  return (
  
      <div className="w-full">
        <div className="pt-2 pr-2">
          <h3 className="text-lg font-DanaBold text-black_base">آمار کلی:</h3>
          <p className="font-DanaMedium text-black_base">
            در یک نما خلاصه ای از آمار خود را مشاهده کنید.
          </p>
        </div>
        <div className="grid   sm:grid-cols-3 gap-y-2 sm:gap-y-0 w-full h-full p-4 " >
          <div className="flex gap-x-2 w-full h-full  justify-center flex-col mt-2 font-DanaBold items-center "data-aos="zoom-in" data-aos-delay="400"  data-aos-once="false">
            <div className="text-lg font-DanaBold">{numberOfProjects}</div>
            <div className="flex justify-center  items-center gap-x-2">
              <IoDocument size={28} className="text-zinc-600" />
              مجموع پروژه ها
            </div>
          </div>
          <div className="flex gap-x-2 w-full h-full  justify-center flex-col mt-2 font-DanaBold items-center "data-aos="zoom-in" data-aos-delay="600"  data-aos-once="false">
            <div className="flex gap-x-2 w-full h-full  justify-center flex-col mt-2 font-DanaBold items-center ">
              <div className="text-lg font-DanaBold">{numbOfAcceptedProject}</div>
              <div className="flex justify-center  items-center gap-x-2">
                <MdOutlineHandshake size={28} className="text-zinc-600" />
                پروژه های  جاری
              </div>
            </div>
          </div>
          <div className="flex gap-x-2 w-full h-full justify-center flex-col mt-2 font-DanaBold items-center "data-aos="zoom-in" data-aos-delay="800"  data-aos-once="false">
            <div className="flex gap-x-2 w-full h-full  justify-center flex-col mt-2 font-DanaBold items-center ">
              <div className="text-lg font-DanaBold">{numOfProposals}</div>
              <div className="flex justify-center  items-center gap-x-2">
                <ImNewspaper  size={28} className="text-zinc-600" />
                 درخواست های دریافتی
              </div>
            </div>
          </div>
        </div>
      </div>
   
  );
}

export default Stats;
