import React, {useState} from "react";

const UserData = () => {
    // Method 1
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [contact, setContact] = useState("");

    const handleName = (e) => {
        // console.log("Value Changed");
        setName(e.target.value)
    }

    // Method 2
    const [ details, setDetails] = useState({
        name:"",
        age:"",
        contact:""
    })

    const handleChange = (e) => {
        console.log(e.target.value);
        setDetails((pre) => {
            // console.log(pre);
            return {...pre, [e.target.name]:e.target.value}
        })
    }


    


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
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="form-control mb-5">
            <input
              className="border-2 p-2 outline-red-800 w-[70%]"
              type="text"
              name="age"
              placeholder="Age"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="form-control mb-5">
            <input
              className="border-2 p-2 outline-red-800 w-[70%]"
              type="text"
              name="contact"
              placeholder="Contact"
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <div className="right border-2 border-black	 w-[50%] p-8 h-[260px] mt-14">
          <h2 className="text-[24px] font-bold mb-[30px]">Name : {details.name}</h2>
          <h2 className="text-[24px] font-bold mb-[30px]">Age : {details.age}</h2>
          <h2 className="text-[24px] font-bold mb-[30px]">Contact : {details.contact}</h2>
        </div>
      </div>
    </div>
  );
};

export default UserData;