import { Outlet, useNavigate } from "react-router-dom"
import SideBar from "../../../ui/SideBar"
import Stat from "../Stat"
import useUser from "../../../hooks/useUser"
import { useEffect } from "react";

function OwnerDashboardLayout() {
  const {user} =  useUser();
  const navigate = useNavigate();
 useEffect(()=>{
  if(user && user?.role !== "OWNER") ( navigate("/*",{replace:true}) )
 },[navigate,user])
  return (
    <div className="w-full sm:px-16 xs:px-3 relative pt-12 pb-9  ">
        <div className="grid grid-cols-12 lg:grid-rows-8 gap-x-4 lg:gap-y-0  gap-y-6">
        <div className="lg:col-span-3 col-span-12 row-span-8 order-3 lg:order-none   min-h-screen"><SideBar/></div>
        <div className="lg:col-span-9 col-span-12 mt-6 lg:mt-0   row-span-2 bg-zinc-200/55 rounded-lg mb-2 shadow-sm">
        <Stat/>
        </div>
       <Outlet/>
        </div>
    </div>
  )
}

export default OwnerDashboardLayout