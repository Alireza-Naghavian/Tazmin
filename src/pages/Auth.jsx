function Auth({ children }) {
  return (
    <div className="container flex items-center flex-col gap-x-6 justify-center my-auto min-h-[100vh]">
      <div className="w-full  sm:max-w-[424px] sm:min-w-[424px] min-w-[300px] flex flex-col gap-x-12 self-center sm:py-12 sm:px-8 pt-12 pr-4 pb-6 pl-4 rounded-lg xs:border-none sm:border sm:border-solid   sm:border-[#D7D8D9]">
        <img
          src="../logo/sample_logo4.png"
          className="text-transparent my-0 mx-auto w-[172px] "
          loading="lazy"
          alt="company-logo"
        />
        {children}
      </div>
    </div>
  );
}

export default Auth;
