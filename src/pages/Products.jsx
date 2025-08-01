import React, { useEffect } from "react";
import { getData } from "../context/DataContext";
import FilterSection from "../components/FilterSection";
import loading from "../assets/sand-load.gif";

const Products = () => {
  const { data, fetchAllProducts } = getData();
  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 mb-10">
        {data?.length > 0 ? (
          <div className="flex gap-8">
            <FilterSection />
            <div>{
              data?.map((product , index)=>{
                reun
              })
              }</div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-[400px]">
            <img src={loading} alt="Loading..." className="w-20 h-20 " />
          </div>
          // <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-[#c3d631]"></div>/
        )}
      </div>
    </div>
  );
};

export default Products;
