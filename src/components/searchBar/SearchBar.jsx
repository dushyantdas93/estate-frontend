import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const type = ["buy", "rent"];

const SearchBar = () => {
  const [query, setquery] = useState({
    type: "buy",
    location: "",
    minprice: 0,
    maxprice: 0,
  });

  const switchType = (val) => {
    setquery((prev) => ({ ...prev, type: val }));
  };
  return (
    <div>
      {type.map((type) => (
        <button
          key={type}
          className="py-[16px] px-[32px] border capitalize [&:nth-child(1)]:rounded-tl-xl focus:bg-black focus:text-white"
          onClick={() => switchType(type)}
        >
          {type}
        </button>
      ))}

      <form
        action=""
        className="border text-center flex justify-aroud h-[64px] gap-5 rounded-bl-xl"
      >
        <input
          type="text"
          name="location"
          id=""
          placeholder="city"
          className="outline-none py-[10px] w-[200px] text-center"
        />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={100000}
          id=""
          placeholder="min"
          className="outline-none py-[10px] w-[200px] text-center"
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={100000}
          id=""
          placeholder="max"
          className="outline-none py-[10px] w-[200px] text-center"
        />
        <button className="border-none cursor-pointer bg-[#fece51] px-6">
          <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
