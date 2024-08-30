import React from "react";
import logo from "/images/home1.jpeg";

const Chat = () => {
  return (
    <div className="chat h-full w-full pt-5 flex flex-col gap-5">
      <h1 className="text-2xl font-semibold px-5">Messages</h1>
      <div
        className="h-[50%] w-full  p-5  flex flex-col gap-3 overflow-y-auto"
        id="message"
      >
        {[1, 2, 23, 23, 23].map((item, idx) => (
          <div
            key={idx + "sad"}
            className="flex items-center gap-5 w-full bg-gray-300 p-4 rounded-sm"
            id="messages"
          >
            <img src={logo} className="h-10 rounded-full" />
            <span>dushyant</span>
            <p>Lorem ipsum dolor sit amet consectetu</p>
          </div>
        ))}
      </div>
      <div className="h-[50%] w-full bg-red-200" id="chatBox">
        <div className=" w-full" id="top">
          <div
            className="w-full flex bg-[#fece51] justify-between px-5 items-center py-2"
            id="user"
          >
            <img src={logo} className="h-10 w-10 rounded-full" />
            <span className="font-semibold text-lg capitalize ">dushyant</span>
          </div>
          <span className="font-semibold text-lg capitalize float-end p-5 ">
            x
          </span>
        </div>
        <div className="w-full " id="center">
          <div className="" id="chatMessage">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Dignissimos, doloribus?
            </p>
            <span> 1 hour ago</span>
          </div>
        </div>
        <div className="w-full bg-red-300 flex " id="bottum">
          <textarea name="" id="" className="w-[90%]"></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
