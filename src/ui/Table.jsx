
function Table({ children }) {
    return (
      <div className="">
        <table className="lg:table flex justify-center   w-full">{children}</table>
      </div>
    );
  }
  const TableHead = ({ children ,cols}) => {
    return (
      <thead className="flex justify-between  text-white  
       bg-blue_base mt-9 rounded-r-lg lg:rounded-lg
       items-center lg:w-full w-fit flex-col lg:flex-row 
       my-auto h-full ">
        <tr className={`lg:grid flex flex-col
         justify-end ${cols} w-full my-auto
        text-center
         lg:text-base text-sm  px-2 lg:px-0 
          child:mx-auto  
        rounded-lg child:py-4`}>{children}</tr>
      </thead>
    );
  };
  const TableBody = ({ children }) => {
    return <tbody className="flex w-[60%] 
     lg:w-auto child:rounded-l-lg lg:child:rounded-lg ">{children}</tbody>;
  };
  const TableRow = ({ children ,cols}) => {
    return <tr className={`lg:grid flex flex-col ${cols}
     w-full child:my-auto child:text-center child:mx-auto   
    mt-[35px] lg:mt-6 child:text-gray-700 lg:rounded-lg child:text-sm 
    child:text-wrap child:max-w-[80%]
     child:font-DanaBold bg-gray-300  
      child:py-2
    `}>{children}</tr>;
  };
  Table.Header = TableHead;
  Table.Body = TableBody;
  Table.Row = TableRow;

export default Table