import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import useGetSingleProject from "../../Freelancer/hooks/useGetSingleProject";
import Loader from "../../../ui/Loader";
import Empty from "../../../ui/Empty";
import Table from "../../../ui/Table";
import ProposalsRow from "./ProposalsRow";
function Review_Proposals() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { project, projectLoading } = useGetSingleProject(id);
  console.log(project);
  if (projectLoading)
    return (
      <div className="w-full lg:col-span-9 col-span-12 flex justify-center items-center relative  row-span-5">
        <div className="z-20 w-full mx-auto flex justify-center absolute">
          <Loader />
        </div>
        <div className=" blur-md bg-gray-300 absolute w-full h-full  z-10"></div>
      </div>
    );
  if (!project.proposals.length)
    return (
      <div
        className="lg:col-span-9 col-span-12  row-span-6
     bg-gray_base/25 max-h-[550px] overflow-y-auto overflow-x-auto
     bg-slate-50 rounded-lg shadow-md w-full px-4 xl:px-20 pb-6"
      >
        <div className="flex col-span-9  w-full gap-x-4 mt-4">
          <button onClick={() => navigate(-1)}>
            <HiArrowRight className="w-5 h-5 text-secondary-500" />
          </button>
          <h1 className="font-DanaBold text-secondary-700 w-full text-lg sm:text-xl">
            لیست درخواست های ({project?.title})
          </h1>
        </div>
        <Empty resourceName={"درخواستی"} />
      </div>
    );
  return (
    <div
      className="lg:col-span-9 col-span-12 lg:order-3 order-2  
   row-span-6 lg:max-h-[550px] max-h-[450px]  
  overflow-y-auto overflow-x-auto bg-slate-50 rounded-lg 
  shadow-md w-full px-4 xl:px-20 pb-6 "
    >
      <div className="flex col-span-9 items-center w-full gap-x-4 mt-2">
        <button onClick={() => navigate(-1)}>
          <HiArrowRight className="w-5 h-5 text-secondary-500" />
        </button>
        <h1 className="font-DanaBold text-secondary-700 w-full text-lg sm:text-xl">
          لیست درخواست های ({project?.title})
        </h1>
      </div>
      {project &&
        project.proposals.map((proposal) => {
          return (
            <Table key={proposal?._id}>
              <Table.Header cols={"grid-cols-4 "}>
                <th>فریلنسر</th>
                <th> جزییات</th>
                <th>وضعیت</th>
                <th>عملیات</th>
              </Table.Header>

              <Table.Body>
             <ProposalsRow  proposal={proposal}/>
              </Table.Body>
            </Table>
          );
        })}
    </div>
  );
}

export default Review_Proposals;
