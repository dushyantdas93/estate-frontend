import React, { useContext, useState } from "react";
import logo from "/images/logo (1).png";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const [open, setOpen] = useState(true);
  const { currentUser } = useContext(AuthContext);

  // console.log(currentUser)

  return (
    <nav
      className="flex justify-between  items-center h-[80px]  px-5 relative
    "
    >
      <div className="flex items-center gap-5 flex-3 ">
        <a href="" className="flex items-center gap-3">
          <img src={logo} className="h-[28px]" />
          <span className="font-bold text-[20px] ">DasEstate</span>
        </a>
        <div className="hidden lg:flex items-center gap-5">
          <Link to="/" className="font-semibold">
            home
          </Link>

          <Link to="/contact" className="font-semibold">
            contact
          </Link>

          <Link to="/about" className="font-semibold">
            about
          </Link>

          <Link to="/agenLink" className="font-semibold">
            agent
          </Link>
        </div>
      </div>

      <div className="flex w-[40%] gap-5 font-semibold h-full justify-end pr-6  items-center lg:bg-[#fcf5f3]">
        <div className="hidden lg:flex">

          {currentUser ? (
            <div className="flex items-center font-bold gap-5">
              <img
                src={ logo}
                className="w-10 h-10 object-fill rounded-full"
              />
              <span>{currentUser.user.username}</span>
              {/* <span>dushyant</span> */}
              <Link
                to="/profile"
                className="py-[12px] px-[24px] cursor-pointer border-none bg-[#fece51] relative"
              >
                <div
                  className="absolute bottom-9 bg-red-700 text-white right-0 px-1 rounded-full "
                  id="notification"
                >
                  3
                </div>
                <span>Profile</span>
              </Link>
            </div>
          ) : (
            <>
              <Link to="/login" className=" py-2 rounded-lg px-6 ">
                signIn
              </Link>
              <Link
                to="/register"
                className=" py-2 rounded-lg  px-6 bg-[#fece51]"
              >
                signUp
              </Link>
            </>
          )}
        </div>
        <div className="">
          <img
            src="images/menu.png"
            alt=""
            className="lg:hidden h-[28px] flex z-100"
            onClick={() => setOpen(!open)}
          />
        </div>
        {!open && (
          <div
            className={`flex flex-col bg-black h-screen text-white w-[50%] absolute top-0 right-0 items-center justify-center gap-10`}
          >
            <img
              src="images/menu.png"
              alt=""
              className="lg:hidden h-[28px] flex z-100 absolute top-6 right-11 border border-white rounded-full "
              onClick={() => setOpen(!open)}
            />
            <Link to="/" className="font-semibold">
              home
            </Link>

            <Link to="/contact" className="font-semibold">
              contact
            </Link>

            <Link to="/about" className="font-semibold">
              about
            </Link>

            <Link to="/agent" className="font-semibold">
              agent
            </Link>
            <Link to="/login" className=" py-2 rounded-lg px-6 bg-blue-500 ">
              signIn
            </Link>
            <Link
              to="/register"
              className=" py-2 rounded-lg  px-6 bg-[#fece51]"
            >
              signUp
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
