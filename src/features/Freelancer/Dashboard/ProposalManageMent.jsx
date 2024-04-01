import React from "react";
import useGatAllProposal from "../hooks/useGetAllProposal";
import Empty from "../../../ui/Empty";
import { useNavigate } from "react-router-dom";
import Loader from "../../../ui/Loader";
import { FaArrowLeftLong } from "react-icons/fa6";
import Table from "../../../ui/Table";
import FreelanceProposalRow from "./FreelanceProposalRow";
function ProposalManageMent() {
  const navigate = useNavigate();
  const {proposalLoading,proposals} =  useGatAllProposal();
  if (proposalLoading)
    return (
      <div className="w-full lg:col-span-9 col-span-12 flex justify-center items-center relative  row-span-5">
        <div className="z-20 w-full mx-auto flex justify-center absolute">
          <Loader />
        </div>
        <div className=" blur-md bg-gray-300 absolute w-full h-full  z-10"></div>
      </div>
    );
  if (!proposals.length)
    return (
      <div className="lg:col-span-9 col-span-12  row-span-6 bg-gray_base/25 max-h-[550px] overflow-y-auto overflow-x-auto bg-slate-50 rounded-lg shadow-md w-full px-4 xl:px-20 pb-6">
        <div className="flex justify-end   ml-0  mt-6">
          <button
            onClick={() => navigate("/freelancer/projectLists")}
            className="rounded-lg  w-full sm:w-auto bg-cyan-500 tr-300 hover:bg-blue_base px-2 py-2 flex justify-center sm:justify-normal  items-center gap-x-2 text-white"
          >
              رفتن به صفحه پروژه ها
            <FaArrowLeftLong  color="white" />
          </button>
        </div>
        <Empty resourceName={"پیشنهادی "} />
      </div>
    );
  return (
    <div className="lg:col-span-9 col-span-12 lg:order-3 order-2   row-span-6 lg:max-h-[550px] max-h-[450px]  overflow-y-auto overflow-x-auto bg-slate-50 rounded-lg shadow-md w-full px-4 xl:px-20 pb-6 ">
      <div className="flex justify-end  ml-0  mt-6">
        <button
          onClick={() => navigate("/freelancer/projectLists")}
          className="rounded-lg w-full sm:w-auto  bg-cyan-500 tr-300 hover:bg-blue_base px-2 py-2 flex justify-center sm:justify-normal items-center gap-x-2 text-white"
        >
              رفتن به صفحه پروژه ها
          <FaArrowLeftLong  color="white" />
        </button>
      </div>
      {proposals &&
        proposals.map((proposal) => {
          return (
            <Table key={proposal?._id}>
              <Table.Header cols={"grid-cols-5 "}>
                <th>توضیحات</th>
                <th>مدت زمان</th>
                <th>مبلغ پیشنهادی</th>
                <th> جزییات</th>
                <th>وضعیت</th>
              </Table.Header>

              <Table.Body>
              <FreelanceProposalRow proposal={proposal}/>
              </Table.Body>
            </Table>
          );
        })}
    </div>
  );
}

export default ProposalManageMent;
