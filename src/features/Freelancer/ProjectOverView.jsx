import React from 'react'
import { BsArrowLeft } from 'react-icons/bs'

function ProjectOverView({project}) {
  return (
     
    <div className="overview  ">
    <div className="flex flex-col gap-y-5 px-12  py-[56px] ">
      {/*overview header */}
      <div className="flex flex-col items-start gap-y-2">
        <span className={`px-2 py-1 rounded-lg text-sm ${project?.status === "OPEN" ? "bg-blue_base" : "bg-error"} text-white`}>
          {project?.status === "OPEN" ? "پروژه باز" : "پروژه بسته"}
          </span>
        <h2 className='text-start mt-4 font-DanaBold text-2xl text-black_base '>{project?.title}</h2>
      </div>
      {/* owner data  & category title*/}
      <div className=" flex gap-x-2 items-center ">
        <span className="text-gray_base text-sm font-DanaMedium ">ایجاد شده توسط </span>
        <span className='flex gap-x-2 items-center'>
          <img src="../../logo/user.jpg" className='w-6 h-6 object-cover' alt="" />
          <span className='font-DanaBold border-l pl-2 border-l-gray_base/55 text-black_base mt-1'>{project?.owner?.name}</span>
        </span>
        <span className="flex gap-x-2 items-center">
          <span className='font-DanaMedium text-gray_base'>{project?.category?.title}</span>
        </span>
      </div>
      {/* project description */}
      <div className="mt-2 whitespace-break-spaces w-full text-gray_base ">
      {project?.description}
      </div>
      {/* tags */}
      <div className="flex gap-y-4  flex-col ">
        <span className='text-black_base text-sm font-DanaMedium'>مهارت ها :</span>
        <div className="flex gap-x-4  flex-wrap ">
          {project?.tags.map(tag=>{
            return(
              <span className='pr-2 text-sm text-gray_base px-2 py-1 border rounded-lg border-gray_base/55 my-auto' key={tag}>{tag}</span>
            )
          })}
        </div>
      </div>
    </div>
      {/* overview footer */}
      <div className="  h-full  w-full bg-gray-200/55 rounded-b-lg  flex  gap-x-6">
        <div className=" flex gap-x-6 px-12 py-6">
        <div className="flex flex-col gap-y-4">
          <span className='-mt-4'>حداکثر تاریخ برای ارسال پیشنهاد :</span>
          <span className='font-DanaBold text-lg  '>
            {new Date(project?.deadline).toLocaleDateString("Fa-Ir")}
          </span>
        </div>
        <div className="flex flex-col gap-y-4">
          <span className='-mt-4'> بودجه کارفرما:</span>
          <span className='font-DanaBold text-lg  '>
            {(project?.budget)?.toLocaleString()} تومان
          </span>
        </div>
        </div>
        <div className=" mr-auto flex gap-x-10">
          {/* project proposals */}
          <span className="flex flex-col justify-center gap-y-2">
            <span className="text-black_base font-DanaMedium text-lg">
              پیشنهادها:
            </span>
            <span className="text-black_base font-DanaMedium text-lg text-left">
              {project?.proposals?.length}
            </span>
            
          </span>
          {/* send request btn */}
          <div className="w-full rounded-bl-lg  h-full">
            <button className='bg-blue_base/65  hover:bg-blue_base 
             tr-300 rounded-bl-lg px-12 text-lg
             flex gap-x-2 items-center text-white w-full h-full'>
            <span>ارسال پیشنهاد</span>
            <BsArrowLeft size={32} />
            </button>
          </div>
        </div>
      </div>
  </div>
  )
}

export default ProjectOverView