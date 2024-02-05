import React from "react";
import ReviewCart from "../layouts/ReviewCart";

const Review = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 ">
      <h1 className="font-semibold text-center text-ExtraDarkColor text-4xl lg:pt-14 lg:mt-14 mt-24">
        Feedback Corner
      </h1>

      <div className="flex flex-col items-center xl:flex-row gap-5 justify-center py-4 my-8">
        <ReviewCart name="Emily Davis" />
        <ReviewCart name="Madison Mitchell" />
        <ReviewCart name="Aubrey Carter" />
      </div>
    </div>
  );
};

export default Review;
