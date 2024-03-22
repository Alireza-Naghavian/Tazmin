import React from 'react'

function Small_Blue_base_Btn({children}) {
  return (
    <button className="md:mt-12 mt-6 mx-0 mb-[68px] flex items-center md:w-auto w-full
    justify-center box-border outline-none border-none rounded-lg 
     text-center text-white
     bg-blue_base tr-300 px-4 py-2 hover:bg-blue_base/80">{children}</button>
  )
}

export default Small_Blue_base_Btn