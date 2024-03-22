import useUser from "../../hooks/useUser";
import Main_Hero_Header from "../../ui/Main_Hero_Header";

function Home() {
 const {isUserLoading,user} =useUser();
  return (
<div>
  <Main_Hero_Header user={user} isUserLoading={isUserLoading}/>
</div>
  );
}

export default Home;
