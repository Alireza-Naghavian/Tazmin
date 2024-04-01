import React from 'react'
import useUserList from '../hooks/useUserList';
import Loader from '../../../ui/Loader';
import Empty from '../../../ui/Empty';
import Table from '../../../ui/Table';
import UserRow from './UserRow';

function UserManageMent() {
   const  {isLoading,users}= useUserList();

    if (isLoading)
    return (
      <div className="w-full lg:col-span-9 col-span-12 flex justify-center items-center relative  row-span-5">
        <div className="z-20 w-full mx-auto flex justify-center absolute">
          <Loader />
        </div>
        <div className=" blur-md bg-gray-300 absolute w-full h-full  z-10"></div>
      </div>
    );
  if (!users.length)
    return (
      <div className="lg:col-span-9 col-span-12  row-span-6 bg-gray_base/25 max-h-[550px] overflow-y-auto overflow-x-auto bg-slate-50 rounded-lg shadow-md w-full px-4 xl:px-20 pb-6">
        <Empty resourceName={"کاربری "} />
      </div>
    );
  return (
    <div className="lg:col-span-9 col-span-12 lg:order-3 order-2   row-span-6 lg:max-h-[550px] max-h-[450px]  overflow-y-auto overflow-x-auto bg-slate-50 rounded-lg shadow-md w-full px-4 xl:px-20 pb-6 ">
     
      {users &&
        users.map((user) => {
          return (
            <Table key={user?._id}>
              <Table.Header cols={"grid-cols-5 "}>
                <th>نام</th>
                <th>نقش</th>
                <th> جزییات</th>
                <th>وضعیت</th>
                <th>عملیات</th>
              </Table.Header>

              <Table.Body>
             <UserRow user={user}/>
              </Table.Body>
            </Table>
          );
        })}
    </div>
  );
}

export default UserManageMent