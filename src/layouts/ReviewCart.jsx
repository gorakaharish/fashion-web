import React from "react";
import { ImQuotesLeft } from "react-icons/im";

const ReviewCart = ({ name }) => {
  return (
    <div className="flex flex-col w-full lg:w-2/6 border-2 border-DarkColor p-3 rounded-lg gap-5 cursor-pointer hover:bg-PrimaryColor trabstion duration-300 r=ease-in-out">
      <div className="">
        <ImQuotesLeft size={25} />
        <h1 className="text-xl font-semibold text-ExtraDarkColor pt-4">{name}</h1>
      </div>
      <p>
        Lorem ispsum dolor sit amet consecteture adipisicing elit. Maiores
        assumenda sapinente a iste hic explicabo laboriosum praesentium. Harm,
        aperiam voluptatem.
      </p>
    </div>
  );
};

export default ReviewCart;
