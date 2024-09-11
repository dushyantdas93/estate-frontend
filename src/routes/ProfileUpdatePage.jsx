import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import UploadWidget from "../components/UploadWidget";
// import UploadWidget from "../../components/uploadWidget/UploadWidget";

function ProfileUpdatePage() {
  const { currentUser, updateUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [avatar, setAvatar] = useState([]);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const { username, email, password } = Object.fromEntries(formData);

    try {

      const res = await axios.put(`http://localhost:8000/server/user/${currentUser.user.id}`, {
        username,
        email,
        password,
        avatar:avatar[0]
      },
      { withCredentials: true });


      // console.log(res.data)
      updateUser(res.data);
      navigate("/profile");
    } catch (err) {
      console.log(err);
      setError(err.response.data.message);
    }
  };
  return (
    <div id="profileupdate" className="flex h-full w-full px-5">
      <div
        className="flex justify-center flex-col items-center h-full w-3/5 "
        id="formcontainer"
      >
        <h1 className="text-2xl capitalize mb-5 font-semibold">
          update an account
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col item-center gap-5 text-center size-80 ">
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
            className="text-center border p-2 outLine-none"/>
          <button type="submit" className="p-full bg-gray-400 p-2 capitalize">
            update
          </button>
         {error && <span>error</span>}
        </form>
      </div>
      <div
        className="w-2/5 h-full bg-[#fcf5f3] flex flex-col items-center justify-center"
        id="imagecontainer"
      >
     
        <img
         src={avatar[0] || currentUser.user.avatar}        className="size-72 flex items-center justify-center mb-5"
        />
        <UploadWidget uwConfig={{
          cloudName:"dywltditz",
          uploadPreset:"ESTATE",
          multiple:false,
          maxImageFileSize:2000000,
          folder:"avatars"
        }}
        setState={setAvatar}
        />
      </div>
    </div>
  );
}


export default ProfileUpdatePage;