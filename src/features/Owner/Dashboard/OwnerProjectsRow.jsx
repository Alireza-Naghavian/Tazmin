import React, { useState } from 'react'
import Table from '../../../ui/Table'
import truncateText from '../../../utils/truncateText'
import ChangeStatusProjects from './ChangeStatusProjects'
import ProjectsOperations from './ProjectsOperations'
import { BiSolidDetail } from "react-icons/bi";
import Modal from '../../../ui/Modal'
import { FaFileContract } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'
function OwnerProjectsRow({project}) {
  const [isDetailOpen, setIsDetailOpen] = useState(false)
  const navigate = useNavigate();
  return (
  <Table.Row cols={"lg:grid-cols-6 "}>
      <td title={project?.title} className=' '>{truncateText(project?.title ,18)}</td>
      <td>{project?.freelancer?.name || "----"}</td>
      <td><ChangeStatusProjects project={project} project_id={project?._id}/></td>
      <td><ProjectsOperations project={project}/></td>
      <td onClick={()=>setIsDetailOpen(true)}><BiSolidDetail  size={24} className='text-gray_base cursor-pointer flex' /></td>
      <td onClick={()=>navigate("/owner/dashboard/review-proposals")} ><FaFileContract className='text-gray_base cursor-pointer flex' size={24}/></td>

     {isDetailOpen && <DetailData project={project} setIsDetailOpen={setIsDetailOpen} isDetailOpen={isDetailOpen}/>}
  </Table.Row>
  )
}

const DetailData=({project,setIsDetailOpen,isDetailOpen})=>{
  
  return<Modal modal_Title={`مشخصات پروژه (${project.title})`} isOpen={isDetailOpen} setIsOpen={setIsDetailOpen}>
    <div className="w-full px-2 mt-6 child:w-full flex flex-col gap-y-4 child:font-DanaBold child:text-black_base child:border-b  child:rounded-md  child:pb-2 child:text-sm">
  <span>عنوان پروژه: {project.title}</span>
  <span className='flex flex-col  gap-y-2'> 
  <span >توضیحات پروژه :</span>
  <span className='font-Dana'>{project.description}</span></span>
  <span>بودجه پروژه : {project.budget.toLocaleString()} تومان</span>
  <div className='flex flex-col gap-y-1'>
    <span>مهارت های مورد نیاز:</span>
    <span className='flex flex-wrap gap-y-2 overflow-x-auto w-fit'>
      {project.tags.map(tag=>{
        return <span key={tag} className=' text-xs  text-white/90 bg-blue_base/65 rounded-lg mr-2 px-2 py-1 '>{tag}</span>
      })}
    </span>
  </div>
  <span>دسته بندی : {project.category.title}</span>
  <span>واگذار شده به : {project.freelancer || "----"}</span>
  <span>تاریخ ایجاد پروژه : {new Date(project.createdAt).toLocaleDateString("Fa-Ir")}</span>
  <span>تاریخ بروزرسانی پروژه : {new Date(project.updatedAt).toLocaleDateString("Fa-Ir")}</span>
  <span>ددلاین پروژه :  {new Date(project.deadline).toLocaleDateString("Fa-Ir")}</span>
  <span>وضعیت : {project.status === "OPEN" ? "باز" : "بسته"}</span>
    </div>
  </Modal>
}


export default OwnerProjectsRow