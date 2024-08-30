import React, { useEffect, useState } from "react";
import Slider from "../components/Slider";
import singlePostData from "../components/singlepostdata.js";
import { FaBath, FaBed, FaLocationDot } from "react-icons/fa6";
import bg from "/images/home1.jpeg";
import Map from "../components/Map.jsx";
import { TiMessages } from "react-icons/ti";
import { CiSaveDown2 } from "react-icons/ci";
import { FaTools } from "react-icons/fa";
import { MdOutlineMapsHomeWork, MdPets } from "react-icons/md";
import { GiBusStop, GiTakeMyMoney } from "react-icons/gi";
import { LuSchool } from "react-icons/lu";
import { IoRestaurant } from "react-icons/io5";

const SinglePage = () => {
  const [isSlider, setIsSlider] = useState(null);
  const userdata = { name: "dushyant" };
  return (
    <div id="singlepage" className="flex h-full w-full px-5">
      <div className="flex w-[60%] h-full" id="detail">
        <div className="pr-[50px] w-full" id="wrapper">
          <Slider
            isSlider={isSlider}
            setIsSlider={setIsSlider}
            images={singlePostData.images}
          />
          <div className="w-full pt-16" id="info">
            <div className="flex justify-between pr-5 w-full" id="top">
              <div className="flex flex-col gap-[20px]" id="post">
                <h1 className="text-2xl capitalize font-semibold">
                  {singlePostData.title}
                </h1>
                <div className="flex gap-3 items-center" id="address">
                  <FaLocationDot />
                  <span className="text-[#888]" id="">
                    {singlePostData.address}
                  </span>
                </div>
                <div
                  className="rounded-sm p-[5px] bg-yellow-300 w-20 text-center"
                  id="price"
                >
                  $ {singlePostData.price}
                </div>
              </div>
              <div
                className="flex gap-2 flex-col items-center justify-center rounded-sm pt-3 border p-7 h-26 bg-gray-200"
                id="user"
              >
                <img src={bg} alt="" className="h-[40px] rounded-[50px]" />
                <span className="capitalize" id="">
                  {userdata.name}
                </span>
              </div>
            </div>
            <div className="pt-10 pr-5" id="bottom">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              soluta assumenda dolorum accusamus illum recusandae! Quia hic in
              fuga illum reiciendis iusto tempore maiores commodi excepturi,
              sequi quibusdam consectetur cum aliquid ipsa. Voluptatem sapiente,
              deleniti illo cum exercitationem sequi ratione odio! Ducimus sed
              minus quos totam officia deserunt labore tempore. Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Ratione maiores
              iusto incidunt nam nemo itaque labore vero dolores eligendi
              inventore.
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-[40%] h-full bg-[#fcf5f3]" id="feature">
        <div className="px-[20px] w-full flex flex-col gap-4" id="wrapper">
          <p className="" id="title">
            General
          </p>
          <div
            className="flex flex-col gap-3 bg-white p-3 rounded-sm"
            id="listVertical"
          >
            <div className="flex items-center gap-4" id="feature">
              <FaTools />
              <div className="featureText">
                <span>Utility</span>
                <p>Renter is responsible</p>
              </div>
            </div>
            <div className="flex items-center gap-4" id="feature">
              <MdPets />
              <div className="featureText">
                <span>Pet policy</span>
                <p>pets allowed</p>
              </div>
            </div>
            <div className="flex items-center gap-4" id="feature">
              <GiTakeMyMoney />
              <div className="featureText">
                <span>property fees</span>
                <p>must have 3xl rent in total household income</p>
              </div>
            </div>
          </div>
          <p className="" id="title">
            Room Sized
          </p>
          <div
            className="flex justify-between bg-white p-3 rounded-sm"
            id="size"
          >
            <div className="flex items-center gap-2" id="size">
              <MdOutlineMapsHomeWork size={24} />
              <span>180 sqm(861sqft)</span>
            </div>
            <div className="flex items-center gap-2" id="size">
              <FaBed size={24} />
              <span> 1 bedroom</span>
            </div>
            <div className="flex items-center gap-2" id="size">
              <FaBath size={24} />
              <span>1 bathroom</span>
            </div>
          </div>
          <p className="" id="title">
            Nearby places
          </p>
          <div
            className="flex justify-between bg-white p-3 rounded-sm"
            id="places"
          >
            <div className="flex items-center gap-2" id="size">
              <LuSchool size={24} />
              <span>School</span>
            </div>
            <div className="flex items-center pl-12 gap-2" id="size">
              <GiBusStop size={24} />
              <span>BusStop</span>
            </div>
            <div className="flex items-center gap-2" id="size">
              <IoRestaurant size={24} />
              <span>Restaurant</span>
            </div>
          </div>
          <p className="" id="title">
            Location
          </p>
          <div
            className={`w-full h-[200px] ${isSlider ? " hidden " : " "}`}
            id="mapcontainer"
          >
            <Map items={[singlePostData]} />
          </div>
          <div className="flex w-full justify-between gap-5 " id="button">
            <button className="flex gap-3 bg-white py-2 px-1 rounded-sm items-center">
              <span>send message</span>
              <TiMessages />
            </button>
            <button className="flex gap-3 bg-white py-2 px-1 rounded-sm items-center">
              <span>save the places</span>
              <CiSaveDown2 />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
