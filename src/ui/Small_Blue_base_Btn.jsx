import React from 'react'

function Small_Blue_base_Btn({children}) {
  return (
    <button className="mt-12 mx-0 mb-[68px] flex items-center
    justify-center box-border outline-none border-none rounded-lg 
     text-center text-white
     bg-blue_base tr-300 px-4 py-2 hover:bg-blue_base/80">{children}</button>
  )
}

export default Small_Blue_base_Btn