import React from "react";
import img from "../assets/img/hero.png";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:flex-row items-center lg:justify-between lg:px-32 px-5 pt-24 lg:pt-10 bg-PrimaryColor">
      <div className="space-y-4">
        <h1 className="text-5xl font-semibold leading-tight text-ExtraDarkColor w-full lg:w-3/4">
          Discovering and Default Your One Fashion!
        </h1>
        <p className="w-full lg:w-3/4 text-DarkColor font-medium">
          Each item is a carefully chosen masterpiece, promising not just
          fashion but a reflection of your unique style.
        </p>

        <button className="bg-ExtraDarkColor text-white  px-4 py-2 font-medium active:bg-amber-800 rounded-lg">
          <Link to="shop">shop now</Link>
        </button>
      </div>

      <div className="bg-DarkColor rounded-tr-[290px] rounded-tl-3xl rounded-br-3xl p-5 mt-10">
        <img src={img} alt="img" className="-ml-5 -mb-5" width={600} />
      </div>
    </div>
  );
};

export default Home;
