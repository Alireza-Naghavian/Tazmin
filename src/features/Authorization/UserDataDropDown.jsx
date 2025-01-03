import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { BsPersonWorkspace } from "react-icons/bs";
import { IoChevronDown } from "react-icons/io5";
import { RiLogoutBoxLine } from "react-icons/ri";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import useLogout from "../../hooks/useLogout";
import useUser from "../../hooks/useUser";
import Text_loader from "../../ui/Text_loader";
import truncateText from "../../utils/truncateText";
function UserDataDropDown() {
  const { user,isUserLoading } = useUser();
  const navigate = useNavigate();
  const { LogOut } = useLogout();

  const logOutHandler = () => {
    LogOut();
  };
  return (
    <div className=" w-fit mr-auto  text-right">
      
      <Menu as="div" className="relative inline-block text-right">
        <div>
          <Menu.Button
            className="inline-flex  
               w-full justify-center items-center gap-x-2 
              rounded-md bg-gray-300 px-4 py-2 text-sm
                text-black_base font-DanaMedium hover:bg-black/30
               hover:text-black_base/70 focus:outline-none focus-visible:ring-2
                focus-visible:ring-white/75"
          >
            {isUserLoading ? <div className="flex items-center"><Text_loader loadingCondition={isUserLoading}/></div> :
            !user ? (
              <Link to={"/register-login"}>ورود / ثبت نام</Link>
            ) : (
              <>
                <img
                  src="/logo/user.jpg"
                  className="w-[23px] rounded-full"
                  alt=""
                />
                <div className="flex  gap-x-2 mt-[2px]">
                  {truncateText(user && user?.name, 20)}
                  <IoChevronDown
                    className="-mr-1 ml-2 h-5 w-5 text-black_base "
                    aria-hidden="true"
                  />
                </div>
              </>
            )}
          </Menu.Button>
        </div>
        {user && (
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute left-0 mt-2 w-56  origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
              <div className="px-1 py-1 ">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() =>
                        user && user?.role === "FREELANCER"
                          ? navigate("/freelancer")
                          : user && user?.role === "OWNER"
                          ? navigate("/owner")
                          : user && user?.role === "ADMIN"
                          ? navigate("/admin")
                          : ""
                      }
                      className={`${
                        active
                          ? "bg-blue_base/20 text-blue_base"
                          : "text-black_base"
                      } group flex gap-x-2 w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {active ? (
                        <BsPersonWorkspace
                          className="mr-2 h-5 w-5"
                          aria-hidden="true"
                        />
                      ) : (
                        <BsPersonWorkspace
                          className="mr-2 h-5 w-5"
                          aria-hidden="true"
                        />
                      )}
                      اتاق کار من
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => logOutHandler()}
                      className={`${
                        active
                          ? "bg-blue_base/20 text-blue_base"
                          : "text-black_base"
                      } group flex gap-x-2 w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {active ? (
                        <RiLogoutBoxLine
                          className="mr-2 h-5 w-5"
                          aria-hidden="true"
                        />
                      ) : (
                        <RiLogoutBoxLine
                          className="mr-2 h-5 w-5"
                          aria-hidden="true"
                        />
                      )}
                      خروج
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        )}
      </Menu>
    </div>
  );
}

export default UserDataDropDown;
