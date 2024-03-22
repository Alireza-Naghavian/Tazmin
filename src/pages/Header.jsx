import { FaBarsStaggered } from "react-icons/fa6";
import TazminLinkLogo from "../ui/TazminLinkLogo";
import NavBar from "./NavBar";
import MobileMenu from "./MobileMenu";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

function Header() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  return (
    <div className="w-full shadow-sm relative flex items-center h-16 z-10 gap-5 md:px-10">
      <FaBarsStaggered
        onClick={() => setIsMenuActive(true)}
        className={`md:hidden pr-4 h-full w-10 flex items-center my-auto ${
          isMenuActive ? "hidden" : "flex"
        }`}
      />
      {isMenuActive && <MobileMenu />}
      {isMenuActive && (
        <IoMdClose
          onClick={() => setIsMenuActive(false)}
          className="md:hidden pr-4 h-full w-10 flex items-center my-auto"
        />
      )}
      <TazminLinkLogo />
      <NavBar />
    </div>
  );
}

export default Header;
