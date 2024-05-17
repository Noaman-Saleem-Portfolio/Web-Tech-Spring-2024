import React from "react";

const Login = () => {
  return (
    <div className="border-2 border-blue-800/50 w-[50%] mx-auto mt-[20px] flex flex-col p-6 gap-10">
      <input
        className="border-2 border-blue-800/50 p-2 rounded-[5px]"
        type="text"
        placeholder="Email"
        name="email"
      />
      <input
        className="border-2 border-blue-800/50 p-2 rounded-[5px]"
        type="password"
        placeholder="Password"
        name="password"
      />

      <button className="bg-blue-500 text-white w-[200px] mx-auto py-1 hover:bg-blue-800">
        Login
      </button>
    </div>
  );
};

export default Login;
