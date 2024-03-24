function StepCounter({ children, title }) {
  return (
    <div className="flex gap-x-2">
        <span className="rounded-full text-xs font-DanaBold mt-[2px] flex justify-center py-px  items-start w-4 h-4   border border-primary-800 text-blue_base">
          {children}
        </span>
      <span className="font-DanaMedium text-black_base text-base m-0">
        {title}
      </span>
    </div>
  );
}

export default StepCounter;
