import React, { useState } from 'react'
import logo from "/images/logo (1).png";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const user = true ;
  
  const [open ,setOpen] = useState(true)
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
          <a href="" className="font-semibold">
            home
          </a>

          <a href="" className="font-semibold">
            contact
          </a>

          <a href="" className="font-semibold">
            about
          </a>

          <a href="" className="font-semibold">
            agent
          </a>
        </div>
      </div>

      
      <div className="flex w-[40%] gap-5 font-semibold h-full justify-end pr-6  items-center lg:bg-[#fcf5f3]">
        <div className="hidden lg:flex">
          {user ? (<div className='flex items-center font-bold gap-5'>
            <img src={logo} className="w-10 h-10 object-fill rounded-full" />
            <span>dushyant das</span>
            <Link to="/profile" className='py-[12px] px-[24px] cursor-pointer border-none bg-[#fece51] relative'>
            <div className="absolute bottom-9 bg-red-700 text-white right-0 px-1 rounded-full " id="notification">3</div>
            <span>Profile</span>

            </Link>
          </div>) : ( <>
            <a href="" className=" py-2 rounded-lg px-6 ">
            signIn
          </a>
          <a href="" className=" py-2 rounded-lg  px-6 bg-[#fece51]">
            signUp
          </a>
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
            <a href="" className="font-semibold">
              home
            </a>

            <a href="" className="font-semibold">
              contact
            </a>

            <a href="" className="font-semibold">
              about
            </a>

            <a href="" className="font-semibold">
              agent
            </a>
            <a href="" className=" py-2 rounded-lg px-6 bg-blue-500 ">
              signIn
            </a>
            <a href="" className=" py-2 rounded-lg  px-6 bg-[#fece51]">
              signUp
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar