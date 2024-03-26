import { RiEmotionUnhappyFill } from "react-icons/ri";
function Empty({resourceName}) {
  return (
    <div className="flex justify-center mt-12">
        <p className="flex gap-x-2 items-center">
            <RiEmotionUnhappyFill className="icon text-2xl text-red-400"/>
            <span className="text-xl font-[700]"> {resourceName} یافت نشد.</span>
            </p>
    </div>
  )
}

export default Empty