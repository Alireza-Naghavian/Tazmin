import React, { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import Modal from "../../ui/Modal";
import Send_req_form from "./Send_req_form";
import { toast } from "react-toastify";
import Text_loader from "../../ui/Text_loader";

function ProjectOverView({ project, projectLoading }) {
  const [isOpen, setIsOpen] = useState(false);
  const filterProposals = project?.proposals.filter(
    (proposal) => proposal?.status === 2
  );
  const clickHandler = () => {
    if (filterProposals && filterProposals?.length) {
      return toast.error("پروژه واگذار شده است.");
    }
    if (project?.status === "CLOSED") {
      return toast.error("پروژه توسط کارفرما بسته شده است.");
    } else {
      return setIsOpen(true);
    }
  };
  return (
    <div className="overview md:min-h-[400px] min-h-[250px] ">
      {projectLoading ? (
        <Text_loader loadingCondition={projectLoading} className={"mt-2 mr-2"} />
      ) : (
        <div>
          <div className="flex flex-col gap-y-5 sm:px-12 px-6 py-8 md:py-[56px] ">
            {/*overview header */}
            <div className="flex flex-col items-start gap-y-2">
              {filterProposals && filterProposals.length ? (
                <span className="text-white bg-error px-2 py-1 rounded-lg text-sm">
                  پروژه واگذار شده
                </span>
              ) : (
                <span
                  className={`px-2 py-1 rounded-lg text-sm ${
                    project?.status === "OPEN" ? "bg-blue_base" : "bg-error"
                  } text-white`}
                >
                  {project?.status === "OPEN" ? "پروژه باز" : "پروژه بسته"}
                </span>
              )}
              <h2 className="text-start mt-4 font-DanaBold text-2xl text-black_base ">
                {project?.title}
              </h2>
            </div>
            {/* owner data  & category title*/}
            <div className=" flex flex-wrap gap-y-4 sm:gap-y-0 gap-x-2 items-center ">
              <span className="text-gray_base text-sm font-DanaMedium ">
                ایجاد شده توسط{" "}
              </span>
              <span className="flex gap-x-2 items-center">
                <img
                  src="../../logo/user.jpg"
                  className="w-6 h-6 object-cover"
                  alt=""
                />
                <span className="font-DanaBold border-l pl-2 border-l-gray_base/55 text-black_base mt-1">
                  {project?.owner?.name}
                </span>
              </span>
              <span className="flex gap-x-2 items-center">
                <span className="font-DanaMedium text-gray_base">
                  {project?.category?.title}
                </span>
              </span>
            </div>
            {/* project description */}
            <div className="mt-2 whitespace-break-spaces w-full text-gray_base ">
              {project?.description}
            </div>
            {/* tags */}
            <div className="flex gap-y-4  flex-col ">
              <span className="text-black_base text-sm font-DanaMedium">
                مهارت ها :
              </span>
              <div className="flex gap-x-4 gap-y-4  flex-wrap ">
                {project?.tags.map((tag) => {
                  return (
                    <span
                      className="pr-2 md:text-sm text-xs text-gray_base px-2 py-1 border rounded-lg border-gray_base/55 my-auto"
                      key={tag}
                    >
                      {tag}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>

          {/* overview footer */}
          <div className="  h-full   w-full hidden md:flex bg-gray-200/55 rounded-b-lg    gap-x-6">
            <div className=" flex gap-x-6 px-12 py-6">
              <div className="flex flex-col gap-y-4">
                <span className="-mt-4">حداکثر تاریخ برای ارسال پیشنهاد :</span>
                <span className="font-DanaBold text-lg  ">
                  {new Date(project?.deadline).toLocaleDateString("Fa-Ir")}
                </span>
              </div>
              <div className="flex flex-col gap-y-4">
                <span className="-mt-4 text-nowrap"> بودجه کارفرما:</span>
                <span className="font-DanaBold text-lg  ">
                  {project?.budget?.toLocaleString()} تومان
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
              <div className="w-full hidden md:block rounded-bl-lg  h-full">
                <button
                  onClick={() => clickHandler()}
                  className="bg-blue_base/65  hover:bg-blue_base 
             tr-300 rounded-bl-lg lg:px-12 px-8 text-lg
             flex gap-x-2 items-center text-white lg:w-full w-[210px] h-full"
                >
                  <span>ارسال پیشنهاد</span>
                  <BsArrowLeft size={32} />
                </button>
                {isOpen && (
                  <Modal
                    isOpen={isOpen}
                    max_w="max-w-3xl"
                    setIsOpen={setIsOpen}
                    modal_Title={"ارسال پیشنهاد"}
                  >
                    <Send_req_form
                      setIsOpen={setIsOpen}
                      project={project}
                      projectId={project?._id}
                    />
                  </Modal>
                )}
              </div>
            </div>
          </div>
          {/* sm device footer */}
          <div className="  md:hidden px-12  mx-auto  w-[90%] border-t border-t-gray_base/55">
            <div className="flex flex-wrap gap-y-4 sm:gap-y-0 justify-between w-full">
              <div className="flex  flex-col pt-4 gap-y-2">
                <span className="">حداکثر تاریخ برای ارسال پیشنهاد :</span>
                <span className="font-DanaBold text-lg  ">
                  {new Date(project?.deadline).toLocaleDateString("Fa-Ir")}
                </span>
              </div>
              <span className="flex items-center gap-x-2 justify-center ">
                <span className="text-black_base font-DanaMedium text-lg">
                  پیشنهادها:
                </span>
                <span className="text-black_base font-DanaMedium text-lg text-left">
                  {project?.proposals?.length}
                </span>
              </span>
            </div>
          </div>
          <div className="mt-8 md:hidden w-full px-6 py-4 flex justify-between bg-gray-200/55 h-full">
            <span className="">بودجه کارفرما :</span>
            <span className="font-DanaBold text-lg  ">
              {project?.budget?.toLocaleString()} تومان
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectOverView;
