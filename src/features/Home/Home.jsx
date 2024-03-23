import useGetAllCategories from "../../hooks/useGetAllCategories";
import useUser from "../../hooks/useUser";
import Category_capabilities from "../../ui/Category_capabilities";
import Main_Hero_Header from "../../ui/Main_Hero_Header";

function Home() {
 const {isUserLoading,user} =useUser();
 const {categories,transformedCategories,isCatLoading } = useGetAllCategories();
  return (
<div>
  <Main_Hero_Header user={user} isUserLoading={isUserLoading}/>
  <Category_capabilities categories={categories} />
</div>
  );
}

export default Home;
