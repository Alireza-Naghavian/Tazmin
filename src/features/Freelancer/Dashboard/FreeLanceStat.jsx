import { IoDocument } from "react-icons/io5";
import Stats from "../../../ui/Stats"
import useGatAllProposal from "../hooks/useGetAllProposal"
import { MdOutlineAccountBalanceWallet, MdOutlineHandshake } from "react-icons/md";
function FreeLanceStat() {
    const {proposalLoading,proposals} = useGatAllProposal();
    const numberOfProposals = proposals?.length;
    const numbOfAcceptedProposals = proposals?.filter((item) => item?.status === 2);
    const balance = numbOfAcceptedProposals?.reduce((acc, curr) => acc + (curr?.price -(curr?.price/10)),0);
  return (
   <Stats>
      <div className="grid   sm:grid-cols-3 gap-y-2 sm:gap-y-0 w-full h-full p-4 " >
          <div className="flex gap-x-2 w-full h-full  justify-center flex-col mt-2 font-DanaBold items-center "data-aos="zoom-in" data-aos-delay="400"  data-aos-once="false">
            <div className="text-lg font-DanaBold">{numberOfProposals}</div>
            <div className="flex justify-center  items-center gap-x-2">
              <IoDocument size={28} className="text-zinc-600" />
                    درخواست ها
            </div>
          </div>
          <div className="flex gap-x-2 w-full h-full  justify-center flex-col mt-2 font-DanaBold items-center "data-aos="zoom-in" data-aos-delay="600"  data-aos-once="false">
            <div className="flex gap-x-2 w-full h-full  justify-center flex-col mt-2 font-DanaBold items-center ">
              <div className="text-lg font-DanaBold">{numbOfAcceptedProposals?.length}</div>
              <div className="flex justify-center  items-center gap-x-2">
                <MdOutlineHandshake size={28} className="text-zinc-600" />
                    درخواست های تایید شده
              </div>
            </div>
          </div>
          <div className="flex gap-x-2 w-full h-full justify-center flex-col mt-2 font-DanaBold items-center "data-aos="zoom-in" data-aos-delay="800"  data-aos-once="false">
            <div className="flex gap-x-2 w-full h-full  justify-center flex-col mt-2 font-DanaBold items-center ">
              <div className="text-lg font-DanaBold">{balance?.toLocaleString()} تومان</div>
              <div className="flex justify-center  items-center gap-x-2">
                <MdOutlineAccountBalanceWallet  size={28} className="text-zinc-600" />
                   کیف پول شما
              </div>
            </div>
          </div>
        </div>
   </Stats>
  )
}

export default FreeLanceStat