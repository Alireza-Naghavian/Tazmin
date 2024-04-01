import React, { useState } from 'react'
import Table from '../../../ui/Table'
import { BiSolidDetail } from 'react-icons/bi'
import Modal from '../../../ui/Modal';
import ChangeProposalStatus from './ChangeProposalStatus';

function ProposalsRow({proposal}) {
    const [isDetailOpen,setIsDetailOpen] = useState(false)
    const [statusChanger,setStatusChanger] = useState(false)
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
    <Table.Row cols={"lg:grid-cols-4 "}>
    <td title={proposal?.user?.name} className=''>{proposal?.user?.name}</td>
    <td onClick={()=>setIsDetailOpen(true)}><BiSolidDetail  size={24} className='text-gray_base cursor-pointer flex'/></td>
    <td className={`${statusStyles[proposal?.status].className}`}>{statusStyles[proposal?.status].label}</td>
    <td><button onClick={()=>setStatusChanger(true)} className='w-full sm:text-base text-sm  px-2 py-1 rounded-lg bg-blue_base text-white'>تغییر وضعیت </button></td>
   {isDetailOpen && <DetailData proposal={proposal} statusStyles={statusStyles} setIsDetailOpen={setIsDetailOpen} isDetailOpen={isDetailOpen}/>}
    {statusChanger && <ChangeProposalStatus statusChanger={statusChanger} setStatusChanger={setStatusChanger} proposal={proposal}/>}
    </Table.Row>
  )
}
const DetailData=({proposal,setIsDetailOpen,isDetailOpen,statusStyles})=>{
  
    return<Modal modal_Title={`مشخصات درخواست`} isOpen={isDetailOpen} setIsOpen={setIsDetailOpen}>
      <div className="w-full  px-2 mt-6 child:w-full flex flex-col gap-y-4 child:font-DanaBold child:text-black_base child:border-b  child:rounded-md  child:pb-2 child:text-sm">
    <span className='flex flex-col  gap-y-2'> 
    <span >توضیحات درخواست :</span>
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
  

export default ProposalsRow