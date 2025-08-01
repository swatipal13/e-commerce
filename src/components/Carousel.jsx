import React, { useContext, useEffect } from "react";
import { DataContext } from "../context/DataContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Category from "./Category";

const Carousel = () => {
  const { data, fetchAllProducts } = useContext(DataContext);
  console.log(data);

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        onClick={onClick}
        className={`arrow ${className}`}
        style={{ zIndex: 3 }}
      >
        <ArrowLeft
          className="arrows"
          style={{
            ...style,
            display: "block",
            background: "#c3d631",
            color: "#fff",
            position: "absolute",
            padding: "2px",
            left: "50px",
            boxShadow: "0 10px 15px -3px rgba(245, 158, 11, 0.7)",
          }}
          onMouseOver="this.style.backgroundColor = #555"
        />
      </div>
    );
  };

  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        onClick={onClick}
        className={`arrow ${className}`}
        style={{ zIndex: 3 }}
      >
        <ArrowRight
          className="arrows"
          style={{
            ...style,
            display: "block",
            background: "#c3d631",
            color: "#fff",
            position: "absolute",
            padding: "2px",
            right: "50px",
            boxShadow: "0 10px 15px -3px rgba(245, 158, 11, 0.7)",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = "#555";
          }}
        />
      </div>
    );
  };

  var settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    pauseOnHover: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow to="next" />,
    prevArrow: <SamplePrevArrow to="prev" />,
  };

  return (
    <div>
      <Slider {...settings}>
        {data?.slice(0, 7)?.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-gradient-to-r from-[00f0c29] via-[#e6f542] to-[#828c15] -z-10"
            >
              <div className="flex gap-10 justify-center h-[600px] items-center px-4">
                <div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="rounded-full w-[550px] hover:scale-105 transition-all shadow-2xl shadow-yellow-400"
                  />
                </div>
                <div className="space-y-6">
                  <h3 className="text-amber-700 font-semibold font-sans text-sm">
                    Powering Your World with the best in Electronics
                  </h3>
                  <h1 className="text-4xl font-bold uppercase line-clamp-3 md:w-[500px] text-white">
                    {item.title}
                  </h1>
                  <p className="md:w-[500px] line-clamp-3 text-blue-950 pr-7">
                    {item.description}
                  </p>
                  <button className="bg-gradient-to-r from-yellow-600 to bg-gray-200 rounded px-5 py-2 text-amber-700 cursor-pointer font-semibold">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
      <Category />
    </div>
  );
};

export default Carousel;
