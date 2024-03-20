import React, { useState } from "react";

const Meme = () => {
  const [photo, setPhoto] = useState();

  const changeImageHandler = (e) => {
    // Step 1
    // Retrieve Selected File:
    // const file = e.target.files?.[0];
    const file = e.target.files[0];
    // console.log(e.target.files);
    // console.log(e.target.files[0]);

    // Step 2
    // Create FileReader Object:
    // This line creates a new instance of the FileReader object. FileReader is a built-in JavaScript object that allows reading the contents of files asynchronously.
    const reader = new FileReader();
    console.log(reader);

    // Step 3
    // Read File Contents:
    //  If a file is selected (file is not undefined), the FileReader is instructed to read the selected file as a data URL using readAsDataURL(). This method reads the contents of the specified File and creates a data URL representing the file's data.
    if (file) {
      reader.readAsDataURL(file);

      // Step 4
      //   Handle File Load Completion:
      //   reader.onloadend = () => { ... }: This sets up an event handler that will be called when the FileReader has finished reading the file. Inside this handler:
      reader.onloadend = () => {
        if (typeof reader.result === "string") setPhoto(reader.result);
      };
    }
  };

  return (
    <div className="container mx-auto flex flex-col items-center justify-around h-[100vh]">
      <div className="form-data">
        <div className="input-file">
          <label htmlFor="meme-image">Upload Meme Image:</label> {"      "}
          <input type="file" />
        </div>

        <div className="meme-text mt-4 ">
          <input
            type="text"
            placeholder="Enter Meme Text"
            className="border-2 p-2 focus:outline-none w-[600px]"
          />
        </div>
      </div>

      <div className="relative">
        {/* Conditional Rendering */}
        {photo && <img className=" w-[500px] " src={photo} alt="New Image" />}
        <span className="absolute text-[30px]  top-[60%] left-[50%] translate-x-[-50%]  w-[90%] text-white font-bold ">
          Dummy Text
        </span>
      </div>
    </div>
  );
};

export default Meme;
