import { useMutation } from "@tanstack/react-query"
import { send_req_api } from "../../../services/proposalServices"
import { toast } from "react-toastify"
const useSendReq=()=>{
const {isPending:sendLoading,mutate:sendProposal}= useMutation({
    mutationKey:["proposal"],
    mutationFn:send_req_api,
    onSuccess:(data)=>{
        toast.success(data.message)
    },
    onError:(err)=>{
        toast.error(err?.response?.data?.message)
    }
})
return {sendLoading,sendProposal}
}
export default useSendReq