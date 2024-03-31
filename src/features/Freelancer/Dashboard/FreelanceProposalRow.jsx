import React, { useState } from 'react'
import truncateText from '../../../utils/truncateText'
import { BiSolidDetail } from "react-icons/bi"
import { FaFileContract } from 'react-icons/fa'
import Table from '../../../ui/Table'
import Modal from '../../../ui/Modal'
function FreelanceProposalRow({proposal}) {
    const [isDetailOpen,setIsDetailOpen] = useState(false)
    const statusStyles = [
        {
          label: "رد شده",
          className: "badge--danger",
        },
        {
            label: "در انتظار تایید",
            className: "badge--primary",
        },
        {
          label: "تایید شده",
          className: "badge--success",
        },
      ];
    return (
        <Table.Row cols={"lg:grid-cols-5 "}>
            <td title={proposal?.description} className=' '>{truncateText(proposal?.description ,18)}</td>
            <td>{proposal?.duration || "----"} روز</td>
            <td>{proposal?.price.toLocaleString()  || "----"} تومان</td>
            <td onClick={()=>setIsDetailOpen(true)}><BiSolidDetail  size={24} className='text-gray_base cursor-pointer flex' /></td>
            <td className={`${statusStyles[proposal?.status].className}`}>{statusStyles[proposal?.status].label}</td>
      
           {isDetailOpen && <DetailData statusStyles={statusStyles} proposal={proposal} setIsDetailOpen={setIsDetailOpen} isDetailOpen={isDetailOpen}/>}
        </Table.Row>
        )
}
const DetailData=({proposal,setIsDetailOpen,isDetailOpen,statusStyles})=>{
  
    return<Modal modal_Title={`مشخصات درخواست`} isOpen={isDetailOpen} setIsOpen={setIsDetailOpen}>
      <div className="w-full px-2 mt-6 child:w-full flex flex-col gap-y-4 child:font-DanaBold child:text-black_base child:border-b  child:rounded-md  child:pb-2 child:text-sm">
    <span className='flex flex-col  gap-y-2'> 
    <span >توضیحات پروژه :</span>
    <span className='font-Dana'>{proposal.description}</span></span>
    <span>بودجه درخواست : {proposal.price.toLocaleString()} تومان</span>
    <span>مدت زمان پیشنهادی : {proposal.duration || "----"} روز</span>
    <span>
        وضعیت:
        <span className={`${statusStyles[proposal?.status].className}`}>
        {statusStyles[proposal?.status].label}</span>
        </span>
      </div>
    </Modal>
  }
  

export default FreelanceProposalRow