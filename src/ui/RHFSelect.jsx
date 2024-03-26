function RHFSelect({ label, name, register, options, required }) {
  return (
    <div className="flex flex-col w-full items-start ">
      <label className="mb-2 block text-secondary-700" htmlFor={label}>
        {label} {required&& <span className="text-error">*</span>}
      </label>
      <select className="w-full rounded-xl px-4 py-2 flex bg-blue_base/25  justify-start focus:outline-none" {...register(name)} id={name}>
        {options&& options.map((option) => {
          return (
            <option className="focus:outline-none" key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default RHFSelect;
