import React from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
function DatePickerField({ label, date, setDate }) {
  return (
    <div className="flex flex-col mt-4">
      <label className="font-Dana text-gray_base mr-1 mb-4">{label}</label>
      <DatePicker
        containerClassName="max-w-fit"
        inputClass="w-full mt-0 max-w-fit h-[40px] bg-blue_base/15 pr-4 
         text-black_base  border  border-gray_base/25 
         flex  items-start rounded-md focus:outline-none"
        onChange={(date) => setDate(date)}
        value={date}
        format="YYYY/MM/DD"
        calendar={persian}
        locale={persian_fa}
        minDate={Date.now()}
      />
    </div>
  );
}

export default DatePickerField;
