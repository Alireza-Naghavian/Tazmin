import Valid_text_field from "../../ui/Valid_text_field";

function StepForm_3({ register, errors }) {
  return (
    <div className="flex flex-col mt-4">
      <Valid_text_field
        name={"budget"}
        label={"بودجه پروژه"}
        type={"number"}
        required
        errors={errors}
        register={register}
        validationSchema={{ required: "اضافه کردن بودجه الزامی است" }}
      />
      <span className="text-xs font-Dana text-gray_base mr-2 mt-2">
        لطفا بودجه مد نظر خود را به{" "}
        <span className="font-extrabold">تومان</span> وارد کنید. (دقت کنید که
        هنگام وارد کردن باید زبان دستگاه شما انگلیسی باشد)
      </span>
    </div>
  );
}

export default StepForm_3;
