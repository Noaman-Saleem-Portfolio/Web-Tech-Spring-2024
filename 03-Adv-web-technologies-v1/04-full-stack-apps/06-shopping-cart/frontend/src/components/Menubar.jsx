import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../api/internal";
import { resetUser } from "../store/userSlice";
import toast from "react-hot-toast";
import { BsCart } from "react-icons/bs";
import { IconContext } from "react-icons";

const Menubar = () => {
  const isAuthenticated = useSelector((state) => state.user.auth);
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  const username = useSelector((state) => state.user.username);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignout = async () => {
    // console.log("signout");
    try {
      const response = await logoutUser();
      // console.log(response);
      // console.log(response instanceof Error);
      if (response instanceof Error) {
        // to handle server down error
        if (response.code == "ERR_NETWORK") {
          throw new Error(response.message);
        }
        throw new Error(response.response.data.message);
      }
      if (response.status === 200) {
        toast.success(response.data.message);
        // 1. reset user

        dispatch(resetUser());
        // 2. redirect -> homepage
        navigate("/");
      }
    } catch (err) {
      toast.error(err.message);
    }
  };
  return (
    <nav className="bg-blue-950 h-16 flex items-center">
      <div className="bg-blue-950 container mx-auto flex justify-between items-center  font-medium">
        {/* Logo */}
        <div className="Logo text-white">
          <Link to={"/"}>BookBerry</Link>
        </div>
        {/* Left Nav */}
        <div className="text-white  space-x-12">
          <Link to={"/"}>Home</Link>
          <Link to={"/add-book"}>Add Book</Link>
          <Link to={"/books"}>Books</Link>
          {/* <Link to={"/book-update/:id"}>Update Book</Link> */}
        </div>

        {/* Right Nav */}
        <div className="text-white  space-x-8 ">
          {isAuthenticated ? (
            <div className="space-x-8">
              <Link>{username}</Link>
              <Link onClick={handleSignout}>Signout</Link>
            </div>
          ) : (
            <div className="space-x-8 relative">
              <Link to={"/cart"}>
                <IconContext.Provider value={{ size: "25px", className: "" }}>
                  <BsCart className="inline-block" />
                </IconContext.Provider>
              </Link>
              <span
                className="absolute  left-[-17px] top-[7px] "
                style={{
                  width: "1em",
                  height: "1em",
                  boxSizing: "initial",

                  background: "yellow",
                  border: "0.1em solid #666",
                  color: "#666",
                  textAlign: "center",
                  borderRadius: "50%",

                  lineHeight: "1em",
                  boxSizing: "content-box",
                }}
              >
                {cartTotalQuantity}
              </span>
              <Link to={"/login"}>Login</Link>
              <Link to={"/signup"}>Signup</Link>
            </div>
          )}
        </div>
      </div>
      {/* Container */}
    </nav>
  );
};

export default Menubar;
