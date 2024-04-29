import React from "react";

const UserData = () => {
  return (
    <div className="container mx-auto flex  h-[100vh]">
      <div className="flex justify-between items-start gap-2 w-[100%] ">
        <div className="left border-2  border-black w-[50%]  p-8 mt-14">
          <div className="form-control mb-5">
            <input
              className="border-2 p-2 outline-red-800 w-[70%]"
              type="text"
              name="name"
              placeholder="Name"
            />
          </div>
          <div className="form-control mb-5">
            <input
              className="border-2 p-2 outline-red-800 w-[70%]"
              type="text"
              name="age"
              placeholder="Age"
            />
          </div>
          <div className="form-control mb-5">
            <input
              className="border-2 p-2 outline-red-800 w-[70%]"
              type="text"
              name="contact"
              placeholder="Contact"
            />
          </div>
        </div>
        <div className="right border-2 border-black	 w-[50%] p-8 h-[260px] mt-14">
          <h2 className="text-[24px] font-bold mb-[30px]">Name : Nomi</h2>
          <h2 className="text-[24px] font-bold mb-[30px]">Age : 18</h2>
          <h2 className="text-[24px] font-bold mb-[30px]">Contact : 123456</h2>
        </div>
      </div>
    </div>
  );
};

export default UserData;
