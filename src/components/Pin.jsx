import React from "react";
import { Marker, Popup } from "react-leaflet";
import img from "/images/home1.jpeg";
import { Link } from "react-router-dom";

const Pin = ({ item }) => {
  return (
    <div className="flex gap-[20px]">
      <Marker position={[item?.latitude, item?.longitude]}>
        <Popup>
  
          <div className="" id="popupcontainer">
            <img src={img} alt="" className="w-[64px] h-[48px] rounded-sm" />
            <div className="flex flex-col" id="textcontainer">
              <Link to={`/${item.id}`}>{item.title}</Link>
              
              <span className="" id="bedroom">
                {item.bedroom} bedroom
              </span>
              <b>$ {item.price}</b>
            </div>
          </div>
        </Popup>
      </Marker>
    </div>
  );
};

export default Pin;
