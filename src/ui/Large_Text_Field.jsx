import React from "react";

function Large_Text_Field({
  label,
  register,
  errors,
  placeholder,
  name,
  id,
  required,
  validationSchema,
}) {
  return (
    <div className="relative">
      <label
        className="mb-[.8px] text-base text-gray-800 leading-9 
        font-Dana p-0 block overflow-hidden 
        text-ellipsis max-w-full"
        htmlFor={id}
      >
        {label} {required ? <span className="text-error">*</span> : ""}
      </label>
      <input
        type="text"
        className="w-full inline-flex flex-col relative min-w-0 p-0 m-0 rounded-lg px-2 py-2  border focus:outline-none"
        id={id}
        placeholder={placeholder}
        name={name}
        {...register(name, validationSchema)}
      />
      {errors && errors[name] && (
        <span className="text-error block text-sm mt-5">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}

export default Large_Text_Field;
