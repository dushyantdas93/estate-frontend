import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import bg from "/images/bg.png";
import axios from 'axios';
// import apiRequest from '../lib/apiRequest.js';

export const Register = () => {
  const navigate = useNavigate()

    const [error,setError] = useState("")
    const handelSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)

        const username = formData.get("username")
        const email = formData.get("email");
        const password = formData.get("password");

       
        try {
             const res =  axios.post("http://localhost:8000/server/auth/register", {
               username,
               email,
               password,
             });
            
            navigate("/login")
            
        } catch (error) {
            // console.log(error)
            setError(error.response.data.message)
        }

        // console.log(username,email,password)
        
    }
  return (
    <div id="register" className='flex h-full w-full px-5'>
      <div className="flex justify-center flex-col items-center h-full w-3/5 " id="formcontainer">
          <h1 className='text-2xl capitalize mb-5 font-semibold'>create an account</h1>
        <form onSubmit={handelSubmit} className="flex flex-col item-center gap-5 text-center size-80 ">
          <input type="text" name="username" placeholder="Username" className='text-center border p-2 outLine-none' />
          <input type="email" name="email" placeholder="Email" className='text-center border p-2 outLine-none' />
          <input type="password" name="password" placeholder="password" className='text-center border p-2 outLine-none' />
          <button type="submit" className='p-full bg-gray-400 p-2'>submit</button>
          {error && <span>error</span>}
                  
                  <Link className='underline' to="/login"> do you have an account ?</Link>
        </form>
      </div>
          <div className="w-2/5" id="imagecontainer">
              <img src={bg} alt="" />
      </div>
    </div>
  );
}
