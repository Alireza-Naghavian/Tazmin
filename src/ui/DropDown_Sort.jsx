import React from 'react'
import Select from './Select'
import { useSearchParams } from 'react-router-dom'

function DropDown_Sort({filterField,options,title}) {
  const [searchParams,setSearchParams] = useSearchParams();
  const value = searchParams.get(filterField)|| ""
  const handleChange  = (e)=>{
    searchParams.set(filterField,e.target.value)
    setSearchParams(searchParams)
  }
  return (
   
  
    <div className="flex flex-col gap-y-2 ">
      <span className='font-DanaMedium text-gray_base leading-7 tracking-tighter pr-2'>
      {title}
      </span>
<Select onChange={handleChange} options={options} value={value}/>
    </div>
  
  )
}

export default DropDown_Sort