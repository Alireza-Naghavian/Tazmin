import { RiDeleteBin6Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { useState } from "react";
import Modal from "../../../ui/Modal";
import useRemoveProject from "../hooks/useDeleteProject";
import Loader from "../../../ui/Loader";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import useGetAllCategories from "../../../hooks/useGetAllCategories";
import RHFSelect from "../../../ui/RHFSelect";
import StepForm_2 from "../StepForm_2";
import StepForm_3 from "../StepForm_3";
import DatePickerField from "../../../ui/DatePickerField";
import useEditProject from "../hooks/useEditProject";
import LargeBtn from "../../../ui/LargeBtn";
function ProjectsOperations({ project }) {
    const {
        title,
        description,
        budget,
        category,
        deadline,
        tags: prevTags,
      } = project;
 
  const [isDelOpen, setIsDelOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const queryClient = useQueryClient();
  const { deleteLoading, deleteProject } = useRemoveProject();
  const [tags, setTags] = useState( prevTags || []);
  const [date, setDate] = useState(new Date(deadline || ""));
let editProject = {title,description, budget,category: category?._id}

const {handleSubmit,reset,register,formState: { errors },} = useForm({defaultValues:editProject});

  return (
    <div className=" flex ">
      <button className=" ml-3" onClick={() => setIsDelOpen((is) => !is)}>
        <RiDeleteBin6Line size={20} className="text-error" />
      </button>
      <button className="" onClick={() => setIsEditOpen(true)}>
        <FaEdit size={20} className="text-blue_base" />
      </button>
      {isEditOpen && (
        <EditOperation
          isEditOpen={isEditOpen}
          project={project}
          setIsEditOpen={setIsEditOpen}
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
          reset={reset}
          tags={tags}
          setTags={setTags}
          date={date}
          setDate={setDate}
        />
      )}
      {isDelOpen && (
        <DeleteOperation
          isDelOpen={isDelOpen}
          setIsDelOpen={setIsDelOpen}
          project={project}
          deleteLoading={deleteLoading}
          deleteProject={deleteProject}
          queryClient={queryClient}
        />
      )}
    </div>
  );
}
const DeleteOperation = ({
  isDelOpen,
  setIsDelOpen,
  project,
  deleteLoading,
  deleteProject,
  queryClient,
}) => {
  const deleteHandler = () => {
    if (project.status === "OPEN") {
      toast.error("پروژه در حالت باز قرار دارد و قابل حذف نیست");
    } else {
      deleteProject(project._id, {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["owner-projects"] });
          setIsDelOpen(false);
        },
      });
    }
  };

  return (
    <Modal
      modal_Title={"حذف پروژه"}
      isOpen={isDelOpen}
      setIsOpen={setIsDelOpen}
    >
      <div className="flex flex-col gap-y-4">
        <span className="font-DanaMedium text-sm text-right mt-3 mr-2 ">
          آیا از حذف پروژه ({project?.title}) مطمئن هستید؟
        </span>
        <div className="flex w-full justify-end gap-x-2">
          <button
            onClick={() => setIsDelOpen(false)}
            className="px-5 py-1.5 rounded-lg  bg-blue_base/90 w-fit text-white"
          >
            لغو
          </button>
          <button
            onClick={() => deleteHandler()}
            className="px-5 py-1.5 rounded-lg  bg-error/90 w-fit text-white"
          >
            {deleteLoading ? (
              <Loader height="20" width="20" color="white" />
            ) : (
              "بله"
            )}
          </button>
        </div>
      </div>
    </Modal>
  );
};
const EditOperation = ({ isEditOpen, setIsEditOpen, project,register,handleSubmit,reset,errors,tags,setTags,date,setDate }) => {
  const {categories} =  useGetAllCategories();
  const {editProject,isLoading} =  useEditProject();
  const submitEditHandler = (data)=>{
    const {budget,category,description,title} = data
    const sanitizedValue = Number(budget.replace(/,/g, ''));
    let validData = {
      title,
      description,
      category,
      budget:sanitizedValue,
      deadline:new Date(date).toISOString()
    }
    const newProject = {
      ...validData,tags
    }
    editProject({id:project._id,newProject},{
      onSuccess:()=>{
        setIsEditOpen(false)
        reset();
      }
    })
  }
  return (
    <Modal
      isOpen={isEditOpen}
      setIsOpen={setIsEditOpen}
      modal_Title={`ویرایش پروژه (${project?.title})`}
    >
      <form onSubmit={handleSubmit(submitEditHandler)} className="flex flex-col">
        <RHFSelect
        label={"دسته بندی"}
        register={register}
        name={"category"}
        options={categories}
        required
        />
        <StepForm_2
        tags={tags}
        setTags={setTags}
        register={register}
        errors={errors}
        />
        <StepForm_3
         register={register}
         errors={errors}/>
        <div className="flex mr-10">
        <DatePickerField
         date={date}
         setDate={setDate}
         label={"زمان مدنظر (deadline) "}
         />
        </div>
       <div className="mt-4">  <LargeBtn type={"submit"}>{isLoading ? <Loader height="26" color="white" /> :"تایید"}</LargeBtn></div>
      </form>
    </Modal>
  );
};

export default ProjectsOperations;
