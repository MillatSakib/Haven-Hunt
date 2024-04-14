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

const ViewDetails = () => {
  const viewDet = useLoaderData();
  console.log(viewDet);
  return (
    <div className="w-[95%] md:w-[90%] lg:w-[80%] lg:max-w-[1450px] mx-auto bg-white">
      <div className="flex my-8 gap-4">
        <div>
          <div className="py-1 px-4 mt-1 bg-blue-400 text-white">Rent</div>
        </div>

        <div>
          <div className="font-semibold text-3xl md:text-4xl lg:text-5xl text-slate-600">
            999 Hamilton Dr 999a, Homestead FL
          </div>
          <div className="text-slate-500">Property ID: 003</div>
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
            <img
              src="https://ornate-moonbeam-6afef4.netlify.app/apparment-1/1.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://ornate-moonbeam-6afef4.netlify.app/apparment-1/2.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://ornate-moonbeam-6afef4.netlify.app/apparment-1/3.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://ornate-moonbeam-6afef4.netlify.app/apparment-1/4.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="my-4 flex justify-between flex-col md:flex-row">
        <div className="flex items-center gap-4 md:gap-8">
          <span className="text-blue-600 font-bold">1195 Sq Ft</span>
          <span className="flex items-center gap-1">
            <span className="text-slate-600">
              <FaBed />
            </span>
            <span className="font-semibold">3 Bedromms</span>
          </span>
          <span className="flex items-center gap-1">
            <span className="text-slate-600">
              <FaBath />
            </span>
            <span className="font-semibold">3 BathRoorm</span>
          </span>
          <span className="flex items-center gap-1">
            <span className="text-slate-600">
              <BiSolidCarGarage />
            </span>
            <span className="font-semibold">1 Garages</span>
          </span>
          <span className="flex items-center gap-1">
            <span className="text-slate-600">
              <FaSwimmingPool />
            </span>
            <span className="font-semibold">1 Swiming Pool</span>
          </span>
        </div>
        <div className="font-bold text-blue-500 text-xl md:text-2xl">
          $<span>697</span>
          <span>/per month</span>
        </div>
      </div>
      <div className="lora-400 my-8">
        <div className="my-8 text-2xl md:text-3xl font-bold text-slate-700">
          Description
        </div>
        <div className="text-xl text-slate-600">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
          laborum voluptatem quas quis quidem sapiente aliquam dignissimos earum
          ipsum accusantium ea neque autem, accusamus impedit minus. Harum
          aliquid atque nemo impedit vel, repellendus soluta tempora odit optio
          expedita. Sequi delectus tempora ab ut nisi. Voluptate vero temporibus
          provident praesentium esse totam beatae doloribus et amet fuga,
          necessitatibus recusandae quisquam officiis dolore veritatis. Mollitia
          blanditiis excepturi neque odio aut optio tempora.
        </div>
      </div>
      <div>
        <div className="my-8 text-2xl md:text-3xl font-bold text-slate-700">
          Additional Details
        </div>
        <ul className="text-[1rem] text-slate-600 list-disc">
          <li className="border-b-2 border-t-2 pb-2 pt-6">
            <span className="font-bold text-slate-800">Area:</span> 2.5 ACRES
          </li>
          <li className="border-b-2 py-2">
            <span className="font-bold text-slate-800">Type:</span> Luxury
            Apartments
          </li>
          <li className="border-b-2 py-2">
            <span className="font-bold text-slate-800">Cooling:</span>{" "}
            Fan(Central of Room) Ac
          </li>
          <li className="border-b-2 py-2">
            <span className="font-bold text-slate-800">Availavle Fan on:</span>{" "}
            Dining Room
          </li>
          <li className="border-b-2 py-2">
            <span className="font-bold text-slate-800">Dining Area:</span>{" "}
            Formal Dining Room
          </li>
          <li className="border-b-2 py-2">
            <span className="font-bold text-slate-800">Area Source:</span>{" "}
            Survey
          </li>
        </ul>
      </div>
      <div className="my-10">
        <div className="my-8 text-2xl md:text-3xl font-bold text-slate-700">
          Property Map
        </div>
        <div className="h-[700px]"></div>
      </div>
    </div>
  );
};

export default ViewDetails;
