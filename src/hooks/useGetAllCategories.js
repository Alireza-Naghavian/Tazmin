import { useQuery } from "@tanstack/react-query"
import { getCatList } from "../services/otherServices"

const useGetAllCategories = ()=>{
    const { isPending, data } = useQuery({
        queryKey: ["categories-get"],
        queryFn: getCatList,
        retry: false,
      });
    
      const { categories: rawCategories = [] } = data || {};
    
      const categories = rawCategories.map((item) => ({
        label: item.title,
        value: item._id,
        icon:item.icon.lg
      }));
    
      const transformedCategories = rawCategories.map((item) => ({
        label: item.title,
        value: item.englishTitle,
      }));
      console.log(data);
      return { isPending, categories, transformedCategories };
}
export default  useGetAllCategories