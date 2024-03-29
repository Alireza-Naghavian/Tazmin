import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import useGetSingleProject from './hooks/useGetSingleProject';
import { BsArrowLeft } from "react-icons/bs";
import { IoChevronDown, IoTimeOutline } from "react-icons/io5";
import { BiMessageSquareEdit } from "react-icons/bi";
import ProjectOverView from './ProjectOverView';
function SingleProjectData() {
  const {id}= useParams();
  const {project} = useGetSingleProject(id)
  console.log(project);
  const [increment, setIncrement] = useState(3);
  return (
    <div className='container  sm:px-16 px-4  pt-12  pb-9 '>
      <div className="w-full my-0 mx-auto max-w-[1200px] relative bg-white rounded-lg shadow-md border-t-8 border-t-blue_base ">
      <ProjectOverView project={project}/>
      </div>
      <div className="max-w-[1366px] mt-20 w-full flex flex-col">
        <h4 className='text-xl font-DanaBold text-black_base'>
          فریلنسر هایی که به این پروژه پیشنهاد ارسال کرده اند:
        </h4>
        <div className="grid grid-cols-3 gap-x-4 px-8 ">
          {project?.proposals.slice(0,increment).map((proposal)=>{
            return(
              <div key={proposal?._id} className='flex flex-col gap-y-6  mt-12 bg-gray-100/40 py-2   rounded-lg'>
                {/* freelancer header */}
              <div className="flex flex-col gap-y-2 px-10 ">
              <img src="../../logo/user.jpg" className='mx-auto h-20 rounded-full' alt="freelancer-image" />
              <span className='text-center font-DanaMedium text-black_base '>{proposal?.user?.name}</span>
              </div>
                   {/* freelancer footer */}  
                   <div className=" py-4 border-t  border-t-blue_base/50 w-[90%] mx-auto  flex justify-between   rounded-b-lg">
                      <div className="flex gap-x-1 items-center">
                      <IoTimeOutline size={18}/>
                    <span className='text-xs mt-[2px]'>زمان تحویل:
                  <span className='font-DanaBold text-black_base'>{proposal?.duration}</span>
                  <span className='font-DanaBold text-black_base'> روز </span>
                    </span>
                      </div>
                      <div className="flex gap-x-1 items-center">
                      <BiMessageSquareEdit  size={18}/>
                    <span className='text-xs mt-[2px]'> تاریخ ارسال:
                  <span className='font-DanaBold text-black_base'>{new Date(proposal?.createdAt).toLocaleDateString("Fa-Ir")}</span>
                    </span>
                      </div>
                   </div>
                   
              </div>
            )
          })}
        <div className='col-span-3 mx-auto mt-8' >
        {  !project?.proposals?.length ?  <span>پیشنهادی برای این پروژه ارسال نشده است.</span> : 
         (project?.proposals && project?.proposals?.length == increment) ||
        increment > project?.proposals?.length ? (
          <span >تمامی درخواست ها نمایش داده شد.</span>
        ) : project?.proposals && project?.proposals?.length !== increment ? (
          <button
            onClick={() => setIncrement((prev) => prev + 3)}
            className="w-fit flex justify-center items-center gap-x-2 px-6 py-2 bg-blue_base text-xl rounded-xl text-white"
          >
            مشاهده بیشتر
            <IoChevronDown />
          </button>
        ) : (
          ""
        )}
        </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProjectData