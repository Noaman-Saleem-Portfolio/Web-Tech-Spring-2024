import React from "react";

const AddBook = () => {
  return (
    <div className="border-2 border-blue-800/50 w-[50%] mx-auto mt-[50px] flex flex-col p-6 gap-10">
      <input
        className="border-2 border-blue-800/50 p-2 rounded-[5px]"
        type="text"
        placeholder="Book Title"
        name="title"
      />
      <input
        className="border-2 border-blue-800/50 p-2 rounded-[5px]"
        type="number"
        placeholder="Book Title"
        name="price"
      />
      <textarea
        className="border-2 border-blue-800/50 p-2 rounded-[5px]"
        name="description"
        placeholder="Type decription..."
      ></textarea>
      <input
        className="border-2 border-blue-800/50 p-2 rounded-[5px]"
        type="file"
        name="photo"
      />
      <button className="bg-blue-500 text-white w-[200px] mx-auto py-1 hover:bg-blue-800">
        Add to Database
      </button>
    </div>
  );
};

export default AddBook;
