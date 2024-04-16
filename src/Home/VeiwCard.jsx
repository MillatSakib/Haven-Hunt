import React from "react";
import { NavLink } from "react-router-dom";

const VeiwCard = ({ cardData }) => {
  const descirption = cardData.short_description.substring(0, 300) + "  .....";
  const IdNumber = Number(cardData.id);
  return (
    <div className="hover:shadow-2xl border-2 rounded-lg" data-aos="zoom-in">
      <div className="relative rounded-lg m-2">
        <img src={cardData.image} className="w-full rounded-lg"></img>
        <span className="bg-blue-500 text-white absolute bottom-0 right-0 text-xl px-2 py-1 rounded-tl-md rounded-br-lg">
          {cardData.status}
        </span>
        <span className="bg-orange-500 text-white absolute bottom-0 left-0 text-xl px-2 py-1 rounded-tr-md rounded-bl-lg">
          {cardData.area} sq. Ft.
        </span>
      </div>
      <div className="m-3 flex justify-between border-b-2 pb-2">
        <div className="text-[1rem] text-slate-600 font-semibold">
          {cardData.title}
        </div>
        <div className="text-[1rem] text-slate-600 font-semibold">
          Property Id: {cardData.id}
        </div>
      </div>
      <div className="my-3 mx-3 pb-3 border-b-2">{descirption}</div>
      <div className="my-3 mx-3 justify-between flex">
        <div className="text-xs text-blue-500 font-semibold">
          {cardData.segment_name}
        </div>
        <div className="text-xs text-orange-500 font-semibold">
          $ {cardData.price}
        </div>
      </div>
      <div className="mx-3 text-[.9rem] text-orange-500">
        <span className="font-semibold">Located at: </span> {cardData.location}
      </div>
      <div className="flex gap-2 items-center flex-wrap mx-3 my-4">
        Facilities:
        {cardData.facilities[3] === 0 ? (
          ""
        ) : (
          <span className="border-2 border-orange-300 px-2 py-1 rounded-full">
            Bedroom
          </span>
        )}
        {cardData.facilities[0] === 0 ? (
          ""
        ) : (
          <span className="border-2 border-blue-300 px-2 py-1 rounded-full">
            Bathrom
          </span>
        )}
        {cardData.facilities[2] === 0 ? (
          ""
        ) : (
          <span className="border-2 border-red-300 px-2 py-1 rounded-full">
            Garages
          </span>
        )}
        {cardData.facilities[1] === 0 ? (
          ""
        ) : (
          <span className="border-2 border-black-300 px-2 py-1 rounded-full">
            Swiming Pool
          </span>
        )}
      </div>
      <div className="mx-4 mt-4 mb-6">
        <NavLink
          to={`/property/${IdNumber}`}
          className="btn bg-orange-500 text-white w-full rounded-2xl"
        >
          View Details
        </NavLink>
      </div>
    </div>
  );
};

export default VeiwCard;
