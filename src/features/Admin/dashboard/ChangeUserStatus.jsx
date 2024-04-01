import React from "react";
import Modal from "../../../ui/Modal";
import RHFSelect from "../../../ui/RHFSelect";
import LargeBtn from "../../../ui/LargeBtn";
import Loader from "../../../ui/Loader";
import { useForm } from "react-hook-form";
import useChangeUserStatus from "../hooks/useChangeUserStatus";
import { useQueryClient } from "@tanstack/react-query";

function ChangeUserStatus({ statusChanger, setStatusChanger, user,userId }) {
  const { register, handleSubmit } = useForm();
  const queryClient = useQueryClient();
  const { ChangeUserSt, isLoading } = useChangeUserStatus();
  const changeStHandler = (data) => {
    ChangeUserSt(
      {  userId, data },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["users"] });
          setStatusChanger(false);
        },
      }
    );
  };
  const options = [
    {
      label: "رد شده",
      value: 0,
    },
    {
      label: "در انتظار تایید",
      value: 1,
    },
    {
      label: "تایید شده",
      value: 2,
    },
  ];
  return (
    <Modal
      modal_Title={` تغییر وضعیت کاربر : ${user?.name} `}
      isOpen={statusChanger}
      setIsOpen={setStatusChanger}
    >
      <div>
        <form onSubmit={handleSubmit(changeStHandler)}>
          <RHFSelect
            name={"status"}
            label={"تغییر وضعیت کاربر"}
            register={register}
            required
            options={options}
          />
          <div className="mt-4">
            <LargeBtn bg="bg-blue_base" hover="" type={"submit"}>
              {" "}
              {isLoading ? (
                <Loader height="22" width="22" color="white" />
              ) : (
                "تغییر وضعیت"
              )}
            </LargeBtn>
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default ChangeUserStatus;
