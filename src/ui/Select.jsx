import React from 'react'

function Select({value,onChange,options}) {
  return (
    <select value={value} onChange={onChange} className='w-full rounded-xl px-4 py-2 flex bg-gray-200  justify-start focus:outline-none'>
        {options&& options.map((item)=>{
            return(<option  key={item.value} value={item.value} className='focus:outline-none focus:border-none rounded-lg bg-white' >
            {item.label}
        </option>)
   
        })}
    </select>
  )
}

export default Select