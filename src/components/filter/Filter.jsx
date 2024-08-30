import React from 'react'
import { FaSearch } from 'react-icons/fa';

const Filter = () => {
  return (
    <div className="w-[60%] flex flex-col gap-5">
      <h1 className="font-light text-xl">
        Search result for <b>Landon</b>
      </h1>
      <div className="" id="top">
        <div className="" id="item">
          <label htmlFor="">Location</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="city location" className='border w-[41vw] h-10'
          />
        </div>
      </div>

      <div className=" flex justify-space gap-5 " id="bottum">
        <div className="" id="item">
          <label htmlFor="type">Type</label>
          <select
            name="type"
            id="type"
            className="w-32 border text-center py-2"
          >
            <option value="">any</option>
            <option value="buy">buy</option>
            <option value="rent">rent</option>
          </select>
        </div>
        <div className="" id="item">
          <label htmlFor="property">Property</label>
          <select
            name="property"
            id="property"
            className="w-32 border text-center py-2"
          >
            <option value="">any</option>
            <option value="apartment">apartment</option>
            <option value="house">house</option>
            <option value="condo">condo</option>
            <option value="land">land</option>
          </select>
        </div>
        <div className="" id="item">
          <label htmlFor="min price">Min price</label>
          <input
            type="number"
            id="minPrice"
            name="minprice"
            placeholder="any"
            className="w-32 border text-center py-2"
          />
        </div>
        <div className="" id="item">
          <label htmlFor="">Max price</label>
          <input
            type="text"
            id="maxprice"
            name="maxprice"
            placeholder="any"
            className="w-32 border text-center py-2"
          />
        </div>

        <div className="" id="item">
          <label htmlFor="">bedroom</label>
          <input
            type="text"
            id="bedroom"
            name="bedroom"
            placeholder="any"
            className="w-32 border text-center py-2"
          />
        </div>

        <button className=" border text-center bg-fece51 px-4 ">
          <FaSearch />
        </button>
      </div>
    </div>
  );
}

export default Filter