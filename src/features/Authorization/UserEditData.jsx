import React from 'react'
import Modal from '../../ui/Modal'
import Valid_text_field from '../../ui/Valid_text_field'
import LargeBtn from '../../ui/LargeBtn';
import useUpdateProfile from './hooks/useUpdateProfile';
import Loader from '../../ui/Loader';
import { useQueryClient } from '@tanstack/react-query';

function UserEditData({isOpen,setIsOpen,register,errors,handleSubmit,reset}) {
    const queryClient = useQueryClient();
    const {isEditLoading,updateProfile} = useUpdateProfile();
    const subEditHandler =(data)=>{
        updateProfile(data,{
            onSuccess:()=>{
                queryClient.invalidateQueries({queryKey:["user"]})
                setIsOpen(false)
                reset();
            }
        })
    }
  return (
    <Modal setIsOpen={setIsOpen} isOpen={isOpen} modal_Title={"ویرایش"}>
          <form onSubmit={handleSubmit(subEditHandler)} className="w-full  flex flex-col gap-y-4 mt-6">
            <Valid_text_field
              label={"نام کاربری"}
              register={register}
              name={"name"}
              errors={errors}
              required
              validationSchema={{
                required: "پر کردن این فیلد الزامی است",
                minLength: {
                  value: 3,
                  message: "نام کاربری باید حداقل دارای سه کاراکتر باشد",
                },
              }}
            />
            <Valid_text_field
              label={"ایمیل"}
              register={register}
              name={"email"}
              errors={errors}
              required
              type="email"
              validationSchema={{
                required: "پر کردن این فیلد الزامی است",
              }}
            />
            <label htmlFor={"bio"} className="font-Dana text-gray_base  ">
              بیوگرافی
              <span className="text-blue_base">*</span>
            </label>
            <textarea
              placeholder="یک بیوگرافی مختصر از خود بنویسید..."
              className="w-full mt-0 max-w-2xl max-h-[150px] pt-2 pr-4 
              placeholder:text-sm
             text-black_base  border  border-gray_base/25 flex 
              items-start rounded-md focus:outline-none"
              name="biography"
              {...register("biography", {
                required: "پر کردن این فیلد الزامی است.",
                minLength: {
                  value: 3,
                  message: "عنوان مورد نظر باید حداقل دارای 3 کاراکتر باشد",
                },
              })}
              id="bio"
              cols="30"
              rows="4"
            ></textarea>
         

            <LargeBtn type={"submit"}>{isEditLoading ? <Loader height="26" color="rgb(255,255,255)"/> :"تایید"}</LargeBtn>
           
          </form>
        </Modal>
  )
}

export default UserEditData