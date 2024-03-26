
function Table({ children }) {
    return (
      <div className="bg-secondary-0 overflow-x-auto   mx-auto ">
        <table className="table w-full">{children}</table>
      </div>
    );
  }
  const TableHead = ({ children ,cols}) => {
    return (
      <thead className="flex justify-between text-white bg-blue_base mt-9 rounded-lg items-center w-full my-auto h-full ">
        <tr className={`grid ${cols} w-full my-auto
        text-center
         lg:text-base text-sm   child:mx-auto  
        rounded-lg child:py-4`}>{children}</tr>
      </thead>
    );
  };
  const TableBody = ({ children }) => {
    return <tbody className="">{children}</tbody>;
  };
  const TableRow = ({ children ,cols}) => {
    return <tr className={`grid ${cols}
     w-full child:my-auto child:text-center child:mx-auto   
    mt-6 child:text-gray-700 rounded-lg child:text-sm child:text-wrap child:max-w-[80%]
   
     child:font-DanaBold bg-gray-300   child:py-2
    `}>{children}</tr>;
  };
  Table.Header = TableHead;
  Table.Body = TableBody;
  Table.Row = TableRow;

export default Table