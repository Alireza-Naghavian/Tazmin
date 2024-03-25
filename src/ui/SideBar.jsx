import React, { useState } from "react";
import useUser from "../hooks/useUser";
import { FaRegEdit } from "react-icons/fa";
import { RiLogoutBoxLine } from "react-icons/ri";
import Modal from "./Modal";
import Valid_text_field from "./Valid_text_field";
import { useForm } from "react-hook-form";
import UserEditData from "../features/Authorization/UserEditData";
import Loader from "./Loader";
import LogOut from "../features/Authorization/LogOut";

function SideBar() {
  const { isUserLoading, user } = useUser();
  let [isOpen, setIsOpen] = useState(false);
  let [isLogoutOpen,setIsLogoutOpen]  = useState(false)
  const userValue ={
    name:user?.name,
    email:user?.email,
    biography:user?.biography
  }
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({defaultValues:userValue});
  const statusStyles = [
    {
      labal: "رد شده",
      style: "text-error",
    },
    {
      labal: "در انتظار تایید",
      style: "text-secondary-900",
    },
    {
      labal: "تایید شده",
      style: "text-green-500",
    },
  ];
  return (
    <div className={`shadow-md bg-gray_base/10 w-full h-full rounded-xl flex flex-col  pt-10 px-7 pb-6 ${isUserLoading ? "  z-50 blur-sm":"" }`}>
      <div className="flex flex-col ">
        <img
          src="/logo/user.jpg"
          className="object-cover rounded-full w-1/2 mx-auto h-fit"
          alt=""
        />
        <span className="text-center mt-4 text-blue-500 font-DanaBold">
          {user?.name}
        </span>
      </div>
      <div className=" mt-8 flex flex-col space-y-4 bg-slate-50 py-4 px-2 rounded-md">
        <span className="font-DanaMedium text-gray_base truncate">
          ایمیل: {user?.email}
        </span>
        <span className="font-DanaMedium  text-gray_base  truncate">
          نقش:{" "}
          {user?.role === "OWNER"
            ? "کارفرما"
            : user?.role === "FREELANCER"
            ? "فریلنسر"
            : "ادمین"}
        </span>
        <span
          className={`font-DanaMedium    truncate text-gray_base`}
        >
          وضعیت:
          <span className={`pr-1 ${statusStyles[user?.status]?.style}`}>
            {statusStyles[user?.status]?.labal}
          </span>
          <span className="text-gray_base"> توسط ادمین </span>
        </span>
      </div>
      <button
        onClick={() => setIsOpen(true)}
        className="w-full px-2 flex gap-x-2 mt-6  items-center bg-blue_base/55 tr-300 hover:bg-blue_base py-2 text-white rounded-md"
      >
        <FaRegEdit />
        ویرایش اطلاعات
      </button>
      <button onClick={()=>setIsLogoutOpen(true)} className="w-full px-2 flex gap-x-2 mt-6  items-center bg-blue_base/55 tr-300 hover:bg-blue_base py-2 text-white rounded-md">
        <RiLogoutBoxLine />
        خروج
      </button>
      {isOpen && (
      <UserEditData reset={reset} handleSubmit={handleSubmit} register={register} setIsOpen={setIsOpen} isOpen={isOpen} errors={errors}/>
      )}
      {isLogoutOpen && <LogOut setIsOpen={setIsLogoutOpen} isOpen={isLogoutOpen}/>}
    </div>
  );
}

export default SideBar;
