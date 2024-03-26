import { Switch } from "@headlessui/react"
import { useState } from "react"
import useChangeStatusProject from "../hooks/useChangeStatusProject"
import { useQueryClient } from "@tanstack/react-query"
import Loader from "../../../ui/Loader"

function ChangeStatusProjects({project,project_id}) {
    const [enabled, setEnabled] = useState(project?.status === "OPEN" ? true : false)
    const {changeStatus,statusLoading} = useChangeStatusProject()
    const queryClient = useQueryClient();
    const status = project?.status === "OPEN" ? "CLOSED" :"OPEN"
const changeStHandler =()=>{
changeStatus({id:project_id,data:{status}},{onSuccess:()=>{
    queryClient.invalidateQueries({queryKey:["owner-projects"]})
    setEnabled(is=>!is)
}})
}
  if(statusLoading) return <Loader height="20" />
  return (
    <div>
        <Switch.Group>
        <div className="flex items-center  gap-x-2" dir="rtl">
          <Switch.Label className="">
            {project?.status === "OPEN" ? "باز" : "بسته"}
          </Switch.Label>
          <Switch
            checked={enabled}
           onChange={changeStHandler}
            className={`${
              enabled ? "bg-blue-600" : "bg-blue_base/45"
            } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none `}
          >
            <span
              className={`${
                enabled ? "-translate-x-6" : "-translate-x-1"
              } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
            />
          </Switch>
        </div>
      </Switch.Group>
    </div>
  )
}

export default ChangeStatusProjects