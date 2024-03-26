import Valid_text_field from "../../ui/Valid_text_field";
import CurrencyInput from "react-currency-input-field";
function StepForm_3({ register, errors }) {
  return (
    <div className="flex flex-col mt-4">
      <div className="flex flex-col">
        <label htmlFor="budget" className="font-Dana text-gray_base mr-2 mb-2">
          بودجه پروژه
          <span className="text-blue_base">*</span>
        </label>
        <CurrencyInput
          className={`w-full mt-0 max-w-2xl py-2 pr-4  text-black_base  border  border-gray_base/25 flex  items-start rounded-md focus:outline-none`}
          placeholder="2,000,000 تومان"
          allowDecimals={false}
          name="budget"
          id={"budget"}
          min={0}
          {...register("budget", { required: "اضافه کردن بودجه الزامی است" })}
          step={10}
        />
        {errors && errors["budget"] && (
          <span className="text-error block text-sm mt-3">
            {errors["budget"]?.message}
          </span>
        )}
      </div>

      <span className="text-xs font-Dana text-gray_base mr-2 mt-2">
        لطفا بودجه مد نظر خود را به{" "}
        <span className="font-extrabold">تومان</span> وارد کنید. (دقت کنید که
        هنگام وارد کردن باید زبان دستگاه شما انگلیسی باشد)
      </span>
    </div>
  );
}

export default StepForm_3;
