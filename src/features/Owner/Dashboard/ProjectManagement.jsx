import { useNavigate } from "react-router-dom";
import Table from "../../../ui/Table";
import useGetAllOwnerProjects from "../hooks/useGetAllOwnerProjects";
import OwnerProjectsRow from "./OwnerProjectsRow";
import { FaPlus } from "react-icons/fa6";
function ProjectManagement() {
 const {ProjectsLoading,projects} =  useGetAllOwnerProjects();
 console.log(projects);
 const navigate =useNavigate();
  return (
    <div className="col-span-9  row-span-6 max-h-[500px] overflow-y-auto overflow-x-auto bg-slate-50 rounded-lg shadow-md w-full px-4 xl:px-20 pb-6 ">
      <div className="flex justify-end  ml-0  mt-6">
        <button onClick={()=>navigate("/owner/new-project")} className="rounded-lg bg-cyan-500 tr-300 hover:bg-blue_base px-2 py-2 flex  items-center gap-x-2 text-white">
        <FaPlus color="white" />
        افزودن پروژه جدید
        </button>
      </div>
   <Table>
    <Table.Header cols={"grid-cols-7 "} >
    <th>#</th>
        <th>عنوان پروژه</th>
        <th>فریلنسر</th>
        <th>وضعیت</th>
        <th>عملیات</th>
        <th> جزییات</th>
        <th>درخواست ها</th>
    </Table.Header>
    
    <Table.Body>
      {projects && projects.map((project,index)=>{
        return <OwnerProjectsRow index={index} project={project}   key={project?._id}/>
      })}
    </Table.Body>

   </Table>
    </div>
  );
}

export default ProjectManagement;
