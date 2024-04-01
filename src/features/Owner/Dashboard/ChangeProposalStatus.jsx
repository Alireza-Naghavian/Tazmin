import { useForm } from "react-hook-form";
import Modal from "../../../ui/Modal"
import RHFSelect from "../../../ui/RHFSelect"
import useChangeProposalStatus from "../hooks/useChangeProposalStatus";
import { useParams } from "react-router-dom";
import Loader from "../../../ui/Loader";
import LargeBtn from "../../../ui/LargeBtn";

function ChangeProposalStatus({statusChanger,setStatusChanger,proposal}) {
    const {id:projectId} =  useParams()
    const proposalId = proposal._id
    const {register,handleSubmit} = useForm();
    const {changeProposalST,changeStLoading} = useChangeProposalStatus();
    const changeStHandler = (data)=>{
        changeProposalST({proposalId,projectId,...data},{onSuccess:()=>{
            setStatusChanger(false)
        }})
    }
    const options = [
        {
          label: "رد شده",
          value: 0,
        },
        {
          label: "در انتظار تایید",
          value: 1,
        },
        {
          label: "تایید شده",
          value: 2,
        },
      ];
  return (
    <Modal modal_Title={` تغییر وضعیت درخواست : ${proposal?.user?.name} `} isOpen={statusChanger} setIsOpen={setStatusChanger}>
      <div>
        <form onSubmit={handleSubmit(changeStHandler)}>
            <RHFSelect
              name={"status"}
              label={"تغییر وضعیت درخواست"}
              register={register}
              required
              options={options}
            />
        <div className="mt-4">
        <LargeBtn bg="bg-blue_base" hover="" type={"submit"}> {changeStLoading ? <Loader  height="22" width="22" color="white"/> :"تغییر وضعیت"}</LargeBtn>
        </div>
        </form>
      </div>
    </Modal>
  )
}

export default ChangeProposalStatus