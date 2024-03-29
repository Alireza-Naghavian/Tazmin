import React from 'react'
import { useSearchParams } from 'react-router-dom';

function Status_pr_btn({filterField,options}) {
  const [searchParams,setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField)|| options.at(0).value
  const handleClick  = (value)=>{
    searchParams.set(filterField,value)
    setSearchParams(searchParams)
  }
  return (
    <div className="lg:w-[40%] sm:w-1/2 w-[90%] bg-gray-200 mt-10 flex  rounded-lg gap-x-2 py-1 px-1 ">
{options.map((btn)=>{
  const isActive = btn.value === currentFilter
  return(<button onClick={()=>handleClick(btn.value)} disabled={isActive} key={btn.value} className={` rounded-md ${isActive ? "text-blue_base bg-white" : "bg-gray-200 text-gray-500"} text-sm tracking-tighter
  font-DanaMedium tr-300 py-1 px-1 w-1/3 text-center`}>
{btn.label}
</button>)
})}
     </div>
  )
}

export default Status_pr_btn