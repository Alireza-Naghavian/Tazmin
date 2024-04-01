import React, { useState } from "react";
import Auth from "../../pages/Auth";
import Large_Text_Field from "../../ui/Large_Text_Field";
import { useForm } from "react-hook-form";
import { LuMonitor } from "react-icons/lu";
import { FiBriefcase } from "react-icons/fi";
import LargeBtn from "../../ui/LargeBtn";
import useCompleteProfile from "./hooks/useCompleteProfile";
import { useNavigate } from "react-router-dom";
import Loader from "../../ui/Loader";
import { toast } from "react-toastify";

function CompleteProfile() {
  const [roleChecked, setRoleChecked] = useState("");
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm();
  const { completeProfile, isProfileLoading } = useCompleteProfile();
  const submitHandler = (data) => {
    completeProfile(data, {
      onSuccess: () => {
        navigate("/home", { replace: true });
      },
    });
  };

  return (
    <Auth>
      <div className="flex flex-col gap-8">
        <div className="flex flex-wrap items-center justify-between mt-6 ">
          <span className="text-[23px] leading-[43px] font-DanaBold">
            ایجاد حساب کاربری
          </span>
        </div>
        <form
          onSubmit={handleSubmit(submitHandler)}
          className="flex flex-col gap-y-6"
        >
          <span className="text-sm font-Dana text-black_base leading-5">
            از اینکه به تضمین پیوستید خرسندیم.برای تمکیل حساب کاربری موارد زیر
            را وارد نمایید.
          </span>
          <div className="relative flex flex-col space-y-6">
            <Large_Text_Field
              register={register}
              label={"نام کاربری"}
              required
              name={"name"}
              id={"name"}
              errors={errors}
              validationSchema={{
                required: "پر کردن این فیلد الزامی است.",
                minLength: {
                  value: 5,
                  message: "نام کاربری باید حداقل دارای ۵ کاراکتر باشد",
                },
              }}
            />
            <Large_Text_Field
              register={register}
              name={"email"}
              label={"ایمیل کاربری"}
              required
              type="email"
              placeholder={"ایمیل کاربری معتبر وارد کنید..."}
              errors={errors}
              id={"email"}
              validationSchema={{
                required: "پر کردن این فیلد الزامی است.",
              }}
            />
            <ul className="mt-5 mr-6 list-disc list child:text-xs flex flex-col gap-y-2 child:font-DanaMedium">
              <li>امکان تغییر نام کاربری وجود دارد.</li>
              <li>نام کاربری هم میتواند انگلیسی و هم فارسی باشد.</li>
              <li>امکان تغییر ایمیل کاربری وجود دارد.</li>
            </ul>
            {/* radio role inputs */}
            <div className="flex gap-6">
              <div className="basis-[50%] h-[144px] rounded-lg border border-gray_base/25 relative">
                <div
                  onClick={() => setRoleChecked("OWNER")}
                  className={`flex tr-300 freelance-backdrop flex-col gap-2 justify-center
                  items-center  my-auto absolute inset-0 z-20 ${
                    roleChecked == "OWNER" ? "bg-blue_base/55" : "bg-white"
                  }`}
                >
                  <label
                    htmlFor="owner"
                    className="flex flex-col justify-center gap-y-1 w-full h-full"
                  >
                    <FiBriefcase className="w-10 h-[36px] text-blue_base mx-auto" />
                    <span className="font-DanaBold text-lg text-black_base text-center">
                      کارفرما هستم
                    </span>
                  </label>
                </div>
                <input
                  checked={watch("role") === "OWNER"}
                  type="radio"
                  name="role"
                  id="owner"
                  value="OWNER"
                  {...register("role", { required: true })}
                  className="flex owner-radio w-full h-full absolute invisible z-10"
                />
              </div>
              <div className="basis-[50%] h-[144px] rounded-lg border border-gray_base/25 relative">
                <div
                  onClick={() => setRoleChecked("FREELANCER")}
                  className={`flex tr-300 freelance-backdrop flex-col gap-2 justify-center
                   items-center  my-auto absolute inset-0 z-20 ${
                     roleChecked === "FREELANCER" ? "bg-blue_base/55" : "bg-white"
                   }`}
                >
                  <label
                    htmlFor="freelancer"
                    className="flex flex-col justify-center gap-y-1 w-full h-full"
                  >
                    <LuMonitor className="w-10 h-[36px] text-blue_base mx-auto" />
                    <span className="font-DanaBold text-lg text-black_base text-center">
                      فریلنسر هستم
                    </span>
                  </label>
                </div>
                <input
                  checked={watch("role") === "FREELANCER"}
                  type="radio"
                  name="role"
                  id="freelancer"
                  value="FREELANCER"
                  {...register("role", { required: true })}
                  className="flex freelancer-radio w-full h-full absolute invisible z-10"
                />
              </div>
            </div>
            <button
              type="submit"
              className={`largeBtn tr-300  hover:bg-primary-900 rounded-lg text-center text-white bg-primary-800 ${
                !roleChecked
                  ? "disabled:opacity-55 bg-primary-500 hover:bg-primary-500  text-white/20"
                  : ""
              }`}
            >
              {isProfileLoading ? (
                <Loader height="26" color="rgb(255,255,255)" />
              ) : (
                "تایید"
              )}
            </button>
          </div>
        </form>
      </div>
    </Auth>
  );
}

export default CompleteProfile;
