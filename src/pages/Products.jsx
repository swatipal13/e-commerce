import React, { useEffect, useState } from "react";
import { getData } from "../context/DataContext";
import FilterSection from "../components/FilterSection";
import loading from "../assets/sand-load.gif";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
import Lottie from "lottie-react";
import notfound from "../assets/notfound.json";

const Products = () => {
  const { data, fetchAllProducts } = getData();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("ALL");
  const [brand, setBrand] = useState("ALL");
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [page, setPage] = useState(1);
  // const [dynamicPage, setDynamicPage] = useState();

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setPage(1)
  };
  const handleBrandChange = (e) => {
    setBrand(e.target.value);
       setPage(1)
  };

  const filterData = data?.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === "ALL" || item.category === category) &&
      (brand === "ALL" || item.brand === brand) &&
      item.price >= priceRange[0] &&
      item.price <= priceRange[1]
  );

  const dynamicPage = Math.ceil(filterData?.length / 8);

  const pageHandler = (selectedPage) => {
    setPage(selectedPage);
  };

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 mb-10">
        {data?.length > 0 ? (
          <>
            <div className="flex gap-8">
              <FilterSection
                search={search}
                setSearch={setSearch}
                category={category}
                setCategory={setCategory}
                brand={brand}
                setBrand={setBrand}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                handleCategoryChange={handleCategoryChange}
                handleBrandChange={handleBrandChange}
              />
              {filterData?.length > 0 ? (
                <div className="flex flex-col justify-center items-center">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mt-10">
                    {filterData
                      ?.slice(page * 8 - 8, page * 8)
                      .map((product, index) => {
                        return <ProductCard key={index} product={product} />;
                      })}
                  </div>
                  <Pagination
                    pageHandler={pageHandler}
                    page={page}
                    dynamicPage={dynamicPage}
                  />
                </div>
              ) : (
                <div className="flex justify-center items-center md:h-[600px] md:w-[900px] mt-10">
                  <Lottie animationData={notfound}  style={{  width: 500 }} />
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center h-[400px]">
            <img src={loading} alt="Loading... " className="w-20 h-20 " />
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
