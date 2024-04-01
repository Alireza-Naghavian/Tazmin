import React from 'react'
import Stats from '../../../ui/Stats'
import { MdOutlineAccountBalanceWallet } from 'react-icons/md'
import useUserList from '../hooks/useUserList'
import { FaUsers } from "react-icons/fa";
import { RiPassValidLine } from "react-icons/ri";
function AdminStat() {
  const {isLoading,users} =  useUserList();
  const acceptedUsers = users && [...users].filter((user)=>user.status === 2)

  return (
    <Stats>
    <div className="grid   sm:grid-cols-3 gap-y-2 sm:gap-y-0 w-full h-full p-4 " >
        <div className="flex gap-x-2 w-full h-full  justify-center flex-col mt-2 font-DanaBold items-center "data-aos="zoom-in" data-aos-delay="400"  data-aos-once="false">
         
        </div>
        <div className="flex gap-x-2 w-full h-full  justify-center flex-col mt-2 font-DanaBold items-center "data-aos="zoom-in" data-aos-delay="600"  data-aos-once="false">
          <div className="flex gap-x-2 w-full h-full  justify-center flex-col mt-2 font-DanaBold items-center ">
            <div className="text-lg font-DanaBold">{users?.length } نفر</div>
            <div className="flex justify-center  items-center gap-x-2">
              <FaUsers  size={28} className="text-zinc-600" />
                     تعداد کل کاربران
            </div>
          </div>
        </div>
        <div className="flex gap-x-2 w-full h-full justify-center flex-col mt-2 font-DanaBold items-center "data-aos="zoom-in" data-aos-delay="800"  data-aos-once="false">
          <div className="flex gap-x-2 w-full h-full  justify-center flex-col mt-2 font-DanaBold items-center ">
            <div className="text-lg font-DanaBold">{acceptedUsers?.length} نفر</div>
            <div className="flex justify-center  items-center gap-x-2">
              <RiPassValidLine   size={28} className="text-zinc-600" />
                تعداد کاربران تایید شده
            </div>
          </div>
        </div>
      </div>
 </Stats>
  )
}

export default AdminStat