import React from "react";
import ProductCard from "../layouts/ProductCard";

const Featuers = () => {
  const data = [
    {
      id: 6,
      img: "/src/assets/img/products7.jpg",
      name: "ForestFire Outerlayers",
      price: "398.00",
      discount: "24% off",
    },
    {
      id: 7,
      img: "/src/assets/img/products8.jpg",
      name: "DaintyDoll Dresses",
      price: "258.00",
      discount: "258% off",
    },
    {
      id: 8,
      img: "/src/assets/img/products9.jpg",
      name: "TrendTravers Bag",
      price: "104.00",
      discount: "35% off",
    },
    {
      id: 9,
      img: "/src/assets/img/products10.jpg",
      name: "Fitness Footgear",
      price: "299.00",
      discount: "40% off",
    },
    {
      id: 10,
      img: "/src/assets/img/products11.jpg",
      name: "UrbanBell Hoodies",
      price: "129.00",
      discount: "28% off",
    },
    {
      id: 11,
      img: "/src/assets/img/products12.jpg",
      name: "Elite Handbags",
      price: "398.00",
      discount: "24% off",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center pt-24">
      <h1 className="font-semibold text-4xl text-center text-ExtraDarkColor">
        Exclusive Products
      </h1>

      <div className="flex flex-wrap justify-center gap-5 pt-8">
        {data.map((item) => (
          <div className="md:w-2/3 lg:w-1/4">
            <ProductCard
              id={item.id}
              key={item.id}
              img={item.img}
              name={item.name}
              price={item.price}
              discount={item.discount}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featuers;
