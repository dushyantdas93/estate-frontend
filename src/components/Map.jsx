import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Pin from "./Pin";
import { Link } from "react-router-dom";
import img from "/images/home1.jpeg";

const Map = ({ items = [] }) => {
  // Set default value to an empty array
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={7}
      scrollWheelZoom={false}
      className="h-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {console.log(items)}
      {items.length > 0 &&
        items.map((places,idx) => (
          <Pin item={places} key={places.id} />
        ))}

      
    </MapContainer>
  );
};

export default Map;
