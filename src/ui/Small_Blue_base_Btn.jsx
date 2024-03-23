import React from 'react'

function Small_Blue_base_Btn({children,px = `px-4` ,py=`py-2`,size="md"}) {
  return (
    <button className={`md:mt-12 mt-6 mx-0 mb-[68px] flex items-center ${size}:w-auto w-full
    justify-center box-border outline-none border-none rounded-lg 
     text-center text-white
     bg-blue_base tr-300 ${px}  ${py} hover:bg-blue_base/80`}>{children}</button>
  )
}

export default Small_Blue_base_Btn