import { useMutation } from "@tanstack/react-query"
import { createProjectApi } from "../../../services/ProjectsServices"
import { toast } from "react-toastify"

const useCreateProject = ()=>{
const {isPending:isCreateLoading,mutate:createProject} = useMutation({
    mutationKey:["projects"],
    mutationFn:createProjectApi,
    onSuccess:(data)=>{
        toast.success(data.message)
    },
    onError:(err)=>{
        toast.error(err?.response?.data?.message)
    }
})
return {isCreateLoading,createProject}
}
export default useCreateProject