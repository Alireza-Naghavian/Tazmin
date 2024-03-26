import React from "react";
import Modal from "../../ui/Modal";
import { useMutation } from "@tanstack/react-query";
import { logOutUserProfileApi } from "../../services/AuthServices";
import Loader from "../../ui/Loader";
import { useNavigate } from "react-router-dom";

function LogOut({ isOpen, setIsOpen }) {
  const navigate = useNavigate();
  const { mutateAsync: LogOut } = useMutation({
    mutationFn: logOutUserProfileApi,
    onSuccess: () => {
      setIsOpen(false);
      navigate("/");
    },
  });
  const logOutHandler = () => {
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
