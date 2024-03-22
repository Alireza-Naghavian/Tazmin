import { FaBarsStaggered } from "react-icons/fa6";
import TazminLinkLogo from "../ui/TazminLinkLogo";
import NavBar from "./NavBar";
import MobileMenu from "./MobileMenu";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

function Header() {
  const [isMenuActive, setIsMenuActive] = useState(false);
  // lock screen scroll when menu is active !!
if(isMenuActive){
  document.body.style.overflow = 'hidden';
}else{
  document.body.style.overflow = 'unset';

}
  return (
    <div className="w-full shadow-sm relative flex items-center h-16 z-10 gap-5 md:px-10">
      <FaBarsStaggered
        onClick={() => setIsMenuActive(is=>!is)}
        className={`md:hidden pr-4 h-full w-10 flex items-center my-auto ${
          isMenuActive ? "hidden" : "flex "
        }`}
      />
      {isMenuActive && <MobileMenu isMenuActive={isMenuActive} setIsMenuActive={setIsMenuActive} />}
      {isMenuActive && (
        <IoMdClose
          onClick={() => setIsMenuActive(false)}
          className={`md:hidden pr-4 h-full w-10 flex items-center my-auto ${isMenuActive ? "flex" : "hidden "}`}
        />
      )}
      <TazminLinkLogo />
      <NavBar />
    </div>
  );
}

export default Header;
