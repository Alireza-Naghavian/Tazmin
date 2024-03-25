import { Outlet } from "react-router-dom"
import Stats from "./Stats"
import SideBar from "../../../ui/SideBar"

function OwnerDashboardLayout() {
  return (
    <div className="w-full sm:px-16 relative pt-12 pb-9 ">
        <div className="grid grid-cols-12 grid-rows-8 gap-x-4">
        <div className="col-span-3 row-span-8 min-h-screen"><SideBar/></div>
        <Stats/>
       <Outlet/>
        </div>
    </div>
  )
}

export default OwnerDashboardLayout