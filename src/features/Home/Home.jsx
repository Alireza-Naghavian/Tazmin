import HomePage from "../../pages/HomePage";
import { Link} from "react-router-dom"
import NavBar from "../../pages/NavBar";
import { FaBarsStaggered } from "react-icons/fa6";
import { useState } from "react";
import MobileMenu from "../../pages/MobileMenu";
import { IoMdClose } from "react-icons/io";
import Header from "../../pages/Header";
import TazminLinkLogo from "../../ui/TazminLinkLogo";
function Home() {
  const [isMenuActive,setIsMenuActive]  = useState(false);
  return (
      <Header>
       <FaBarsStaggered onClick={()=>setIsMenuActive(true)}  className={`md:hidden pr-4 h-full w-10 flex items-center my-auto ${isMenuActive ? "hidden" :"flex"}`}/>
       {isMenuActive && <MobileMenu />}
       {isMenuActive && <IoMdClose onClick={()=>setIsMenuActive(false)}  className="md:hidden pr-4 h-full w-10 flex items-center my-auto"/>}
    <TazminLinkLogo/>
       <NavBar/>
      </Header>
  );
}

export default Home;
