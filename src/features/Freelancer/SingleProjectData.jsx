import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import useGetSingleProject from './hooks/useGetSingleProject';
import { BsArrowLeft } from "react-icons/bs";
import { IoChevronDown, IoTimeOutline } from "react-icons/io5";
import { BiMessageSquareEdit } from "react-icons/bi";
import ProjectOverView from './ProjectOverView';
import { animated, useSpring } from '@react-spring/web';
import Button_Sheet from '../../ui/Button_Sheet';
import Send_req_form from './Send_req_form';
function SingleProjectData() {
  const {id}= useParams();
  const {project} = useGetSingleProject(id)
  const [increment, setIncrement] = useState(3);
  const [openForm, setOpenForm] = useState(false);
  if (openForm) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "unset";
  }
  const filterAnimation = useSpring({
    opacity: 1,
    config: { delay: 0, duration: 300 },
    transform: openForm ? "translateY(0rem)" : "translateY(100rem)",
  });
  return (
    <div className=' relative  pt-12  pb-9 '>
      <div className="sm:px-14 px-4 ">
      <div className="w-full my-0 mx-auto max-w-[1200px] relative bg-white rounded-lg shadow-md border-t-8 border-t-blue_base ">
      <ProjectOverView project={project}/>
      </div>
      <div className="max-w-[1366px] mt-20 w-full flex flex-col">
        <h4 className='text-xl font-DanaBold text-black_base'>
          فریلنسر هایی که به این پروژه پیشنهاد ارسال کرده اند:
        </h4>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-4 md:px-8 sm:px-6">
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
   
        </div>
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
      {/* sm send req btn fixed*/}
          <div  className="md:hidden w-screen fixed bottom-0 min-h-[60px] z-40 bg-blue_base">
            <button onClick={()=>setOpenForm(true)} className='w-full h-full mx-auto text-center text-white font-DanaBold items-center justify-center absolute my-auto flex gap-x-2'>
              ثبت پیشنهاد
              <BsArrowLeft size={32}/>
            </button>
          </div>
      
        {  
            <animated.div
              className="bottom-sheet overflow-y-auto bg-white h-screen z-50"
              style={filterAnimation}
            >
              <Button_Sheet setOpenSheet={setOpenForm} sheetTitle={"ارسال پیشنهاد"}>
             <Send_req_form projectId={project?._id} setIsOpen={setOpenForm}/>
              </Button_Sheet>
            </animated.div>
          }
     
    </div>
  )
}

export default SingleProjectData