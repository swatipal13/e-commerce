import React, { useEffect } from "react";
import { getData } from "../context/DataContext";
import {
  FaGamepad,
  FaHeadphones,
  FaLaptop,
  FaMobile,
  FaTv,
} from "react-icons/fa";
import { Fan } from "lucide-react";

const Category = () => {
  const { data, fetchAllProducts } = getData();
  const getUniqueCategory = (data, property) => {
    let newVal = data?.map((curElem) => {
      return curElem[property];
    });
    newVal = [...new Set(newVal)];
    return newVal;
  };

  const categoryData = getUniqueCategory(data, "category");
  console.log(categoryData);

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const icons = [
    <FaHeadphones />,
    <FaGamepad />,
    <FaMobile />,
    <FaTv />,
    <FaLaptop />,
    <Fan />,
  ];

  return (
    <div className="bg-[#ffffff] flex justify-between max-w-7xl mx-auto p-5"  style={{
    boxShadow: "inset 0 -30px 10px -10px rgba(195, 214, 49, 0.3)",
  }}>
      <div className="flex flex-col my-auto space-y-6">
        <h3 className="text-amber-700 font-semibold font-sans text-sm">
          Next-Gen Gadgets for Tech Enthusiasts
        </h3>
        <h1 className="text-4xl font-bold uppercase line-clamp-3 md:w-[500px]">
          Innovative Gadgets for Everyday Tech Lovers
        </h1>
        <p className="md:w-[500px] line-clamp-3 text-blue-950 pr-7">
          Explore the latest in smart technology — from portable gadgets and
          wearables to must-have accessories. Designed for style, speed, and
          function, our gadgets keep you connected, entertained, and ahead of
          the curve.
        </p>
        <button>Know More</button>
      </div>
<div className="relative h-[600px] w-[250px] overflow-hidden scroll-on-hover">
  <div className="animate-scroll flex flex-col items-center gap-10">
    {[...categoryData, ...categoryData].map((item, index) => (
      <div key={index} className="flex flex-col items-center gap-3">
        <div className="text-5xl text-[#c3d631] hover:scale-150 transition-all">
          {icons[index % icons.length]}
        </div>
        <button className="uppercase px-5 py-2 font-semibold cursor-pointer">
          {item}
        </button>
      </div>
    ))}
  </div>
</div>



    </div>
  );
};

export default Category;
