import React, { useState } from "react";
import DropDown_Sort from "../../ui/DropDown_Sort";
import SearchField from "../../ui/SearchField";
import Status_pr_btn from "../../ui/Status_pr_btn";
import useGetAllProjects from "./hooks/useGetAllProject";
import useGetAllCategories from "../../hooks/useGetAllCategories";
import { IoFilterSharp } from "react-icons/io5";
import Button_Sheet from "../../ui/Button_Sheet";
import { useSpring, animated } from "@react-spring/web";
import { IoChevronDown } from "react-icons/io5";
import Pr_Lists from "./Pr_Lists";
import LargeBtn from "../../ui/LargeBtn";
function ProjectLists() {
  const { projects, projectsLoading } = useGetAllProjects();
  const { transformedCategories } = useGetAllCategories();
  const [increment, setIncrement] = useState(4);
  const [openFilter, setOpenFilter] = useState(false);
  if (openFilter) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "unset";
  }
  const filterAnimation = useSpring({
    opacity: 1,
    config: { delay: 0, duration: 300 },
    transform: openFilter ? "translateY(0rem)" : "translateY(100rem)",
  });
  const sortOption = [
    {
      label: "جدیدترین",
      value: "latest",
    },
    {
      label: "قدیمی ترین",
      value: "earliest",
    },
  ];
  const statusOptions = [
    { label: " همه پروژه ها", value: "ALL" },
    { label: "پروژه های باز", value: "OPEN" },
    { label: "پروژه های بسته", value: "CLOSED" },
  ];
  return (
    <div className="container  sm:px-16 px-4  pt-12  pb-9 max-w-[1024px]">
      <div className="flex items-center  md:justify-between justify-around    ">
        <div className="self-end mb-2 md:self-auto">
          <h2 className="md:text-2xl text-lg  font-DanaBold leading-[43px] m-0 text-black_base">
            پروژه ها
          </h2>
        </div>
        <div className="w-2/3 md:hidden mb-2">
          <SearchField filterField={"search"} />
        </div>
      </div>
      <hr className="h-[2px] bg-gray_base/55 w-full " />
      <div className="hidden md:block">
        <div className="w-full lg:flex-nowrap flex-wrap flex gap-x-4">
          <SearchField filterField={"search"} />
          <Status_pr_btn filterField={"status"} options={statusOptions} />
        </div>
        <div className="w-full grid grid-cols-2 gap-x-6 mt-8">
          <DropDown_Sort
            title={"دسته بندی :"}
            filterField={"category"}
            options={[
              { value: "ALL", label: "دسته بندی (همه)" }, ...transformedCategories,]}/>
          <DropDown_Sort
            title={"مرتب سازی بر اساس:"}
            filterField={"sort"}
            options={sortOption}/>
        </div>
      </div>
      <div className="md:mt-24 mt-10 flex md:flex-col  justify-between  md:justify-start items-start md:px-0 px-2 pr-2">
        <span className="text-sm font-DanaMedium mt-2 text-black_base md:text-right text-center pb-4">
          تعداد یافته ها :
          <span className="font-DanaBold text-black">
            {projects && projects.length} پروژه
          </span>
        </span>
        <div className="md:hidden">
          <div
            onClick={() => setOpenFilter(true)}
            className="flex gap-x-4 items-center   py-1 px-2">
            <IoFilterSharp />
            <span> مرتب کردن</span>
          </div>
          {
            <animated.div
              className="bottom-sheet overflow-y-auto"
              style={filterAnimation}>
              <Button_Sheet sheetTitle={"مرتب سازی بر اساس"} setOpenSheet={setOpenFilter}>
                <div className=" w-full">
                  <div className="w-full flex justify-center xs:px-1 sm:px-1.5  gap-x-4">
                    <Status_pr_btn
                      filterField={"status"}
                      options={statusOptions}
                    />
                  </div>
                  <div className="w-full grid sm:grid-cols-2 px-4 sm:gap-y-0 gap-y-6 gap-x-6 mt-8">
                    <DropDown_Sort
                      title={"دسته بندی :"}
                      filterField={"category"}
                      options={[
                        { value: "ALL", label: "دسته بندی (همه)" },
                        ...transformedCategories,
                      ]}
                    />
                    <DropDown_Sort
                      title={"مرتب سازی بر اساس:"}
                      filterField={"sort"}
                      options={sortOption}
                    />
                  </div>
                </div>
                <div
                  onClick={() => setOpenFilter(false)}
                  className="mt-24 px-4 sm:mt-52 pb-8 flex relative w-full sm:child:w-1/2 child:mr-auto  child:mt-auto  mr-auto   xs:mx-auto sm:mx-0 "
                >
                  <LargeBtn bg="bg-blue_base" hover="">
                    اعمال
                  </LargeBtn>
                </div>
              </Button_Sheet>
            </animated.div>
          }
        </div>
        <hr className="h-[2px] bg-gray_base/55 w-full hidden md:block" />
      </div>
      <Pr_Lists
        projectsLoading={projectsLoading}
        increment={increment}
        projects={projects}
      />
      <div className="w-full mt-10 flex justify-center">
        {(projects && projects?.length == increment) ||
        increment > projects?.length ? (
          <span>تمامی پروژه ها نمایش داده شد.</span>
        ) : projects && projects.length !== increment ? (
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
  );
}

export default ProjectLists;
