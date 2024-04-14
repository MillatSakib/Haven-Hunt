import React from "react";
import VeiwCard from "./ViewCard";

const AllCards = () => {
  let temp = JSON.parse(localStorage.getItem("cartProperty"));
  console.log(temp);
  return (
    <div className="my-10 w-[95%] md:w-[90%] lg:w-[80%] lg:max-w-[1250px] mx-auto">
      <div className="my-16 text-2xl md:text-3xl lg:text-4xl text-center">
        All Items
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {temp.map(
          (data) => (
            <VeiwCard cardData={data[0]}></VeiwCard>
          )
          // console.log(data[0])
        )}
      </div>
    </div>
  );
};

export default AllCards;
