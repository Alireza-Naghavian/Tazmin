import React, { useState } from 'react'
import Table from '../../../ui/Table'
import truncateText from '../../../utils/truncateText'
import { Switch } from '@headlessui/react'
import ChangeStatusProjects from './ChangeStatusProjects'
import ProjectsOperations from './ProjectsOperations'

function OwnerProjectsRow({index,project}) {
  const [enabled, setEnabled] = useState(false)
  return (
  <Table.Row cols={"grid-cols-7"}>
     <td>{index + 1}</td>
      <td title={project?.title} className=' '>{truncateText(project?.title ,18)}</td>
      <td>{project?.freelancer?.name || "----"}</td>
      <td><ChangeStatusProjects project={project} project_id={project?._id}/></td>
      <td><ProjectsOperations project={project}/></td>
      <td>{project.budget}</td>
      <td>{project.budget}</td>

     
  </Table.Row>
  )
}

export default OwnerProjectsRow