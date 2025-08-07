import React from "react";
import { getData } from "../context/DataContext";

const FilterSection = ({
  search,
  setSearch,
  setCategory,
  category,
  setBrand,
  brand,
  priceRange,
  setPriceRange,
  handleBrandChange,
  handleCategoryChange,
}) => {
  const { categoryData, brandData } = getData();
  //   console.log(categoryData);
  return (
    <div className="bg-gray-100 m-10 p-4 rounded-md- h-max">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="bg-white rounded-md border-gray-50 border-2 text-sm p-2 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 hover:bg-yellow-100"
      />

      <h1 className="mt-5 font-semibold text-xl">Category</h1>
      <div className="flex flex-col gap-2 mt-3">
        {categoryData?.map((item, index) => {
          return (
            <div key={index} className="flex gap-2">
              <input
                type="checkbox"
                name={item}
                checked={category === item}
                value={item}
                onChange={handleCategoryChange}
              />
              <button className="cursor-pointer uppercase text-sm font-semibold">
                {item}
              </button>
            </div>
          );
        })}
      </div>
      {/* brand data */}
      <h1 className="mt-5 font-semibold text-xl">Brand</h1>
      <select
        name=""
        id=""
        value={brand}
        onChange={handleBrandChange}
        className="bg-white w-full border-1 border-gray-300 rounded-md py-2 px-3 text-gray-500 mt-3 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 "
      >
        {brandData?.map((items, index) => {
          return (
            <option key={index} value={items} className="">
              {items.toUpperCase()}
            </option>
          );
        })}
      </select>
      {/* price range */}
      <h1 className="mt-5 font-semibold text-xl">Price Range</h1>
      <div className="flex flex-col gap-2">
        <label htmlFor="">
          Price Range: ${priceRange[0]} - ${priceRange[1]}
        </label>
        <input
          type="range"
          min="0"
          max="5000"
          name=""
          id=""
          value={priceRange[1]}
          onChange={(e) =>
            setPriceRange([priceRange[0], Number(e.target.value)])
          }
        />
      </div>
      <button
        className="bg-yellow-500 text-white rounded-md px-3 py-2 cursor-pointer mt-3"
        onClick={() => {
          setSearch("");
          setCategory("ALL");
          setBrand("ALL");
          setPriceRange([0,5000]);
        }}
      >
        Reset Filters
      </button>
    </div>
  );
};

export default FilterSection;
