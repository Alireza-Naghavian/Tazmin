import React from "react";
import useLogout from "../../hooks/useLogout";
import Modal from "../../ui/Modal";

function LogOut({ isOpen, setIsOpen }) {
 const {LogOut} =  useLogout()
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
