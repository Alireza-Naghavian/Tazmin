import React from "react";
import { Link } from "react-router-dom";
import useUser from "../hooks/useUser";

function SubMenu({
  mainSubItem,
  mainSubDesc,
  secondSubItem,
  secondSubDesc,
  lastSubItem,
  lastSubDesc,
  base_color,
  bg_img,
  isOwnerActive,
  isFreelanceActive,
}) {
  const { user } = useUser();

  return (
    <div className="z-50 bg-white absolute left-0 top-[48px] whitespace-break-spaces w-full min-h-[380px] shadow-md cursor-default">
      <div className="flex flex-wrap w-full h-auto py-[30px] px-10  gap-8 bg-white">
        <div className="absolute top-[2px] right-0 h-full w-full z-20 custom-shadow"></div>
        <div className="flex flex-col gap-5 font-DanaBold z-20 text-black_base">
          <Link
            to={`${
              user && isOwnerActive
                ? "/owner/new-project"
                : user && isFreelanceActive
                ? "/freelancer/projectLists"
                : ""
            }`}
            className={`h-[120px] w-[312px] min-h-[56px] rounded-lg 
                 px-4 flex flex-col justify-center shadow-md 
                 custom-right-border ${base_color}  tr-300 hover:bg-hover `}
          >
            <span
              className="text-[14px] leading-7 m-0 font-DanaBold 
             text-black_base z-20"
            >
              {mainSubItem}
            </span>
            <span className="text-xs leading-6 font-Dana m-0 z-20 text-gray_base ">
              {mainSubDesc}
            </span>
          </Link>
        </div>
        <div className="flex flex-col gap-5 text-black_base z-20">
          <AccessLink
            isFreelanceActive={isFreelanceActive}
            isOwnerActive={isOwnerActive}
            user={user}
            linkItem={secondSubItem}
            linkDesc={secondSubDesc}
          />
          <AccessLink
            isFreelanceActive={isFreelanceActive}
            isOwnerActive={isOwnerActive}
            user={user}
            linkItem={lastSubItem}
            linkDesc={lastSubDesc}
          />
        </div>
        <div className="absolute h-full w-[900px] left-0 top-0 ">
          <div className="absolute  z-10 w-full h-full bg-gradient-to-r from-[#ffffffa6] from-1% to-white to-90% "></div>
          <img
            src={`/menu-photo/${bg_img}`}
            loading="lazy"
            className="absolute h-full w-full inset-0 object-cover text-transparent  "
            alt="header-img"
          />
        </div>
      </div>
    </div>
  );
}

const AccessLink = ({
  user,
  isFreelanceActive,
  isOwnerActive,
  linkItem,
  linkDesc,
}) => {
  console.log(user);
  return (
    <Link
      to={`${
        user && isOwnerActive
          ? "/owner"
          : user && isFreelanceActive
          ? "/freelancer"
          : ""
      }`}
      onClick={(e) =>
        user?.role !== "OWNER" && isOwnerActive
          ? e.preventDefault()
          : user?.role !== "FREELANCER" &&
            isFreelanceActive &&
            e.preventDefault()
      }
      className={`w-[300px] px-4 py-2 rounded-lg tr-300 hover:bg-hover ${
        user?.role !== "OWNER" && isOwnerActive
          ? "cursor-not-allowed opacity-50"
          : user?.role !== "FREELANCER" && isFreelanceActive
          ? "cursor-not-allowed opacity-50"
          : ``
      }`}
    >
      <div className="text-sm leading-7 text-black_base font-DanaBold">
        {linkItem}
      </div>
      <div className="text-xs leading-6 m-0 font-Dana text-gray_base">
        <span>{linkDesc}</span>
      </div>
    </Link>
  );
};
export default SubMenu;
