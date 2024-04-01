import React from "react";
import truncateText from "../../utils/truncateText";
import { Link } from "react-router-dom";
import { MdAvTimer } from "react-icons/md";
import { BsCardText } from "react-icons/bs";
import { BiWallet } from "react-icons/bi";
import LargeBtn from "../../ui/LargeBtn";
import { GrStatusInfo } from "react-icons/gr";
import Circle_loader from "../../ui/Circle_loader";
import Empty from "../../ui/Empty";

function Pr_Lists({ projects ,projectsLoading,increment}) {
  return (
    <div>
      {projects && projects.length ? (
        projects.slice(0,increment).map((project) => {
          console.log(project);
          return (
            <div
              key={project._id}
              className="mt-10 border border-blue_base rounded-lg  py-5  overflow-hidden w-full px-[22px]"
            >
              <div className="flex md:flex-row flex-col gap-8 justify-between">
                <div className="flex flex-col gap-4">
                  {/* project title */}
                  <Link to={project?._id} className="text-blue_base font-DanaMedium text-lg w-fit cursor-pointer">
                    {project?.title}
                  </Link>
                  {/* project desc */}
                  <div className="font-Dana hidden sm:block text-gray_base leading-7 text-sm">
                    {truncateText(project?.description, 200)}
                  </div>
                  {/* mobile version */}
                  <div className="font-Dana block sm:hidden text-gray_base leading-7 text-sm">
                    {truncateText(project?.description, 100)}
                  </div>
                  {/* project tags */}
                  <div className="flex items-center flex-wrap gap-2 ">
                    <div className="flex items-center  gap-x-4 flex-wrap">
                      <span className="text-gray_base text-xs leading-6 font-Dana">
                        مهارت ها :
                      </span>
                      {project?.tags.slice(0, 4).map((tag) => {
                        return (
                          <span
                            key={tag}
                            className="font-DanaMedium text-gray_base m-0 text-xs leading-6"
                          >
                            {tag}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="md:min-w-max flex md:flex-nowrap flex-wrap gap-x-6 md:flex-col gap-2 w-[220px] flex-shrink-0">
                  <div className="flex gap-x-2 ">
                    <MdAvTimer size={22} className="text-blue_base" />
                    <span className="font-DanaBold leading-7 text-gray_base">
                      {new Date(project?.deadline).toLocaleDateString("Fa-Ir")}
                    </span>
                  </div>
                  <div className="flex gap-x-2 ">
                    <BsCardText size={22} className="text-blue_base" />
                    <span className="font-DanaBold leading-7 text-gray_base">
                      {project?.category.title}
                    </span>
                  </div>
                  <div className="flex gap-x-2 ">
                    <GrStatusInfo  size={22} className="text-blue_base" />
                    <span className={`font-DanaBold  leading-7 ${project?.status === "OPEN" ? "text-black_base": project?.status === "CLOSED " ? "text-error" : "text-error"} `}>
                    {project?.status === "OPEN" ? "پروژه باز": "پروژه بسته" }
                    </span>
                  </div>
                  <div className="flex gap-x-2 ">
                    <BiWallet size={22} className="text-blue_base" />
                    <span className="font-DanaBold leading-7 text-gray_base">
                      {project?.budget.toLocaleString()} تومان
                    </span>
                  </div>
                  <div className="mt-auto hidden md:block ">
                    <Link to={project?._id}>
                      <LargeBtn py="py-2" type={"button"}>
                        مشاهده پروژه
                      </LargeBtn>
                    </Link>
                  </div>
                </div>
                <div className="mt-auto block md:hidden z-50 ">
                    <Link to={project?._id}>
                      <LargeBtn py="py-2" type={"button"}>
                        مشاهده پروژه
                      </LargeBtn>
                    </Link>
                  </div>
              </div>
            </div>
          );
        })
      ) : projectsLoading ? (
        <div className="flex items-center mt-6 text-gray_base">
          <Circle_loader color="rgb(95 100 104)" width="42" height="22" />
          در حال بارگزاری ...
        </div>
      ) : (
        <div>
          <Empty resourceName={"پروژه ای"} />
        </div>
      )}
    </div>
  );
}

export default Pr_Lists;
