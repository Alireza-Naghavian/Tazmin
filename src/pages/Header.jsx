import { FaBarsStaggered } from "react-icons/fa6";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { PiUserCircle } from "react-icons/pi";
import { RiLogoutBoxLine } from "react-icons/ri";
import { useNavigate } from "react-router";
import UserDataDropDown from "../features/Authorization/UserDataDropDown";
import useLogout from "../hooks/useLogout";
import useUser from "../hooks/useUser";
import TazminLinkLogo from "../ui/TazminLinkLogo";
import MobileMenu from "./MobileMenu";
import NavBar from "./NavBar";

function Header() {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const { user } = useUser();
  const navigate = useNavigate();
  const { LogOut } = useLogout();
  const logoutHandler = () => {
    LogOut();
  };
  // lock screen scroll when menu is active !!
  if (isMenuActive) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "unset";
  }
  return (
    <div className="w-full  shadow-sm relative md:flex grid grid-cols-3 sm:px-8 px-2  items-center h-16 z-10  md:gap-5 md:px-10">
      <FaBarsStaggered
        onClick={() => setIsMenuActive((is) => !is)}
        className={`md:hidden  h-full pr-4 w-10 flex items-center my-auto ${
          isMenuActive ? "hidden" : "flex "
        }`}
      />
      {isMenuActive && (
        <MobileMenu
          isMenuActive={isMenuActive}
          setIsMenuActive={setIsMenuActive}
        />
      )}
      {isMenuActive && (
        <IoMdClose
          onClick={() => setIsMenuActive(false)}
          className={`md:hidden pr-4 h-full w-10 flex items-center my-auto ${
            isMenuActive ? "flex" : "hidden "
          }`}
        />
      )}
      <TazminLinkLogo />
      <NavBar />
      <div className="w-fit mr-auto  text-right flex items-center gap-x-8 lg:hidden">
    {user &&
        <RiLogoutBoxLine
        onClick={() => logoutHandler()}
        size={28}
        className="text-gray_base hidden sm:block "
      />}
        <PiUserCircle
          onClick={() =>
            !user ? navigate("/register-login"):
            user && user?.role === "OWNER"
              ? navigate("/owner")
              : user && user?.role === "FREELANCER"
              ? navigate("/freelancer")
              : user && user?.role === "AMDIN"
              ? navigate("/admin")
              : ""
          }
          size={36}
          className="text-gray_base  w-14"
        />
      </div>
      <div className="w-fit mr-auto  text-right hidden lg:flex">
          <UserDataDropDown />
      </div>
    </div>
  );
}

export default Header;
