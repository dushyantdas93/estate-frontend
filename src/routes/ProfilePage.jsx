import React, { useContext, useEffect } from 'react'
import home from "/images/home1.jpeg"
import List from "../components/List.jsx"
import Chat from '../components/Chat.jsx'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext.jsx'

const ProfilePage = () => {

  const { currentUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate()
  
 
  const handleLogout = async () => {
    try {
      const res = await axios.post("http://localhost:8000/server/auth/logout")
      // localStorage.removeItem("user")
      updateUser(null)
      navigate("/")
    } catch (error) {
      
    }
  }
  return (
    <div id="profilepage" className=" px-5 flex h-full">
      <div className="w-[60%] px-5 overflow-auto h-full " id="details">
        <div className="flex gap-5 flex-col" id="wrapper">
          <div className=" flex items-center justify-between" id="title">
            <h1 className="text-2xl font-semibold">User Information</h1>
            <button className="text-lg bg-[#fece51] font-semibold p-2 rounded-sm">
              <Link to="/profile/update"> Update Profile</Link>
            </button>
          </div>
          <div className="flex flex-col justify-center gap-3" id="info">
            <span className="flex items-center gap-5">
              Avatar :{" "}
              <img
                src={currentUser.user.avatar || home}
                className="h-10 w-10 rounded-full"
              />
            </span>
            <span className="flex items-center gap-5">
              Username : <b>{currentUser.user.username}</b>
            </span>
            <span className="flex items-center gap-5">
              Email : <b>{currentUser.user.email}</b>
            </span>
            <button
              className="bg-red-100 w-20 rounded-sm"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
          <div className=" flex items-center justify-between" id="title">
            <h1 className="text-2xl font-semibold">My List</h1>
            <button className="text-lg bg-[#fece51] font-semibold p-2 rounded-sm">
              Create New Profile
            </button>
          </div>
          <List />
          <div className=" flex items-center justify-between" id="title">
            <h1 className="text-2xl font-semibold">Save List</h1>
            <button className="text-lg bg-[#fece51] font-semibold p-2 rounded-sm">
              Create New Profile
            </button>
          </div>
          <List className="" />
        </div>
      </div>
      <div className="bg-[#fcf5f3] h-full w-[40%]" id="chat">
        <Chat />
      </div>
    </div>
  );
}

export default ProfilePage