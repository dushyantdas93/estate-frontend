import React from "react";
import Filter from "../components/filter/Filter";
import listdata from "../assets/dummydata.js";
import Card from "../components/Card.jsx";
import Map from "../components/Map.jsx";

const ListPage = () => {
  const data = listdata;
  return (
    <div className="flex w-full h-full justify-between px-5 relative">
      <div className="w-[60%] overflow-auto" id="listcontainer">
        <div
          className="pr-[50px] flex flex-col gap-[50px] overflow-y-scroll"
          id="wraper"
        >
          <Filter />
          {data.map((item, idx) => (
            <Card item={item} key={idx + "xyz"} />
          ))}
        </div>
      </div>
      <div className=" bg-[#fcf5f3] w-[40%] cursor-pointer" id="mapcontainer">
        <Map items={data} />
      </div>
    </div>
  );
};

export default ListPage;
