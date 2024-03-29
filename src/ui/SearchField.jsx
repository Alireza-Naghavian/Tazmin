import { FiSearch } from "react-icons/fi"
import { useSearchParams } from "react-router-dom"
function SearchField({filterField}) {
  const [searchParams,setSearchParams] = useSearchParams();
  const value = searchParams.get(filterField || "")
  const searchHandler =(value)=>{
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set(filterField, value);
    setSearchParams(newSearchParams);
  }
  return (
    <div className='mt-10 h-auto md:w-[60%]  relative'>
    <form>
      <input type="text" onChange={(e)=>searchHandler(e.target.value)}  className='w-full mt-0 max-w-2xl   pr-4 py-2
       text-black_base  border
       border-gray_base/25 flex  items-start rounded-md focus:outline-none' placeholder='جستجو در پروژه ها ...' />
       <button type='submit' className='absolute hidden sm:block top-[10px] left-0 pl-2'><FiSearch  size={22} className='text-blue_base'/></button>
    </form>
       </div>
  )
}

export default SearchField