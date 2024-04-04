import React, { useEffect } from "react";
import Modal from "../../ui/Modal";
import { useMutation } from "@tanstack/react-query";
import { logOutUserProfileApi } from "../../services/AuthServices";
import Loader from "../../ui/Loader";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

function LogOut({ isOpen, setIsOpen }) {
  const [cookies,setCookie] = useCookies(["userLogin"]);
  const navigate = useNavigate();
  const setCookieHandler = ()=>{
    const exp = new Date();
    exp.setDate(exp.getDate() - 2);
    setCookie("userLogin","userLoggedIn" , {path:"/",expires:exp})
  }
  const { mutateAsync: LogOut } = useMutation({
    mutationFn: logOutUserProfileApi,
    onSuccess: () => {
      setIsOpen(false);
      navigate("/");
    },
  });

  const logOutHandler = () => {
    setCookieHandler()
    LogOut();
  };

  return (
    <Modal modal_Title={"خروج"} isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="flex flex-col gap-y-4">
        <span className="font-DanaMedium text-sm text-right mt-3 mr-2 ">
          آیا از خروج مطمئن هستید؟
        </span>
        <div className="flex w-full justify-end gap-x-2">
          <button
            onClick={() => setIsOpen(false)}
            className="px-5 py-1.5 rounded-lg  bg-blue_base/90 w-fit text-white"
          >
            لغو
          </button>
          <button
            onClick={() => logOutHandler()}
            className="px-5 py-1.5 rounded-lg  bg-error/90 w-fit text-white"
          >
            بله
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default LogOut;
