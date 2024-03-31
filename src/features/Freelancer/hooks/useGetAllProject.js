import { useQuery } from "@tanstack/react-query"
import { getAllProjectsApi } from "../../../services/ProjectsServices"
import { useLocation } from "react-router-dom"
import queryString, {} from "query-string"
const useGetAllProjects = ()=>{
   const {search} = useLocation()
  const queryObject = queryString.parse(search)
const {isPending:projectsLoading,data}= useQuery({
    queryKey:["all-owner-projects",queryObject],
    queryFn:()=>getAllProjectsApi(search)
})
const {projects} = data || []
return {projectsLoading,projects}
    
}
export default  useGetAllProjects