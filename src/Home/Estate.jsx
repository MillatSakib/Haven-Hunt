import React from "react";
// import EstateCard from "./EstateCard";
import SwipeBanner from "./SwipeBanner";
import VeiwCard from "./VeiwCard";

const Estate = ({ estateData }) => {
  return (
    <div>
      <div className="text-2xl md:text-3xl lg:text-4xl text-center font-bold mt-10 mb-8">
        Choose the Best
      </div>
      <div className="w-[95%] md:w-[80%] lg:w-[65%] text-center mx-auto text-slate-600 mb-10">
        Find your perfect fit! Narrow your search by selecting a community that
        matches your lifestyle. Explore vibrant downtown areas, peaceful
        suburbs, or scenic lakefront neighborhoods. We offer a variety of
        property types to suit your needs, so start your search today!
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {estateData.map((data) => (
          <VeiwCard cardData={data}></VeiwCard>
        ))}
      </div>
    </div>
  );
};

export default Estate;
