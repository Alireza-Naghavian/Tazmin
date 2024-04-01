import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { chageProposalStApi } from "../../../services/proposalServices";
import { toast } from "react-toastify";

const useChangeProposalStatus =()=>{

    const queryClient = useQueryClient();
    const { id } = useParams();
    const { mutate: changeProposalST, isPending: changeStLoading } = useMutation({
      mutationFn: chageProposalStApi,
      onSuccess: (data) => {
        toast.success(data.message),
          queryClient.invalidateQueries({ queryKey: ["project", id] });
      },
      onError: (err) => toast.error(err?.response?.data?.message),
    });
  
    return { changeProposalST, changeStLoading };
}
export default useChangeProposalStatus