import { useQuery } from "@tanstack/react-query";
import { getSingleProjectApi } from "../../../services/ProjectsServices";

const useGetSingleProject = (id)=>{

const {data,isPending:projectLoading} =   useQuery({
        queryKey:["project",id],
        queryFn:()=>getSingleProjectApi(id)
    })
    const {project} = data || {}
    return{ project,projectLoading}
}
export default useGetSingleProject;