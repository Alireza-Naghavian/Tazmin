import React from "react";
import { TagsInput } from "react-tag-input-component";
import Valid_text_field from "../../ui/Valid_text_field";
function StepForm_2({ tags, setTags, register, errors }) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };
  return (
    <div className="flex flex-col mt-8  ">
      <span className=" font-Dana text-gray_base mr-2 mb-2">
        مهارت های مورد نیازتان چیست؟
      </span>
      <TagsInput
        value={tags}
        onChange={setTags}
        name="tags"
        classNames={"placeholder:text-xs"}
        placeHolder="پس از نوشتن مهارت اینتر را فشار دهید."
        onKeyUp={handleKeyDown}
      />
      <span className="text-xs font-Dana text-gray_base mr-2 mt-2">
        مهارت های موردنیاز پروژه را اضافه کنید تا فریلنسرها از آن مطلع شوند.
      </span>
      <div className="flex  flex-col gap-y-2 mt-8">
        <Valid_text_field
          name={"title"}
          label={"عنوان پروژه"}
          register={register}
          errors={errors}
          required
          validationSchema={{
            required: "پر کردن این فیلد الزامی است",
            minLength: {
              value: 3,
              message: "عنوان مورد نظر باید حداقل دارای 3 کاراکتر باشد",
            },
          }}
        />
        <span className="text-xs font-Dana text-gray_base mr-2 mt-1">
          نام پروژه برای جذب فریلنسرها مهم است. در کوتاه ترین جمله به صورت واضح
          توضیح دهید که چه می‌خواهید.
        </span>
      </div>
      <div className="flex flex-col gap-y-2 mt-8">
        <div className="flex flex-col">
          <label
            htmlFor={"desc"}
            className="font-Dana text-gray_base mr-2 mb-2"
          >
            توضیحات پروژه
            <span className="text-blue_base">*</span>
          </label>
          <textarea
            className="w-full mt-0 max-w-2xl max-h-[150px] pt-2 pr-4  text-black_base  border  border-gray_base/25 flex  items-start rounded-md focus:outline-none"
            name="description"
            {...register("description", {
              required: "پر کردن این فیلد الزامی است.",
              minLength: {
                value: 3,
                message: "عنوان مورد نظر باید حداقل دارای 3 کاراکتر باشد",
              },
            })}
            id="desc"
            cols="30"
            rows="4"
          ></textarea>
          <span className="text-xs font-Dana text-gray_base mr-2 mt-1">
            هر چه توضیحات بیشتر و واضح تر باشد به شما کمک می‌کند سریعتر به آنچه
            می‌خواهید برسید.
          </span>
          {errors && (
            <span className="text-error block text-sm mt-3">
              {errors?.message}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default StepForm_2;
