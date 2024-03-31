import { useQuery } from "@tanstack/react-query"
import { GetAllProposalApi } from "../../../services/proposalServices"

const useGatAllProposal = ()=>{
const {data,isPending:proposalLoading} = useQuery({
    queryKey:["proposals"],
    queryFn:GetAllProposalApi
})
const {proposals} = data || []

return {proposals,proposalLoading}

}
export default useGatAllProposal