import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import home from "/images/home1.jpeg";
import { AuthContext } from '../context/AuthContext';

const ProfileUpdatePage = () => {

  const {currentUser, updateuser}  = useContext(AuthContext)
  return (
    <div id="register" className="flex h-full w-full px-5">
      <div
        className="flex justify-center flex-col items-center h-full w-3/5 "
        id="formcontainer"
      >
        <h1 className="text-2xl capitalize mb-5 font-semibold">
          update an account
        </h1>
        <form className="flex flex-col item-center gap-5 text-center size-80 ">
          <input
            type="text"
            name="username"
            placeholder="Username"
            defaultValue={currentUser.user.username}
            className="text-center border p-2 outLine-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            defaultValue={currentUser.user.email}
            className="text-center border p-2 outLine-none"
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            className="text-center border p-2 outLine-none"
          />
          <button type="submit" className="p-full bg-gray-400 p-2 capitalize">
            update
          </button>
          {/* {error && <span>{error}</span>} */}
        </form>
      </div>
      <div
        className="w-2/5 h-full bg-[#fcf5f3] flex items-center justify-center"
        id="imagecontainer"
      >
        <img
          src={currentUser.user.avatar || home}
          className="size-72 flex items-center justify-center mb-5"
        />
      </div>
    </div>
  );
}


export default ProfileUpdatePage