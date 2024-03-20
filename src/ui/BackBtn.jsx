import React from 'react'
import { useNavigate } from 'react-router-dom'

function BackBtn({children,icon,color}) {
  const navigate = useNavigate();
  return (
    <button onClick={()=> navigate(-1)} className={`flex items-center gap-x-2 cursor-pointer ${color} relative box-border bg-transparent outline-none
     border-none m-0 select-none align-middle text-center font-DanaMedium py-2 text-xs gap-2 appearance-none  `}>
        {icon}
        {children}
     </button>
  )
}

export default BackBtn