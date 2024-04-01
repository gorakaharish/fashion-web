import React from "react";
import img from "../assets/img/collection.png";
import { Link } from "react-scroll";

const Collections = () => {
  return (
    <div className="h-screen lg:h-[70vh] flex flex-col justify-center lg:flex-row items-center bg-PrimaryColor mt-14 lg:px-32 px-5">
      <div className="flex justify-center w-full lg:w-2/4 pt-6">
        <img src={img} alt="img" />
      </div>

      <div className="w-full lg:w-2/4 space-y-4 pt-5 text-center lg:text-start ">
        <h1 className="text-4xl font-semibold text-ExtraDarkColor">
          Best Summer Collection
        </h1>

        <h3 className="text-lg font-medium text-DarkColor">
          Sale Get Up To 60% off
        </h3>

        <p>
          Lorem ispsum dolor sit amet consecteture adipisicing elit. Maiores
          assumenda sapinente a iste hic explicabo laboriosum praesentium. Harm,
          aperiam voluptatem!
        </p>

        <button className="bg-ExtraDarkColor px-4 py-2 font-medium text-white rounded-xl active:bg-amber-800">
          <Link to="features">Shop Now</Link>
        </button>
      </div>
    </div>
  );
};

export default Collections;
