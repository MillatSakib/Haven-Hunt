import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaBed } from "react-icons/fa";
import { FaBath } from "react-icons/fa";
import { BiSolidCarGarage } from "react-icons/bi";
import { FaSwimmingPool } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const ViewDetails = () => {
  const viewDeta = useLoaderData();

  const handelReadBook = () => {
    const alreadyAdded = () =>
      toast.error("You have already added this Property");
    const added = () => toast("Added property in cart");

    let setLocalData = [viewDeta];
    // console.log(setLocalData);
    let avialablityCartProperty = String(localStorage.getItem("cartProperty"));
    const stringData = JSON.stringify([setLocalData]);
    if (avialablityCartProperty === "null") {
      localStorage.setItem("cartProperty", stringData);

      added();
    } else {
      avialablityCartProperty = JSON.parse(
        localStorage.getItem("cartProperty")
      ).find((localData) => localData[0].id === setLocalData[0].id);

      if (avialablityCartProperty) {
        alreadyAdded();
      } else {
        let temp = JSON.parse(localStorage.getItem("cartProperty"));
        temp.push(setLocalData);
        localStorage.setItem("cartProperty", JSON.stringify(temp));
        added();
      }
    }
  };

  return (
    <div className="w-[95%] md:w-[90%] lg:w-[80%] lg:max-w-[1250px] mx-auto bg-white">
      <div className="flex my-8 gap-4">
        <div>
          <div className="py-1 px-4 mt-1 bg-blue-400 text-white rounded-md">
            {viewDeta.status}
          </div>
        </div>

        <div>
          <div className="font-semibold text-3xl md:text-4xl lg:text-5xl text-slate-600">
            {viewDeta.title}, {viewDeta.location}
          </div>
          <div className="text-slate-500">Property ID: {viewDeta.id}</div>
        </div>
      </div>
      <div className="my-4">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper w-full"
        >
          <SwiperSlide>
            <img src={viewDeta.image[0]} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={viewDeta.image[1]} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={viewDeta.image[2]} alt="" />
          </SwiperSlide>
          {viewDeta.image[3] ? (
            <SwiperSlide>
              <img src={viewDeta.image[3]} alt="" />
            </SwiperSlide>
          ) : (
            ""
          )}
        </Swiper>
      </div>
      <div className="my-4 flex justify-between flex-col md:flex-row">
        <div className="flex items-center gap-4 md:gap-8">
          <span className="text-blue-600 font-bold">
            {" "}
            {viewDeta.area} Sq Ft
          </span>
          <span className="flex items-center gap-1">
            <span className="text-slate-600">
              <FaBed />
            </span>
            <span className="font-semibold">
              {viewDeta.facilities[3]} Bedromms
            </span>
          </span>
          <span className="flex items-center gap-1">
            <span className="text-slate-600">
              <FaBath />
            </span>
            <span className="font-semibold">
              {viewDeta.facilities[0]} BathRoorm
            </span>
          </span>
          <span className="flex items-center gap-1">
            <span className="text-slate-600">
              <BiSolidCarGarage />
            </span>
            <span className="font-semibold">
              {viewDeta.facilities[2]} Garages
            </span>
          </span>
          <span className="flex items-center gap-1">
            <span className="text-slate-600">
              <FaSwimmingPool />
            </span>
            <span className="font-semibold">
              {viewDeta.facilities[1]} Swiming Pool
            </span>
          </span>
        </div>
        <div className="font-bold text-blue-500 text-xl md:text-2xl">
          $<span>{viewDeta.price} </span>
          {viewDeta.status === "sale" ? (
            <span>(Fixed Rate)</span>
          ) : (
            <span>/per month</span>
          )}
        </div>
      </div>
      <div className="lora-400 my-8">
        <div className="my-8 text-2xl md:text-3xl font-bold text-slate-700">
          Description
        </div>
        <div className="text-[1rem] text-slate-600">
          {viewDeta.short_description}
        </div>
      </div>
      <div>
        <div className="my-8 text-2xl md:text-3xl font-bold text-slate-700">
          Additional Details
        </div>
        <ul className="text-[.8rem] text-slate-600 list-disc">
          <li className="border-b-2 border-t-2 pb-2 pt-6">
            <span className="font-bold text-slate-800">Area: </span>
            {viewDeta.acres} ACRES
          </li>
          <li className="border-b-2 py-2">
            <span className="font-bold text-slate-800">Type: </span>
            {viewDeta.title}
          </li>
          <li className="border-b-2 py-2">
            <span className="font-bold text-slate-800">Cooling:</span>{" "}
            {viewDeta.availability.fan ? "Fan(Central of Room)" : ""}{" "}
            {viewDeta.availability.ac ? ", AC" : ""}
          </li>
          <li className="border-b-2 py-2">
            <span className="font-bold text-slate-800">Availavle Fan on:</span>{" "}
            {viewDeta.availability.location
              ? viewDeta.availability.location
              : ""}{" "}
          </li>
          <li className="border-b-2 py-2">
            <span className="font-bold text-slate-800">Dining Area:</span>{" "}
            Formal Dining Room
          </li>
          <li className="border-b-2 py-2">
            <span className="font-bold text-slate-800">Area Source:</span>{" "}
            {viewDeta.area_source}
          </li>
        </ul>
      </div>
      <div className="my-10">
        <div className="my-8 text-2xl md:text-3xl font-bold text-slate-700">
          Nearby Place
        </div>
        <div className="flex justify-around border-2 rounded-lg py-2 px-8 border-blue-200">
          <div className="text-blue-700 font-semibold">
            Market: {viewDeta.distance_from_market} KM
          </div>
          <div className="text-blue-700 font-semibold">
            School: {viewDeta.distance_from_schools} Km{" "}
          </div>
        </div>
      </div>
      <div className="mt-4 mb-16 text-right">
        <button
          type="button"
          className="btn btn-primary text-white px-10"
          onClick={handelReadBook}
        >
          Add cart now
        </button>
      </div>
    </div>
  );
};

export default ViewDetails;
