import React, { useState } from "react";
import UploadWidget from "../components/UploadWidget";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const NewPostPage = () => {
  const [value, setValue] = useState("");
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");

  const navigate = useNavigate();

const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const inputs = Object.fromEntries(formData);

  // console.log(inputs)
  const postData = {
    title: inputs.title,
    price: parseInt(inputs.price),
    address: inputs.address,
    city: inputs.city,
    bedroom: parseInt(inputs.bedroom),
    bathroom: parseInt(inputs.bathroom),
    type: inputs.type,
    property: inputs.property,
    latitude: inputs.latitude,
    longitude: inputs.longitude,
    images: images,
  };

  const postDetail = {
    desc: value,
    utilities: inputs.utilities,
    pet: inputs.pet,
    income: inputs.income,
    size: parseInt(inputs.size),
    school: parseInt(inputs.school),
    bus: parseInt(inputs.bus),
    restaurant: parseInt(inputs.restaurant),
  };
  
  try {
    const response = await axios.post("http://localhost:8000/server/post", {
      postData,
      postDetail,
    });

    // Ensure the response was successful
    if (response.status === 200) {
      console.log("Post created successfully");
      navigate("/" + response.data.id);  // Make sure `response.data.id` exists
    } else {
      throw new Error("Failed to create post");
    }
  } catch (error) {
    console.error("Error creating post:", error);
    setError(error.message);
  }
};
  return (
    <div className=" flex" id="newPostPage">
      <div className="px-5 w-3/5" id="formContainer">
        <h1 className="my-10">Add New Post</h1>
        <div className="w-full h-full" id="wrapper">
          <form onSubmit={handleSubmit} className="w-full h-full  flex flex-wrap">
            <div className="w-1/3 flex flex-col" id="item">
              <label htmlFor="title">Title</label>
              <input
                className="px-1 py-3 m-1 border mb-3"
                id="title"
                name="title"
                type="text"
              />
            </div>
            <div className="w-1/3 flex flex-col " id="item">
              <label htmlFor="price">Price</label>
              <input
                className="px-1 py-3 m-1 border mb-3"
                id="price"
                name="price"
                type="number"
              />
            </div>
            <div className="w-1/3 flex flex-col " id="item">
              <label htmlFor="address">Address</label>
              <input
                className="px-1 py-3 m-1 border mb-3"
                id="address"
                name="address"
                type="text"
              />
            </div>
            <div className="w-full flex flex-col" id="item description">
              <label htmlFor="desc">Description</label>
              <textarea
                name="desc"
                rows="4"
                cols="50"
                placeholder="Enter your description here"
                class="w-full h-48 p-2 border rounded-md mb-4" onChange={setValue} value={value}
              ></textarea>
              {/* <ReactQuill
                theme="snow"
                onChange={setValue}
                value={value}
                className="py-2 border mb-5 h-48 w-full max-w-4xl mx-auto text-xl shadow-md rounded-md"
              /> */}
            </div>
            <div className="w-1/3 flex flex-col" id="item">
              <label htmlFor="city">City</label>
              <input
                className="px-1 py-3 m-1 border mb-3"
                id="city"
                name="city"
                type="text"
              />
            </div>
            <div className="w-1/3 flex flex-col" id="item">
              <label htmlFor="bedroom">Bedroom Number</label>
              <input
                className="px-1 py-3 m-1 border mb-3"
                min={1}
                id="bedroom"
                name="bedroom"
                type="number"
              />
            </div>
            <div className="w-1/3 flex flex-col" id="item">
              <label htmlFor="bathroom">Bathroom Number</label>
              <input
                className="px-1 py-3 m-1 border mb-3"
                min={1}
                id="bathroom"
                name="bathroom"
                type="number"
              />
            </div>
            <div className="w-1/3 flex flex-col" id="item">
              <label htmlFor="latitude">Latitude</label>
              <input
                className="px-1 py-3 m-1 border mb-3"
                id="latitude"
                name="latitude"
                type="text"
              />
            </div>
            <div className="w-1/3 flex flex-col" id="item">
              <label htmlFor="longitude">Longitude</label>
              <input
                className="px-1 py-3 m-1 border mb-3"
                id="longitude"
                name="longitude"
                type="text"
              />
            </div>
            <div className="w-1/3 flex flex-col" id="item">
              <label htmlFor="type">Type</label>
              <select name="type" className="px-1 py-3 m-1 border mb-3">
                <option value="rent" defaultChecked>
                  Rent
                </option>
                <option value="buy">Buy</option>
              </select>
            </div>
            <div className="w-1/3 flex flex-col" id="item">
              <label htmlFor="type">Property</label>
              <select name="property" className="px-1 py-3 m-1 border mb-3">
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="condo">Condo</option>
                <option value="land">Land</option>
              </select>
            </div>

            <div className="w-1/3 flex flex-col" id="item">
              <label htmlFor="utilities">Utilities Policy</label>
              <select name="utilities" className="px-1 py-3 m-1 border mb-3">
                <option value="owner">Owner is responsible</option>
                <option value="tenant">Tenant is responsible</option>
                <option value="shared">Shared</option>
              </select>
            </div>
            <div className="w-1/3 flex flex-col" id="item">
              <label htmlFor="pet">Pet Policy</label>
              <select name="pet" className="px-1 py-3 m-1 border mb-3">
                <option value="allowed">Allowed</option>
                <option value="not-allowed">Not Allowed</option>
              </select>
            </div>
            <div className="w-1/3 flex flex-col" id="item">
              <label htmlFor="income">Income Policy</label>
              <input
                id="income"
                className="px-1 py-3 m-1 border mb-3"
                name="income"
                type="text"
                placeholder="Income Policy"
              />
            </div>
            <div className="w-1/3 flex flex-col" id="item">
              <label htmlFor="size">Total Size (sqft)</label>
              <input
                className="px-1 py-3 m-1 border mb-3"
                min={0}
                id="size"
                name="size"
                type="number"
              />
            </div>
            <div className="w-1/3 flex flex-col" id="item">
              <label htmlFor="school">School</label>
              <input
                className="px-1 py-3 m-1 border mb-3"
                min={0}
                id="school"
                name="school"
                type="number"
              />
            </div>
            <div className="w-1/3 flex flex-col" id="item">
              <label htmlFor="bus">bus</label>
              <input
                className="px-1 py-3 m-1 border mb-3"
                min={0}
                id="bus"
                name="bus"
                type="number"
              />
            </div>
            <div className="w-1/3 flex flex-col" id="item">
              <label htmlFor="restaurant">Restaurant</label>
              <input
                className="px-1 py-3 m-1 border mb-3"
                min={0}
                id="restaurant"
                name="restaurant"
                type="number"
              />
            </div>
            <div className="w-1/3 flex items-center justify-center" id="">
              <button
                className="bg-blue-400 p-4 px-10 rounded-sm "
                id="sendButton"
              >
                Add
              </button>
            </div>
            {error && <span>error</span>}
          </form>
        </div>
      </div>
      <div className="pl-5 w-2/5 bg-red-500 flex items-center justify-center flex-col gap-4" id="sideContainer">
        {images.map((image, index) => (
          <img src={image} key={index} className="h-36 w-42 " />
        ))}
        <UploadWidget
          uwConfig={{
            multiple: true,
            cloudName:"dywltditz",
            uploadPreset:"ESTATE",
            folder: "post",
          }}
            setState={setImages}
        />
      </div>
    </div>
  );
};

export default NewPostPage;
