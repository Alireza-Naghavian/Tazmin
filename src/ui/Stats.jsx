import React from "react";
function Stats({children}) {
  return (
      <div className="w-full">
        <div className="pt-2 pr-2">
          <h3 className="text-lg font-DanaBold text-black_base">آمار کلی:</h3>
          <p className="font-DanaMedium text-black_base">
            در یک نما خلاصه ای از آمار خود را مشاهده کنید.
          </p>
        </div>
       {children}
      </div>
   
  );
}

export default Stats;
