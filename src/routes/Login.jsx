import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import bg from "/images/bg.png";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

const Login = () => {

  const { updateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handelSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("")
    const formData = new FormData(e.target);

    const username = formData.get("username");
    const password = formData.get("password");
 
    try {
      const res = await axios.post(
        "http://localhost:8000/server/auth/login",
        {
          username,
          password,
        },
        { withCredentials: true }
      );
     
      updateUser(res.data)
      console.log(res);
      navigate("/");
    } catch (error) {
      // console.log(error)
      setError(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div id="register" className="flex h-full w-full px-5">
      <div
        className="flex justify-center flex-col items-center h-full w-3/5 "
        id="formcontainer"
      >
        <h1 className="text-2xl capitalize mb-5 font-semibold">
          login an account
        </h1>
        <form
          onSubmit={handelSubmit}
          className="flex flex-col item-center gap-5 text-center size-80 "
        >
          <input
            type="test"
            name="username"
            placeholder="username"
            className="text-center border p-2 outLine-none"
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            className="text-center border p-2 outLine-none"
          />
          <button
            disabled={isLoading}
            type="submit"
            className="p-full bg-gray-400 p-2"
          >
            Login
          </button>
          {error && <span>error</span>}

          <Link className="underline" to="/register">
            {" "}
            i have no account ?
          </Link>
        </form>
      </div>
      <div className="w-2/5" id="imagecontainer">
        <img src={bg} alt="" />
      </div>
    </div>
  );
};

export default Login;
