import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

function ProjectManagement() {
    const navigate = useNavigate();
  return (
    <div className="col-span-9 row-span-6 bg-gray-900 text-white">
   fsdf
   <button onClick={()=> navigate("/owner/dashboard/review-proposals")} className="bg-primary-400">see proposals</button>
   <Outlet/>
    </div>
  );
}

export default ProjectManagement;
