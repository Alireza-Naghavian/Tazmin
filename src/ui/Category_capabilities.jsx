import React from 'react'

function Category_capabilities({categories}) {
    console.log(categories);
    return (
    <div className='mt-32'>
       <div className="2xl:gap-9 xl:gap-8 lg:gap-6 sm:gap-[22px] xs:gap-5 xl:mb-[70px] relative">
        <h2 className='font-DanaBold lg:text-[30px] lg:leading-[47px] text-black_base m-0 text-center '>چه کارهایی را می توانید در تضمین انجام دهید؟</h2>
            <div className="w-[100px] h-[3px] bg-blue_base rounded-md z-20 flex justify-center mx-auto mt-3"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6 mt-20">
              {categories && categories.slice(0,6).map((item)=>{
                return (
                  <div className="px-8 py-6 rounded-xl flex gap-x-6 justify-start items-center  bg-blue_base/20" key={item?.value}>
                    <img src={item?.icon} alt="" />
                    <h3 className='font-DanaBold text-xl'>{item.label}</h3>
                  </div>
                )
              })}
            </div>
        </div> 
    </div>
  )
}

export default Category_capabilities