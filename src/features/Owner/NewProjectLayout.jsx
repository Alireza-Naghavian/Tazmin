import React, { useState } from "react";
import StepCounter from "../../ui/StepCounter";
import useGetAllCategories from "../../hooks/useGetAllCategories";
import { useForm } from "react-hook-form";
import LargeBtn from "../../ui/LargeBtn";
import StepForm_1 from "./StepForm_1";
import StepForm_2 from "./StepForm_2";
import StepForm_3 from "./StepForm_3";
import DatePickerField from "../../ui/DatePickerField";
import { useQueryClient } from "@tanstack/react-query";
import useCreateProject from "./hooks/useCreateProject";
import Loader from "../../ui/Loader";
import { PiWarningDiamondBold } from "react-icons/pi";

function NewProjectLayout() {
  const [renderStep, setRenderStep] = useState(0);
  const [date, setDate] = useState(new Date());
  const queryClient = useQueryClient();
  const { createProject, isCreateLoading } = useCreateProject();
  const [tags, setTags] = useState([]);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { categories } = useGetAllCategories();
  const submitProjectHandler = (data) => {
    const newProject = {
      ...data,
      tags,
      deadline: new Date(date).toISOString(),
    };
    createProject(newProject, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["projects"] });
        reset();
      },
    });
  };
  return (
    <div className="flex md:flex-row flex-col w-full gap-x-6 ">
      <div className="md:w-[60%] w-full order-2 md:order-1  flex-grow">
        <form
          onSubmit={handleSubmit(submitProjectHandler)}
          className="flex flex-col">
          <h2 className="font-DanaBold text-black_base text-2xl leading-[43px]  my-0 mx-0 mb-6">
            ایجاد یک پروژه
          </h2>
          <div className="flex flex-col  ">
            <StepCounter title={" می خواهید چه کاری برای شما انجام شود؟"}>
              1
            </StepCounter>
            <StepForm_1
              categories={categories}
              setRenderStep={setRenderStep}
              register={register}
            />

            {renderStep && renderStep === 2 ? (
              <div>
                <div className="mt-12 flex flex-col">
                  <StepCounter title={"درباره پروژه خود بیشتر بگویید"}>
                    2
                  </StepCounter>
                  <StepForm_2
                    tags={tags}
                    setTags={setTags}
                    register={register}
                    setRenderStep={setRenderStep}
                    errors={errors}
                  />
                </div>
                <div className="mt-8">
                  <StepCounter title={"بودجه مورد نظر شما چقدر است؟"}>
                    3
                  </StepCounter>
                  <StepForm_3
                    register={register}
                    setRenderStep={setRenderStep}
                    errors={errors}
                  />
                </div>
                <div className="mt-12">
                  <StepCounter
                    title={"زمان مورد نظر شما برای تکمیل پروژه چقدر است؟"}
                  >
                    4
                  </StepCounter>

                  <DatePickerField
                    date={date}
                    setDate={setDate}
                    label={"زمان مدنظر (deadline) "}
                  />
                  <div className="mt-4">
                    {" "}
                    <LargeBtn type={"submit"}>
                      {isCreateLoading ? (
                        <Loader height="26" color="rgb(255,255,255)" />
                      ) : (
                        "ایجاد پروژه"
                      )}
                    </LargeBtn>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </form>
      </div>
      <div className="md:w-[40%] order-1 md:order-2 mb-6 md:mb-0 w-full" >
        <div className="w-full max-w-[320px] bg-gray_base/25 rounded-lg py-2 px-4">
          <span className="text-black_base flex items-center gap-x-2  mb-2 ">
            <PiWarningDiamondBold />
            راهنما
          </span>
          <p className="text-xs text-black_base  font-Dana leading-7 mr-2">
            نام پروژه برای جذب فریلنسرها مهم است. در کوتاه ترین جمله به صورت
            واضح توضیح دهید که چه می خواهید.
          </p>
        </div>
      </div>
    </div>
  );
}

export default NewProjectLayout;
