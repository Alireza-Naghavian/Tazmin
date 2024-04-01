import React, { useState } from 'react'
import Table from '../../../ui/Table';
import { BiSolidDetail } from 'react-icons/bi';
import truncateText from '../../../utils/truncateText';
import Modal from '../../../ui/Modal';
import ChangeUserStatus from './ChangeUserStatus';

function UserRow({user}) {
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
          className: "text-black_base",
        },
      ];
    return (
        <Table.Row cols={"lg:grid-cols-5 "}>
            <td title={user?.name}>{truncateText(user?.name ,18)}</td>
            <td>{user?.role || "----"}</td>
            <td onClick={()=>setIsDetailOpen(true)}><BiSolidDetail  size={24} className='text-gray_base cursor-pointer flex' /></td>
            <td className={`${statusStyles[user?.status].className}`}>{statusStyles[user?.status].label}</td>
            <td><button onClick={()=>setStatusChanger(true)} className='w-full sm:text-base text-sm  px-2 py-1 rounded-lg bg-blue_base text-white'>تغییر وضعیت </button></td>
           {isDetailOpen && <DetailData statusStyles={statusStyles} user={user} setIsDetailOpen={setIsDetailOpen} isDetailOpen={isDetailOpen}/>}
           {statusChanger && <ChangeUserStatus statusChanger={statusChanger} setStatusChanger={setStatusChanger} user={user} userId={user?._id}/>}

        </Table.Row>
        )
}
const DetailData=({user,setIsDetailOpen,isDetailOpen,statusStyles})=>{
    return<Modal modal_Title={`مشخصات کاربر`} isOpen={isDetailOpen} setIsOpen={setIsDetailOpen}>
      <div className="w-full px-2 mt-6 child:w-full flex flex-col gap-y-4 child:font-DanaBold child:text-black_base child:border-b  child:rounded-md  child:pb-2 child:text-sm">
    <span className='flex flex-col  gap-y-2'> 
    <span >نام کاربری:</span>
    <span className='font-Dana'>{user?.name}</span></span>
    <span>ایمیل کاربری: {user?.email}</span>
    <span>شماره موبایل: {user?.phoneNumber || "----"}</span>
    <span> بیوگرافی: {user?.biography || "----"}</span>
    <span> تاریخ عضویت: {new Date(user?.createdAt).toLocaleDateString("Fa-Ir") || "----"}</span>
    <span>
        وضعیت:
        <span className={`${statusStyles[user?.status].className}`}>
        {statusStyles[user?.status].label}</span>
        </span>
      </div>
    </Modal>
}
export default UserRow