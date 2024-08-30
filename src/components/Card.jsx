import React from 'react'
import { Link } from 'react-router-dom';
import logo from "/images/home1.jpeg";
import { FaBed, FaLocationDot } from "react-icons/fa6";
import { IoSaveSharp } from "react-icons/io5";
import { IoMdChatboxes } from "react-icons/io";
import { BiBath } from "react-icons/bi";

const Card = ({ item }) => {
  return (
    <div className='flex border rounded-sm'>
      <Link to={`/${item.id}`}>
        <img src={logo} alt="" className='h-[200px] rounded-sm' />
      </Link>
      <div className=" flex flex-col h-full w-[80%] justify-center pl-5 pt-5 gap-5 p-2 ">
        <h2 className='font-semibold'>
          <Link to={`/${item.id}`} >{item.title}</Link>
        </h2>
        <p className='flex items-center text-[#888]'>
          <FaLocationDot />
          {item.address}
        </p>
        <p className="rounded-sm p-[5px] bg-yellow-300 w-20 text-center">$ {item.price}</p>
        <div className=" flex gap-4 justify-between" id="bottom">
          <div className="flex gap-4">
          <div className="flex items-center gap-2 bg-gray-200 px-1 rounded-sm" id="features">
            <FaBed />
            <span>
              {item.bedroom} Bedroom
            </span>
          </div>
          <div className="flex items-center gap-2 bg-gray-200 p-1 rounded-sm" id="features">
          <BiBath />
            <span>
              {item.bathroom} bathroom
            </span>
          </div>
          </div>
          <div className="flex items-center gap-5 pr-3 " id="icons">
            <IoSaveSharp className='bg-gray-200 h-5 w-5 border-sm rounded-sm'/>
            <IoMdChatboxes className='bg-gray-200 h-5 w-5 border-sm rounded-sm'/>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Card