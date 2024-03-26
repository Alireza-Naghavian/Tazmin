function Valid_text_field({
  name,
  label,
  placeHolder,
  register,
  type = "text",
  required,
  errors,
  validationSchema,
  py = "py-2"
}) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="font-Dana text-gray_base mr-2 mb-2">
        {label}
        {required && <span className="text-blue_base">*</span>}
      </label>
      <input
      className={`w-full mt-0 max-w-2xl  pr-4 ${py} text-black_base  border  border-gray_base/25 flex  items-start rounded-md focus:outline-none`}
        type={type}
        id={name}
        min={0}
        placeholder={placeHolder}
        {...register(name, validationSchema)}
      />
      {errors && errors[name] && (
        <span className="text-error block text-sm mt-3">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}

export default Valid_text_field;


